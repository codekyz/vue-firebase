<template>
  <div>
    <vx-card title="테이블 테스트">
      <a-table :columns="columns" :data-source="data"> </a-table>
    </vx-card>

    <vx-card title="데이터 입력">
      <vs-input class="inputx" placeholder="Name" v-model="name" />
      <vs-input class="inputx" placeholder="Age" v-model="age" />
      <vs-input class="inputx" placeholder="Address" v-model="address" />
      <vs-button size="small" @click="onAddData()"> 데이터 추가 </vs-button>
    </vx-card>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      name: "",
      age: "",
      address: "",
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address 1",
        },
      ],
      data: [],
    };
  },
  methods: {
    onAddData() {
      var db = firebase.firestore();
      var self = this;
      var user = firebase.auth().currentUser;
      if (user) {
        db.collection("bbs")
          .add({
            uid: user.uid,
            name: self.name,
            age: self.age,
            address: self.address,
          })
          .then(function () {
            alert("성공적으로 적용 되었습니다.");
          });
      }
    },
  },
};
</script>
