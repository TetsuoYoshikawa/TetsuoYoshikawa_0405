<template>
  <div class="header flex">
    <div class="left">
      <h2>Live Share</h2>
    </div>
    <div class="right flex">
      <div class="nav-item item1">
        <a class="btn btn-secondary ml-3">会員登録</a>
      </div>
      <div class="nav-item item2">
        <a class="btn btn-outline-info ml-2">ログイン</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.header {
  padding: 20px;
  background-color: #19344e;
}

.left h2 {
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  color: white;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.right {
  align-items: center;
}

.nav-item {
  border: solid 1px #4b90ff;
  border-radius: 10px;
  padding: 10px 20px;
  margin-right: 20px;
  cursor: pointer;
}

.item1 {
  background-color: #4b90ff;
}
.item2 {
  background-color: white;
}

.btn-secondary {
  color: white;
}
.btn-outline-info {
  color: #4b90ff;
}


</style>