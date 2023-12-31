import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home";
import Detail from "@/view/Detail";
import CardItem from "@/view/CardItems.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/detail/:userId",
      name: "Detail",
      component: Detail
    },
    {
      path: "/carditem",
      name: "CardItem",
      component: CardItem
    }
  ]
});
