<template>
  <div>
    <div class="header">
      <img class="header-img" src="../assets/store.png" />
      <h2 class="header-title" @click="$router.push({path: '/'}, () => {})">RESE</h2>
      <div class="right flex">
        <select v-model="searchData_prefecture">
          <option value="">All Prefecutes</option>
          <option v-for="prefecture in prefectures" :key="prefecture.name">{{prefecture.name}}</option>
        </select>
        <select v-model="searchData_genre">
          <option value="">All Genre</option>
          <option v-for="genre in genres" :key="genre.name">{{genre.name}}</option>
        </select>
        <input type="text" placeholder="Restaurant Name" v-model="searchData_restaurant">
      </div>
      <div class="mypage">
        <button type="submit" @click="$router.push({path: '/mypage'}, () => {})">マイページ</button>
      </div>
    </div>
    <div class="restaurant-list contents">
      <div class="item">
        <div class="restaurant-card flex" v-for="restaurant in filterRestaurants" :key="restaurant.id">
          <img :src=restaurant.image_url class="restaurant-pic">
          <div class="restaurant-detail">
            <div class="restaurant-name">
              <p>{{restaurant.name}}</p>
            </div>
            <div class="tag">
              <p>#{{restaurant.prefecture.name}} #{{restaurant.genre.name}}</p>
            </div>
            <div class="button">
              <button @click="deleteRestaurant(restaurant)">削除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default{
  props:['id'],
  data(){
    return{
      restaurants: [],
      prefectures:[],
      genres:[],
      favorites:[],
      searchData_prefecture:"",
      searchData_genre:"",
      searchData_restaurant:"",
    }
  },
  computed:{
    filterRestaurants(){
      let restaurants = [];
      for(let i in this.restaurants){
        let restaurant = this.restaurants[i];
        if(restaurant.genre.name.indexOf(this.searchData_genre) !== -1 )
        if(restaurant.prefecture.name.indexOf(this.searchData_prefecture) !== -1 )
        if(restaurant.name.indexOf(this.searchData_restaurant) !== -1 ){
          restaurants.push(restaurant)
        }
      }
      console.log(restaurants);
      return restaurants;
    }
  },
  methods:{
    async getRestaurant(){
      await axios
        .get("http://127.0.0.1:8000/api/restaurants")
        .then((response => {
          this.restaurants = response.data.data.restaurant;
        }))
        .catch(error => {
          console.log(error)});
    },
    async getPrefecture(){
      await axios
        .get("http://127.0.0.1:8000/api/prefectures")
        .then((response) => {
          this.prefectures = response.data.data;
        })
    },
    async getGenre(){
      await axios
        .get("http://127.0.0.1:8000/api/genres")
        .then((response) => {
          this.genres = response.data.data;
        })
    },
    async deleteRestaurant(){
      await axios 
        .delete('http://127.0.0.1:8000/admin',{
          data:{
            user_id:reserve.user_id,
            restaurant_id:reserve.restaurant_id
          }
        })
        .then((response) => {
          console.log(response);
          alert('店舗を削除いたしました')
        })
        .catch(() =>{
          alert('店舗を削除できません')
        })
    }
  },
  created(){
    this.getRestaurant();
    this.getFavorite();    
    this.getPrefecture();
    this.getGenre();
  }
};
</script>

<style scoped>
/*////////////////
    ヘッダー
////////////////*/
.header{
  display:flex;
  height:70px;
  align-items: center;
  background-color:#ff7300;
}
.header-img{
  width:30px;
  height: 30px;
  margin:0 20px;
}
.header-title{
  color:white;
  font-size:25px;
}
.right{
  align-items:center;
  margin: 0 auto;
}
.right p {
  margin-right:20px;
  cursor: pointer;
}
.logo{
  width:150px;
  cursor: pointer;
}
select{
  padding:15px;
  border:none;
  font-size: 16px;
}
input{
  padding:17px;
  border:none;
}
.search{
  background-color:white;
  padding:17px;
  border:none;
  margin-top:1px;
}
.mypage{
  margin:0 20px;
  border-radius: 10px;
}
.mypage button{
  border-radius: 30px;
  background-color:white;
}
/*////////////////
    店舗情報
////////////////*/

.button{
  display: flex;
  flex-wrap: wrap;
}
.item{
  width:85%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.restaurant-card{
  height:450px;
  width:250px;
  box-shadow: 2px 2px 2px black;
  margin:20px 20px;
}
.restaurant-pic{
  width:100%;
  height:300px;
}
.restaurant-name{
  padding:15px 20px;
  font-size:25px;
}
.tag{
  padding-left:20px;
  font-size:20px;
  padding-bottom: 15px;
}
.heart{
  padding-left:70px;
  color:#F05654;
}
button{
  padding:10px 20px;
  margin-left: 20px;
  background-color:#ff7300;
  border:none;
  border-radius: 10px;
}
</style>
