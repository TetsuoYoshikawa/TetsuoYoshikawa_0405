<template>
  <div class="share">
    <p>ライブ情報をシェアしよう</p>
    <div class="form-control flex">
      <div class="share-artist flex">
        <input v-model="artist" placeholder="アーティスト名"/>
      </div>
      <div class="share-area flex">
        <input v-model="area" placeholder="イベント会場/講演場所"/>
      </div>
      <div class="share-date flex">
        <input v-model="date" type="date" value="2021-07-07">
      </div>
      <div class="share-want flex">
        <select class="share-select">
          <option value="" hidden>How Do?</option>
          <option value="001">行ってきました！</option>
          <option value="002">行きます！</option>
          <option value="003">行きませんか？</option>
        </select>
      </div>
    </div>
    <textarea v-model="share"></textarea>
    <div @click="send">
      <button>シェアする</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      share: "",
    };
  },
  methods: {
    send() {
      if (this.share === "") {
        alert("シェアする内容を入力してください");
      } else {
        axios
          .post("https://sleepy-beach-21961.herokuapp.com/api/shares", {
            user_id: this.$store.state.user.id,
            share: this.share,
          })
          .then((response) => {
            console.log(response);
            alert("シェアしました");
            this.share = "";
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
  },
};
</script>

<style scoped>
.share {
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
}
.share p {
  color: white;
}
.flex {
  display: flex;
}

.share input {
  width: 250px;
  padding: 10px 5px;
  margin: 5px 0;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid #dcdfe6;
  font-size: inherit;
}
.share-select {
  display: inline-block;
  padding: 0 5px;
  cursor: pointer;
  border-radius: 10px;
  font-size: inherit;
}
.share textarea {
  width: 90%;
  height: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 5px 10px;
  border: 1px solid white;
  resize: none;
  font-size: 18px;
}
button {
  width: 100px;
  text-align: center;
  padding: 10px;
  color: #fff;
  background-color: #4b90ff;
  border-radius: 10px;
  display: block;
  margin: 0 0 0 auto;
  cursor: pointer;
}

</style>