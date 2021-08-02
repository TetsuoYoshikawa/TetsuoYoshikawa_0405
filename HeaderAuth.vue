<template>
  <header>
    <img class="header-img" src="../assets/store.png">
    <h2 @click="$router.push('/')">RESE</h2>
    <div class="right flex">
      <div>
        <select>
          <option @click="$router.push({path: '/'}, () => {})">店舗一覧</option>
          <option @click="$router.push({path: '/mypage'}, () => {})">マイページ</option>>
          <option @click="logout">ログアウト</option>
        </select>
      </div>
    </div>
    <div>
      <button></button>
    </div>
  </header>
</template>
<script>
import index from "../routor/index";

export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
      router.replace("/");
    },
  }
}
</script>


<style scoped>
header{
  display:flex;
  height:70px;
  align-items: center;
  padding: 0 30px;
  background-color:#ff7300;
}
.header-img{
  width:30px;
  height: 30px;
  margin:0 20px 0 0;
}
header h2{
  color:white;
  font-size:25px;
}
select{
  width:200px;
}

</style>
