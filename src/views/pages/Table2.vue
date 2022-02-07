<template>
  <div>
    <vx-card title="테이블 테스트">
      <a-table :columns="columns" :data-source="data">
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
    </vx-card>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
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
    onUpdateData() {
      var db = firebase.firestore();
      var _ref = db.collection('bbs').doc(this.key);
      var self = this;

      _ref
        .update({
          name: self.name,
          age: self.age,
          address: self.address,
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
          })
          .then((mRef) => {
            var _t = {
              uid: user.uid,
              name: self.name,
              age: self.age,
              address: self.address,
            };

            _t['key'] = mRef.id;
            self.data.push(_t);
          });
      }
    },
  },
};
</script>
