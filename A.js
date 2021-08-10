new Vue({
  el:'#app',
  data(){
    return{
      restaurants: [],
      prefectures:[],
      genres:[],
      favorites:[],
      searchData_prefecture:"",
      searchData_genre:"",
      searchData_restaurant:"",
    };
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
  methods: {
    hamburger(){
      const target = document.getElementById("menu");
      target.addEventListener('click', () => {
      target.classList.toggle('open');
      const nav = document.getElementById("nav");
      nav.classList.toggle('in');
    });
    }
  }
    
})