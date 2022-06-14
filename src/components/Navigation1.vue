<template>
<!-- navigation Start -->
  <div class="header-area header-transparrent ">
    <div class="main-header header-sticky ">
        <div class="container">
            <div class="row align-items-center">
                <!-- Logo -->
                <div class="col-xl-2 col-lg-2 col-md-2 col-4">
                    <div class="logo">
                        <a href="#"><img src="logo.png" alt="" style="width:80%; height:80%" ></a>
                    </div>
                </div>
                <div class="col-xl-10 col-lg-10 col-md-10">
                    <!-- Main-menu -->
                    <div class="main-menu f-right d-none d-lg-block">
                        <nav>
                             <ul id="navigation">    
                                <li :class="{ active: homeNav }" @click="switchClass('home')" ><router-link to="/"> Home</router-link></li>
                                <li :class="{ active: espaceClientNav }" @click="switchClass('espaceClient')"><router-link to="/authentification">espace client</router-link></li>
                                <li :class="{ active: espacePartnerNav }" @click="switchClass('espacePartner')"><a href="#partenaire">espace partenaire</a></li>
                                <li :class="{ active: accountNav }" @click="switchClass('accountNav')"><router-link to="/profile">panier</router-link></li>
                            </ul> 
                        </nav>
                    </div>
                </div>
                <!-- Mobile Menu -->
                <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- navigation End -->
   
</template>

<script>
import $ from "jquery";

export default {
    data() {
      return{
        homeNav: true,
      espaceClientNav: false,
      espacePartnerNav: false,
      accountNav: false
      }
    },
  //     mounted() {


  // /* 7.  Custom Sticky Menu  */
      







  //     },
    methods: {
      switchClass(element){
        switch (element) {
          case "home":
            this.homeNav= true
            this.espaceClientNav= false
            this.espacePartnerNav= false
            this.accountNav= false
            break;
          case "espaceClient":
            this.homeNav= false
            this.espaceClientNav= true
            this.espacePartnerNav= false
            this.accountNav= false
            break;
          case "espacePartner":
            this.homeNav= false
            this.espaceClientNav= false
            this.espacePartnerNav= true
            this.accountNav= false
            break;
          case "accountNav":
            this.homeNav= false
            this.espaceClientNav= false
            this.espacePartnerNav= false
            this.accountNav= true
            break;
        
          default:
            break;
        }
          console.log("homenav",this.homeNav)

      }
    }
}

</script>

<style>

  @import "@/assets/css/theme.css";
  @import "@/assets/css/bootstrap.min.css";
    @import "@/assets/css/owl.carousel.min.css";
    @import "@/assets/css/flaticon.css";
    @import "@/assets/css/slicknav.css";
    @import "@/assets/css/animate.min.css";
    @import "@/assets/css/magnific-popup.css";
    @import "@/assets/css/fontawesome-all.min.css";
    @import "@/assets/css/themify-icons.css";
    @import "@/assets/css/slick.css";
    @import "@/assets/css/nice-select.css";
    @import "@/assets/css/style.css";
</style>
