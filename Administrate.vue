<template>
  <div>
    <div class="admin">
      <div class="card">
        <div class="card-title">
          <h2>店舗情報変更</h2>
        </div>
        <div class="restaurant">
          <div class="flex">
            <p>Restaurant Name:</p>
            <input class="label"/>
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Prefecture:</p>
            <input class="label"/>
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Genre:</p>
            <input class="label"/>
            <div class="under-line"></div>
          </div>
          <div class="flex">
            <p>Description:</p>
            <input class="label" />
            <div class="under-line"></div>
          </div>
          <div class="flex flex-end">
          <div>
            <p>画像</p>
          </div>
          <div class="input-box input-width600 input-width70p input-height32 flex-left">
            <label for="file" class="file-send-label">選択</label>
            <span></span>
            <input type="file" id="file" @change="fileSelected" class="input-box-input input-padding file-send" readonly>
          </div>
          <button type="submit" @click="$router.push('/login')">登録</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*////////////////
    Thanks 
////////////////*/
.card {
  margin: 200px auto;
  width: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 4px;
}
.card-title h2 {
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  background-color: #ff7300;
  padding: 20px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.restaurant {
  border-bottom: black;
}
input {
  display: block;
  width: 60%;
  border: solid 0px;
}
.label {
  width: 60%;
  font-size: 16px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
}
.img {
  width: 20px;
  height: 20px;
  padding-right: 20px;
}
.flex {
  display: flex;
}
.flex p {
  width: 150px;
}
button {
  padding: 10px 20px;
  margin-left: 20px;
  background-color: #ff7300;
  border: none;
  border-radius: 10px;
  color: white;
  margin: 30px 0;
}
.under-line {
  width: 200px;
  height: 2px;
  background: skyBlue;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
}

</style>