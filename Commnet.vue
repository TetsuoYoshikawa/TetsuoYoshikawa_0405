<template>
  <div class="comment">
    <div class="flex">
      <div class="left">
        <SideNavi />
      </div>
      <div class="right">
        <div class="title">
          <p>コメント</p>
        </div>
        <Message :id="id" />
        <div class="comment-form">
          <div class="comment-title">
            <p>コメント</p> 
          </div>
          <div class="message" v-for="(comment, index) in data" :key="index">
            <div class="flex">
              <p class="name">ユーザ</p>
            </div>
            <div>
              <p class="text">内容</p>
            </div>
          </div>
          <textarea v-model="content" type="text" ></textarea>
          <div @click="send">
            <button>コメント</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavi from "../components/SideNavi";
import Message from "../components/Message";
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      content: "",
      data: "",
    };
  },
  methods: {
    send() {
      axios
        .post("https://sleepy-beach-21961.herokuapp.com/api/comment", {
          share_id: this.id,
          user_id: this.$store.state.user.id,
          content: this.content,
        })
        .then((response) => {
          console.log(response);
          this.content = "";
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    },
    comment() {
      axios
        .get("https://sleepy-beach-21961.herokuapp.com/api/shares/" + this.id)
        .then((response) => {
          this.data = response.data.comment;
        });
    },
  },
  created() {
    this.comment();
  },
  components: {
    SideNavi,
    Message,
  },
};
</script>

<style scoped>
.comment {
  padding-top: 20px;
}
.left {
  width: 22%;
  height: 100vh;
}
.right {
  width: 70%;
  height: 100vh;
}
.flex {
  display: flex;
}
.title {
  border: 1px solid white;
  padding: 15px;
}
.title p {
  font-size: 20px;
  font-weight: bold;
}
.share-message {
  border-bottom: 1px solid white;
}
.comment-title {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}
.comment-form input {
  width: 95%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: #15202b;
  color: white;
}
.message {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
}
.comment-form textarea {
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