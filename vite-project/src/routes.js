import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import AsyncLoadData from "./pages/loadData/AsyncLoadData.vue";

import { createRouter, createWebHistory } from "vue-router";


const routes = [
     {
        path: "/",
        component: HomePage,
     },
     {
        path: "/about",
        component: AboutMe,
     },
     {
      path:"/loadData",
      component: AsyncLoadData  
     }
];

const router = createRouter({   history: createWebHistory(),   routes });

export default router;