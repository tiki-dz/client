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
                                <li class="active"><a href="http://127.0.0.1:8090/"> Home</a></li>
                                <li><a href="http://127.0.0.1:8090/profile">espace client</a></li>
                                <li><a href="#partenaire">espace partenaire</a></li>
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
        <el-dropdown-item> <a href="http://127.0.0.1:8090/authentification" style="color:black">connexion</a></el-dropdown-item>
        <el-dropdown-item  @click=" logout()" >Deconnexion</el-dropdown-item>
       
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
    data: () => ({
      // ici data
    }),
    mounted() {


/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
          $('#navigation').slicknav();
      }
    });







    },
    methods: {
            logout() {
                             

      if (localStorage.getItem("LoggedUser")) {
        localStorage.removeItem("LoggedUser");
        ElNotification({
          title: "Get back soon !",
          message: "We are waiting for you",
          type: "success",
        });
        this.$router.push({ name: "login" });

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
</style>
