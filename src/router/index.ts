import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/content",
    name: "content",
    component: () =>
      import(/* webpackChunkName: "content" */ "../views/Content.vue")
  },
  {
    path: '/namecard:uid?',
    name: 'namecard',
    component: () =>
      import(/* webpackChunkName: "namecard" */  "../views/Namecard.vue")
  },
  {
    path: '/business:id?',
    name: 'business',
    component: () =>
      import(/* webpackChunkName: "business" */  "../views/Business-process.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: 'h5bus',
  fallback: false,
  routes
});

export default router;
