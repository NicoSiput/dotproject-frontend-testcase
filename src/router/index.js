import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import ListProduct from "../views/product/ListProduct.vue";
import ListProductPicture from "../views/product/picture/ListPicture.vue";
import AddProduct from "../views/product/AddProduct.vue";
import EditProduct from "../views/product/EditProduct.vue";
import DetailProduct from "../views/product/DetailProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "productList",
    props: true,
    component: ListProduct,
  },
  {
    path: "/product/add",
    props: true,
    component: AddProduct,
  },
  {
    path: "/product/:id",
    props: true,
    component: DetailProduct,
  },
  {
    path: "/product/edit/:id",
    props: true,
    component: EditProduct,
  },
  {
    path: "/product/:productid/picture",
    props: true,
    component: ListProductPicture,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
