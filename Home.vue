<template>
  <div class="col-md-8 col-md-2 mx-auto">
    <div class="card-wrap">
      <div class="card">
        <div class="card-header align-items-center d-flex">
          <a class="no-text-decoration" href="">
            <img class="post-profile-icon round-img" src="../assets/logo.png" />
          </a>
          <a class="black-color no-text-decoration user-name" title="">
            {{user_name}}
          </a>
        </div>
        <hr>
        <a href="">
          <img src="../assets/logo.png" class="card-img-top" />
        </a>
        <div class="card-body">
          <div class="row parts">
            <div id="">
              <a class="loved hide-text" data-remote="true" rel="nofollow"
              href="">いいねを取り消す
              </a>
              <a class="love hide-text" data-remote="true" rel="nofollow" 
              href="">いいね
              </a>
            </div>
            <div>
              <a class="comment hide-text" href="#"></a>
            </div>
            <div>
              <a class="ml-auto mx-0 my-auto" rel="nofollow" href="">
                <img class="delete-post-icon" src="../assets/gomi.jpg">
              </a>
            </div>
          </div>
          <div id="like-text-post-"></div>
          <div class="comment-form">
            <span><strong>{{user_name}}</strong></span>
            <span>{{user_caption}}</span>


            <div id="comment-post">
              <div class="mb-2">
                <a class="delete-comment" data-remote="true" rel="nofollow" data-method="delete"
                href=""></a>
                <span>
                  <strong>
                    <a class="no-text-decoration black-color" href="">{{user_name}}</a>
                  </strong>
                </span>
                <span>{{user_coment}}</span>
              </div>
            </div>


            <a class="light-color post-time no-text-decoration" >{{time}}</a>
            <hr>
            <div class="row actions" id="comment-form-post-">
              <form class="w-100" id="new_comment" action="/posts//   comments"     accept-charset="UTF-8"
              data-remote="true" method="post">
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input value="" type="hidden" name="user_id" />
                <input value="" type="hidden" name="post_id" />
                <input class="form-control comment-input border-0" placeholder="コメント ..." autocomplete="off" type="text"
                  name="comment" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user_name: 't3y18',
      user_caption:"ぜひいいねをおしてください",
      user_coment:"いいね",
      time:2021.10,
      styleData: { color: 'red' }
    }
  }
}
</script>
<style scoped>
/* change border colour to suit your needs */
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em auto;
  padding: 0;
  width:95%;
}
input,
select {
  vertical-align: middle;
}


#app{
  background-color: gainsboro;
}
.card{
  width:600px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
}
.card-header{
  background-color: rgb(255, 255, 255);
}
.d-flex{
  display: flex;
  line-height: 40px;
}
.ml-auto{
  margin-right:80%;

}
.post-profile-icon {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px 10px 0 10px;
}
.card-img-top{
  width:100%;
}
.card-wrap {
  margin: 40px 0px;
}
.user-name{
  margin-top: 10px;
}
.no-text-decoration:hover {
  text-decoration: none;
}
.black-color {
  color: #262626;
}
.parts {
  margin: 12px 12px;
  display:flex;
}
.love {
  background-repeat: no-repeat;
  height: 36px;
  width: 36px;
  background-size: 36px !important;
}
.comment {
  margin-left: 15px;
  background-image: url("../assets/logo.png");
  height: 36px;
  width: 36px;
  background-size: 40px !important;
}
.comment-form{
  margin-left: 20px;
}
.post-time {
  margin:0;
  color:#999;
  font-size:10px;
}
.post-sub-text {
  text-decoration: none;
  color: #262626;
}
.post-sub-text {
  text-decoration: none;
  color: #262626;
}
.delete-post-icon {
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  background-size: 20px !important;
  color: #262626;
  font-size: 20px;
  margin-left:450px;
}
.loved {
  background-image:url('../assets/logo.png');
  background-repeat: no-repeat;
  height: 36px;
  width: 36px;
  background-size: 36px !important;
}
.hide-text {
  display: block;
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
}
.hide-text {
  display: block;
  overflow: hidden;
  text-indent: 110%;
  white-space: nowrap;
}
.delete-comment {
  background-repeat: no-repeat;
  width: 11px;
  height: 11px;
  float: right;
  margin: 5px 0 0 10px;
  background-size: 11px !important;
}
.row{
  padding-bottom: 20px;
  margin-left: 20px;
}
input{
  border: white;
  padding:10px 350px 10px 0px;
}
</style>