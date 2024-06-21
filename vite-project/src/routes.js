import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import AsyncLoadData from "./pages/loadData/AsyncLoadData.vue";
import WorkExperience from "./pages//about/WorkExperience.vue";
import EducationExperience from "./pages/about/EducationExperience.vue";
import BlogList from "./pages/blog/BlogList.vue";
import BlogDetail from "./pages/blog/BlogDetail.vue";

import { createRouter, createWebHistory } from "vue-router";
import BlogManagement from "./pages/blogmgmt/BlogManagement.vue";
import AddBlog from "./pages/blogmgmt/AddBlog.vue";
import RightSideBar from "./pages/blogmgmt/RightSidebar.vue";
import BlogDetails from "./pages/blogmgmt/BlogDetails.vue";


const routes = [
     {
        path: "/",
        component: HomePage,
     },
     {
        path: "/about",
        component: AboutMe,
        children: [
            {  path: "work", component: WorkExperience},
            {  path: "education", component: EducationExperience},
        ]
     },
     {
      path:"/loadData",
      component: AsyncLoadData  
     },
     {
      path:"/blog",
      component: BlogList
     },
     {
      path: "/blog/:postId",
      component: BlogDetail,
    },
    {
      path: "/blogmgmt",
      component: BlogManagement,
    },
    {
      path: "/blogs",
      component: BlogManagement,
      children: [
        {
         path: "new",
         components: {
            default: AddBlog,
            rightSideBar: RightSideBar,
         }
        },
        {
         path:"details",
         component: BlogDetails
        },
      ],
    },
];

const router = createRouter({   history: createWebHistory(),   routes });

export default router;