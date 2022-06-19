<template>
  <div id="app">
    <button @click="upload">{{ content }}</button>
    <br />
    <div id="table">{{ table }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    upload() {
      console.log("hello world");
      axios
        .get("/stockService/stock/list?code=002094", {
          headers: {},
          params: {},
        })
        .then((result) => {
          this.msg = result.data.records;
          // alert('执行成功');
          console.log(result);
          this.table = result.data.records;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  el: "#app",
  data: function () {
    return {
      content: "hello world",
      table: "123",
    };
  },
};
</script>