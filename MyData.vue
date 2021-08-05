<template>
  <div class="item">
    <div class="restaurant-card flex"  v-for="restaurant in restaurants" :key="restaurant.id">
      <div class="owner-name">
        <p>Your Name:{{$store.state.user_name}}</p>
        <p>Your E-mail:{{$store.state.user_email}}</p>
      <div class="restaurant-name" >
        <img class="img" src="../assets/Back.png" @click="$router.push('/')">
        <h2 class="restaurant-title">No.{{restaurant.id}}:{{restaurant.name}}</h2>
      </div>
      <img :src=restaurant.image_url class="restaurant-pic">
      <div class="restaurant-detail">
        <div class="tag" style="padding:20px;font-size:20px"> 
          <p>Prefecture:{{restaurant.prefecture.name}} </p>
          <p>Genre:{{restaurant.genre.name}}</p>
        </div>
        <div class="description" style="padding-left:20px;font-size:16px">
          <p>{{restaurant.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>