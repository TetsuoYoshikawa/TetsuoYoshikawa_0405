<template>
  <div>
    <div class="left-padding">
      <img class="logo" src="../assets/logo.png" />
      <div class="flex icon-field" @click="$router.push('/home')">
        <img class="icon" src="../assets/home.png" />
        <p>ホーム</p>
      </div>
      <div class="flex icon-field" @click="$router.push('/profile')">
        <img class="icon" src="../assets/profile.png" />
        <p>プロフィール</p>
      </div>
      <div class="flex icon-field" @click="$store.dispatch('logout')">
        <img class="icon" src="../assets/logout.png" />
        <p>ログアウト</p>
      </div>
    </div>
  </div>
</template>

<script>
import ShareMessage from "../components/ShareMessage";
export default {
  components: {
    ShareMessage
  }
};
</script>

<style scoped>
.left-padding {
  margin: 20px;
  border: solid 2px #4b90ff;
  background-color: #19344e;
  border-radius: 20px;
  padding: 20px;
  width: 20%;
}
.flex {
  display: flex;
}
.logo {
  width: 100px;
}
.icon-field {
  margin-top: 30px;
  cursor: pointer;
  color: white;
}
.icon {
  width: 25px;
}
.icon-field p {
  font-size: 16px;
  padding-left: 15px;
  padding-top: 5px;
}

</style>