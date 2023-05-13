import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/countries",
      name: "countries",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CountriesView.vue"),
    },

    {
      path: '/login',
      name: 'login',      
      component: () => import('../components/LoginComponent.vue')
    },

    {
      path: '/register',
      name: 'register',      
      component: () => import('../components/RegisterComponent.vue')
    },

    {
      path: "/countries/:code",
      name: "country",
      component: () => import("../views/CountryView.vue"),
    },
    {
      path: "/capitalsGame/",
      name: "capitalsGame",
      component: () => import("../views/CapitalsGameView.vue"),
    },
    
  ],
});

export default router;