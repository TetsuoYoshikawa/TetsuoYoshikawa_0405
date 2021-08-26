<template>
    <div class="header">
      <div class="left">
        <h2 class="header-title">Green</h2>
      </div>
      <div class="right text-area">
        <nav class="nav" id="nav" :class="{in:active}">
          <ul class="menu" id="menu">
            <li class="moble-ul left">
              <img class="menu-title" src="../assets/menu.png">
              <ul class="menu-ber">
                <li>
                  <img src="../assets/home.png" class="icon" />
                  <p class="menu-a" @click="$router.push({path: '/'}, () => {})">店舗一覧</p>
                </li>
                <li>
                  <img src="../assets/profile.png" class="icon" /> 
                  <p class="menu-a"  @click="$router.push({path: '/mypage'}, () => {})">ユーザー情報</p>
                </li>
                <li>
                  <img src="../assets/logout.png" class="icon" />
                  <p class="menu-a"  @click="logout">ログアウト</p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
export default{
  data() {
    return {
      logo:"",
      menu:"",
      active :false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      $router.replace("/");
    },
    hamburger() {
      this.active = !this.active
    },
  }
}
</script>

<style scoped>
.header {
  display: flex;
  height: 70px;
  padding:0 0 0 20px;
  align-items: center;
  background-color:greenyellow;
  justify-content: space-between;
}
.header-logo{
  height:70px;
}
.left{
  position: relative;
  right:20px;
}
.header-title {
  font-size: 25px;
  font-weight: bold;
  color: white;
  line-height: 75px;
  cursor: default;
  margin: 0 0 0 20px;
}
.menu{
  list-style: none;
  height: 50px;
  display: flex;
}
.menu-title{
  height:50px;
  width:50px;
}
.menu-ber{
  background-color:greenyellow;
  position: absolute;
  width:200px;
  right:-20px;
}
.icon{
  height:30px;
  margin:0 20px;
  margin-top: 20px;
}
.menu li{
  width: 100%;
}
.menu-ber li p{
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
}
.menu li ul li{
  overflow: hidden;
  height: 0;
  transition: .2s;
}
.menu li ul li p{
  padding: 13px 15px;
  margin-top: 18px;
}
.menu li:hover ul li{
  display: flex;
  height: 70px;
  border-bottom: 1px solid #fff;
}
.menu li:hover ul li:first-child{
  border-top: 0;
}
.menu li:hover ul li:last-child{
  border-bottom: 0;
}
</style>