import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ComputedView from "../views/ComputedView.vue";
import PropsView from "../views/PropsView.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/computed",
    name: "computed",
    component: ComputedView,
  },
  {
    path: "/props",
    name: "props",
    component: PropsView,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
