new Vue({
  el: '#app',
  data() {
    return {
      logo:"",
      menu:"",
      hamburger: "",
      state_auth:true,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      router.replace("/");
    },
    hamburgerOpen(){
      if(this.hamburger == "hamburger"){
        this.logo = "no-logo";
        this.menu = "menu-open";
        this.hamburger = "hamburger-close";
      }else{
        this.logo = "";
        this.menu = "";
        this.hamburger = "hamburger";
      }
    }
  }
});