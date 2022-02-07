<template>
  <div>
    <vx-card title="테이블 테스트">
      <a-table :columns="columns" :data-source="data">
        <template slot="img" slot-scope="record">
          <img v-if="record.img" :src="record.img" style="width:50px; height:50px;"/>
        </template>
        <template slot="operation" slot-scope="record">
          <button @click="() => edit(record)">선택</button>
        </template>
      </a-table>
    </vx-card>

    <vx-card title="데이터 입력">
      <vs-input class="inputx" placeholder="Name" v-model="name" />
      <vs-input class="inputx" placeholder="Age" v-model="age" />
      <vs-input class="inputx" placeholder="Address" v-model="address" />
      <vs-button size="small" @click="onAddData()"> 데이터 추가 </vs-button>
      <vs-button size="small" @click="onUpdateData()">
        데이터 업데이트
      </vs-button>
      <vs-button size="small" @click="onDeleteData()">
        데이터 삭제
      </vs-button>

      <div>이미지 업로드</div>
      
      <div class="col-md-10" v-if="key">
        <a-upload
          :fileList="fileList"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <a-button> <a-icon type="upload"/> 업로드 </a-button>
        </a-upload>
        <img src="img" />
      </div>
    </vx-card>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      fileList: [],
      img: '',
      key: '',
      name: '',
      age: '',
      address: '',
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address'
        },
        {
          title: 'img',
          key: 'img',
          scopedSlots: { customRender: 'img' }
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      data: []
    }
  },
  mounted() {
    this.onLoadData();
  },
  methods: {
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    handleChange(info) {
      if(info.file.status === 'removed') {
        this.handleRemove();
      } else {
        this.createFile(info.file, 0);
      }
    },
    handleRemove(file) {
      this.fileList = [];
      this.img = '';
    },
    createFile(file, idx) {
      if (!file.type.match('image.*')) {
        alert('이미지 파일을 선택해주세요.');
        this.handleRemove(file);
        return;
      } else {
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.saveToFirebaseStorage(e, file, idx);
        };
        reader.readAsDataURL(file);
      }
    },
    saveToFirebaseStorage(e, items, idx) {
      var _key = new Date().getTime() + idx;
      var self = this;

      var storage = firebase.storage();
      var storageRef = firebase.storage().ref();

      var _name = items.name.replace(
        /[~`!#$%\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g,
        ""
      );

      var user = firebase.auth().currentUser;

      var uploadTask = storageRef
        .child('data/' + user.uid + '/' + _key + '/' + _name)
        .put(items);

      uploadTask.on(
        'state_chaged',
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          
          console.log("Upload is " + progress + "% done"); switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running' console.log("Upload is running");
            break;
          }
        },
          (error) => { console.log(error);},
          () => {
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadURL) => {
              self.img = downloadURL; 
            });
          }
      )
    },
    onUpdateData() {
      var db = firebase.firestore();
      var _ref = db.collection('bbs').doc(this.key);
      var self = this;

      _ref
        .update({
          name: self.name,
          age: self.age,
          address: self.address,
          img: self.img
        })
        .then(() => {
          self.onRefreshData();
          console.log("document successfully updated!");
        })
        .catch((error) => {
          console.error("error updating document: ", error);
        });
    },
    edit(r) {
      this.name = r.name;
      this.age = r.age;
      this.address = r.address;
      this.key = r.key;
      this.img = r.img;
    },
    onInitData() {
      this.key = ''
      this.name = ''
      this.age = ''
      this.address = ''
    },
    onPopupData() {
      var self = this;
      self.data = self.data.filter(item => {
        return item.key != self.key
      })
      self.onInitData();
    },
    onRefreshData() {
      this.data = this.data.filter((item) => {
        if (item.key == this.key) {
          item.name = this.name
          item.age = this.age
          item.address = this.address
          item.img = this.img
        }
        return item
      })
      this.onInitData();
    },
    onLoadData() {
      var db = firebase.firestore();
      var self = this;
      db.collection('bbs')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var _t = doc.data();

            _t['key'] = doc.id;
            self.data.push(_t);
          });
        });
    },

    onDeleteData() {
      var db = firebase.firestore();
      db.collection('bbs')
        .doc(this.key)
        .delete()
        .then(() => {
          this.onPopupData();
          console.log('삭제성공');
        })
        .catch((error) => {
          console.log('error : ', error);
        })
    },
    onAddData() {
      var db = firebase.firestore();
      var self = this;
      var user = firebase.auth().currentUser;
      if (user) {
        db.collection('bbs')
          .add({
            uid: user.uid,
            name: self.name,
            age: self.age,
            address: self.address,
            img: self.img
          })
          .then((mRef) => {
            var _t = {
              uid: user.uid,
              name: self.name,
              age: self.age,
              address: self.address,
              img: self.img
            };

            _t['key'] = mRef.id;
            self.data.push(_t);
          });
      }
    },
  }
};

</script>
