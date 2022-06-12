
import { createRouter, createWebHistory } from "vue-router";
import AboutViewVue from "@/views/AboutView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import CodeVerificationView from "@/views/CodeVerificationView.vue";
import ResetPwView from "@/views/ResetPasswordView.vue"
/*
function CheckLogin(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
  else isAuthenticated = false;
  console.log("auth: " + isAuthenticated);
  console.log("to name: " + (to.name == "login"));
  if (isAuthenticated && to.name !== "login") {
    next();
  } else if (to.name == "login" && !isAuthenticated) {
    next();
  } else if (isAuthenticated) {
    next("/home");
  } else next("/login");
}
*/
/* eslint-disable prettier/prettier */
import HomeView from "@/views/HomeView.vue";
import ForgetPw1 from "@/views/forget Password/ForgetPw1.vue";
import ForgetPw2 from "@/views/forget Password/ForgetPw2.vue";
import NotFound from "@/views/NotFoundView.vue";
import ForgetPw from "@/views/forget Password/ForgetPasswordView.vue";
import ProfileVue from "@/views/ProfileView.vue";
import ResetPassword1 from "@/views/ResetPasswordView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      // beforeEnter: CheckLogin,
    },
    {
      path: "/forgetPw",
      name: "forgetPassword",
      component: ForgetPw,
    },
    { 
      path: "/resetPw", 
      name: "forgotpw2",
      component: ForgetPw2
    },
    { 
      path: "/validateTheEmail", 
      name: "forgotpw1", 
      component: ForgetPw1, 
      props: true 
    },
    {
      path: "/authentification",
      name: "login",
      component: LoginViewVue,
      //beforeEnter: CheckLogin,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileVue,
      //beforeEnter: CheckLogin,
    },
    { 
      path: "/resetPassword", 
      name: "ResetPwView",
      component: ResetPwView,
    },
    {
      path: "/resetPassword1",
      name: "ResetPasswords1",
      component: ResetPassword1,
      //beforeEnter: CheckLogin,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
   
    {
      path: "/code",
      name: "code",
      component: CodeVerificationView,
      //beforeEnter: CheckLogin,
    },
   
  ],
});

function CheckLogin(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem("LoggedUser")) isAuthenticated = true;
  else isAuthenticated = false;
  console.log("auth: " + isAuthenticated);
  console.log("to name: " + (to.name == "login"));
  if (isAuthenticated && to.name !== "login") {
    next();
  } else if (to.name == "login" && !isAuthenticated) {
    next();
  } else if (isAuthenticated) {
    next("/home");
  } else next("/login");
}

export default router;
