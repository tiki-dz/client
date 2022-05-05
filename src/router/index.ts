
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutViewVue from "../views/AboutView.vue";
import LoginViewVue from "@/views/LoginView.vue";
import NotFound from "../views/NotFound.vue";

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
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        // { path: "subCategory", name: "subCategory", component: subCategory },
        // { path: "SubList/:idCategory", component: SubList },
        // { path: "", component: Dashboard },
      ],
      // beforeEnter: CheckLogin,
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
      path: "/login",
      name: "login",
      component: LoginViewVue,
      //beforeEnter: CheckLogin,
    },
    
  ],
});



export default router;
