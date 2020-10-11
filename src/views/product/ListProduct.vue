<template>
  <div class="list-product">
    <Header />
    <div class="container">
      <div class="result"></div>

      <ListProduct :listProduct="this.listProduct"></ListProduct>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListProduct from "@/components/listProduct.vue";

import api from "@/globals/api";
import API_ENDPOINT from "@/globals/api-endpoint";

export default {
  components: {
    Header,
    ListProduct,
  },
  data() {
    return {
      listProduct: [],
    };
  },
  mounted() {
    this.getAllData();
  },
  methods: {
    getAllData() {
      api
        .get(API_ENDPOINT.PRODUCTS)
        .then((res) => {
          this.listProduct = res.data.data;
        })
        .catch((error) => {
          this.showError(error);
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    showError(err) {
      const resultContainer = document.querySelector(".result");
      resultContainer.innerHTML = err;
    },
  },
};
</script>
