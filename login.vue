<template>
  <div class="login">
    <div class="main">
      <div class="card devise-card">
        <div class="form-wrap">
          <div class="form-group text-center">
            <h2 class="mx-auto">Live Share</h2>
            <p class="text-secondary">友達とライブ情報をシェアしよう！</p>
          </div>
          <form>
            <div class="form-group">
              <input class="form-control" placeholder="メールアドレス" autocomplete="email" type="email" name="email" required>
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="パスワード" autocomplete="off" type="password" name="password" required>
            </div>
            <div class="actions">
              <button type="submit" name="commit" class="btn btn-primary w-100">ログインする</button>
            </div>
          </form>
          <p class="devise-link">
            アカウントをお持ちですか？  
            <a href="/users/sign_in">サインインする</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.login {
  margin: 0 auto;
  display: block;
  flex: 1;
  text-align: center;
  flex-basis: auto;
  box-sizing: border-box;
  background-color: #dcdfe6;
}

.devise-card {
  border: none;
}

.form-wrap {
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
}

.form-group h2 {
  margin: 20px auto;
  font-size: 50px;
  font-family: "Courier New", Courier, monospace;
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
  padding:10px 125px ;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.devise-link {
  text-align: center;
  margin: 16px 0;
}

#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}

@media screen and (max-width: 768px) {
  .main {
    padding: 75px 0;
  }
  .devise-card {
    background-color: #fafafa;
  }
}
</style>