<template>
  <div class="col-md-offset-2 mb-4 edit-profile-wrapper">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="profile-form-wrap">
          <form class="edit_user" enctype="multipart/form-data" action="/users/update" accept-charset="UTF-8" method="post">
            <input name="utf8" type="hidden" value="&#x2713;" />
            <input type="hidden" name="id" value="" />
            <div class="form-group">
              <label for="user_profile_photo">プロフィール写真</label><br>
              <p>
                <img src=""  />
              </p>
              <input type="file" name="user_profile_photo" value="}"
              accept="image/jpeg,image/gif,image/png" />
            </div>
  
            <div class="form-group">
              <div for="user_name"><strong>名前</strong></div>
              <input autofocus="autofocus" class="form-control" type="text" value=""
              name="user_name" />
            </div>
  
            <div class="form-group">
              <div for="user_email"><strong>メールアドレス</strong></div>
              <input autofocus="autofocus" class="form-control" type="email" value=""
              name="user_email" />
            </div>
  
            <div class="form-group">
              <div for="user_password"><strong>パスワード</strong></div>
              <input autofocus="autofocus" class="form-control" type="password"
              value="" name="user_password" />
            </div>
  
            <div class="form-group">
              <div for="user_password_confirmation"><strong>パスワードの確認</strong></div>
              <input autofocus="autofocus" class="form-control" type="password" name="user_password_confirmation" />
            </div>
  
            <button type="submit" name="commit" class="btn btn-primary"  ><strong style="color:white">変更する</strong></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
})
</script>
<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

input,
select {
  vertical-align: middle;
}

* {
  color: black;
}



.row{
  width:70%;
  margin: 0 auto;
}
.profile-form-wrap {
  background: #fff;
  padding: 20px;
  border: 1px solid #e6e6e6;
}

.profile-form-wrap label {
  font-weight: bold;
}

.edit-profile-wrapper {
  margin-top: 60px;
}


.devise-card {
  border: none;
}

.form-wrap {
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
}

.logo-img {
  background-image: url("/images/logo.png");
  background-repeat: no-repeat;
  height: 56px;
  width: 180px;
  background-size: 160px;
  background-size: 180px !important;
}

.card {
  background-color: white;
}

.form-control {
  border: 1px solid #dcdfe6;
  font-size: inherit;
}

input {
  margin: 10px 0;
  padding:10px 150px 10px 5px;
}

button{
  padding:15px 80px ;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 10px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.devise-link {
  text-align: center;
  margin: 16px 0;
}

</style>