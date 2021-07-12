<template>
  <div>
    <Header />
      <div class="card">
        <div class="title">
          <h2>ログイン</h2>
        </div>
        <div class="form">
          <div class="email">
            <img src="assets/email.png"/>
            <input placeholder="Email" type="email" v-model="email" class="label" />
            <div class="underline"></div>
          </div>
          <div class="password">
            <img src="assets/password.png" >
            <input placeholder="Password" type="password" v-model="password" class="label" />
            <div class="underline"></div>
          </div>
          <button class="button" @click="auth">ログイン</button>
        </div>
      </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data(){
    return {
      email:"",
      password:""
    };
  },
  components:{
    Header
  },
  methods:{
    auth(){
      this.$store.dispatch("login",{
        email:this.emil,
        password:this.password
      });
    }
  }
};
</script>


<style scoped>
.title{
  color:white;
  background: #ff7300;
  height:70px;
  line-height: 70px;
  text-align: center;
  border-radius: 5px 5px 0 0;
}

button{
  margin:30px 0 10px 0;
  position: relative;
  display: inline-block;
  padding: 0.25em 2.0em;
  text-decoration: none;
  color: #FFF;
  background: #ff7300;
  border-bottom: solid 2px #d27d00;
  border-radius: 4px;
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
}
button:active{
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
.card {
 margin: 200px auto;
 width: 400px;
 background: #fff;
 border-radius: 5px;
 box-shadow: 2px 2px 2px black;
}
.card p {
 color: black;
 font-weight: bold;
 text-align: center;
}
img{
  width:30px;
  height:30px;
}
input {
 margin-top: 15px;
 width: 80%;
 padding: 10px;
 color: black;
}

.label {
  width: 200px;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
}

.underline {
  width: 200px;
  height: 2px;
  background: skyBlue;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
  margin-left: 100px;
}
.form {
 text-align: center;
}
.form button {
 margin-top: 15px;
}

</style>
