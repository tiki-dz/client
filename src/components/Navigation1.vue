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
                                <li :class="{ active: homeNav }" @click="switchClass('home')" ><router-link to="/"> Acceuil</router-link></li>
                                <li :class="{ active: espaceClientNav }" @click="switchClass('espaceClient')"><router-link to="/profile">espace client</router-link></li>
                                <!-- <li :class="{ active: espacePartnerNav }" @click="switchClass('espacePartner')"><a href="#partenaire">espace partenaire</a></li> -->
                                <!-- <li :class="{ active: accountNav }" @click="switchClass('accountNav')"><router-link to="/profile">panier</router-link></li> -->
                                <li>
                                 <el-dropdown>
    <span class="el-dropdown-link">
                               <img src="@/assets/userProfile.png" style="width:25px">
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :class="{ hide: logged}"> <a href="http://127.0.0.1:8090/authentification"  style="color:black">Se connecter</a></el-dropdown-item>
        <el-dropdown-item  @click=" logout()" :class="{ hide: !logged }" >Se déconnecter</el-dropdown-item>
       
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</li>



                              
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

import { ElNotification } from "element-plus/es";

import $ from "jquery";

export default {
    data() {
      return{
        logged:false,
        homeNav: true,
      espaceClientNav: false,
      espacePartnerNav: false,
      accountNav: false
      }
    },
      created() {


if(localStorage.getItem("LoggedUser")) this.logged=true




      },
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

      },
       logout() {
                             

      if (localStorage.getItem("LoggedUser")) {
        localStorage.removeItem("LoggedUser");
        ElNotification({
          title: "Au revoir!",
          message: "A bientot",
          type: "success",
        });
        this.$router.push({ name: "login" });
        this.logged=false
      } else {
        ElNotification({
          title: "Warning",
          message: "Server error",
          type: "warning",
        });
      }
    },

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
    .hide{
      display: none !important;
    }
</style>
