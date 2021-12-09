<template>
  <div class="contact-page">
    <div class="single-eyecatch eyecatch page-eyecatch">
      <div class="page-title">
        <h1 class="page-title__h1">CONTACT</h1>
      </div>
    </div>
    <div class="contact">
      <div class="form">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-medel="name" />
        </div>
        <div>
          <label for="mail">E-mail:</label>
          <input type="email" id="mail" v-model="email" />
        </div>
        <div>
          <label for="tel">Tell:</label>
          <input type="tel" id="tel" v-model="tel" />
        </div>
        <div>
          <label for="msg">Message:</label>
          <textarea id="msg" v-model="message"></textarea>
        </div>
        <div class="button-submit">
          <button class="button" type="submit" @click="send()">Button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default{
  data(){
    return {
      name:"",
      email:"",
      tel:"",
      message:""
    }
  },
  methods:{
    async send(){
      await axios
        .post('http://127.0.0.1:8000/api/email',{
          name:this.name,
          email:this.email,
          tel:this.tel,
          message:this.message,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          alert('メールが送信できませんでした。お手数ですがもう一度ご確認ください。');
          console.log(error);
        })
     }
  }
}
</script>

<style scoped>
/*------------------------*/
/*         contact        */
/*------------------------*/

.single-eyecatch {
  font-size: 50px;
  text-align: center;
  padding: 30px 0;
}
.contact {
  margin: 0 20px;
}

.catch-text {
  font-size: 16px;
  color: #666;
  padding: 0 140px;
  letter-spacing: 0.08em;
  line-height: 1.8;
  margin: 40px 0;
  text-align: center;
}

.form {
  width: 70%;
  margin: 0 auto;
}

.form > div input {
  margin-bottom: 20px;
  padding: 7px;
}

label {
  display: inline-block;
  width: 30%;
}

input,
textarea {
  box-sizing: border-box;
  border: 1px solid #999;
  width: 65%;
}

textarea {
  vertical-align: top;
  height: 15em;
}

.button-submit {
  text-align: center;
}

.button {
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  margin: 30px 0;
}

@media screen and (max-width: 768px) {

  /* contact */
  label {
    display: block;
  }
  .form > div {
    margin: 0 auto;
  }
  input,
  textarea {
    width: 100%;
  }

  .magazine-colum {
    width: 80%;
  }
  .magazine-colum.top-interview {
    width: 80%;
  }

  .cta-text {
    width: 90%;
    margin-bottom: 30px;
  }
  .top-eyecatch {
    margin: 0;
  }

  .single-eyecatch img {
    height: auto;
    object-fit: contain;
  }

  .single-title {
    font-size: 25px;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .main-text h2 {
    font-size: 23px;
    border-bottom: 3px solid #707070;
    padding: 10px;
    margin: 20px 0;
  }

  .main-text h3 {
    font-size: 18px;
    border-bottom: 2px solid #707070;
    border-left: 10px solid #707070;
    border-top: 2px solid #707070;
    border-right: 2px solid #707070;
    padding: 10px;
    margin: 20px 0 20px 0;
  }
  .main-text h4 {
    font-size: 15px;
    border-bottom: 1px solid #707070;
    border-left: 10px solid #707070;
    padding: 10px;
    margin: 20px 0 20px 0;
  }

  .single-container {
    margin: 0 15px;
  }

  .single-container p {
    font-size: 14px;
  }

  .eyecatch {
    padding: 0;
  }

  .single-category-tag {
    top: -32px;
  }

  .single-container {
    padding: 15px;
  }

  .news-title {
    display: block;
    margin: 10px;
  }
  .news-list {
    padding: 8px 0;
  }

  .sidebar {
    width: 90%;
  }

  .page-title__h1 {
    font-size: 25px;
    line-height: 1.2;
  }
}

</style>