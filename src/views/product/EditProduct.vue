<template>
  <div class="edit-product">
    <Header />
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Edit Product</h5>

          <form enctype="multipart/form-data" @submit.prevent="submit">
            <div class="form-group">
              <label for="productName">Product Name</label>
              <input
                type="text"
                class="form-control"
                id="productName"
                v-model="product.name"
                required
              />
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="productCode">Product Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="productCode"
                    v-model="product.code"
                    required
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="productWeight">Weight <small>(gr)</small></label>
                  <input
                    type="number"
                    class="form-control"
                    id="productWeight"
                    min="1"
                    v-model="product.weight"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="productDescription">Description</label>
              <textarea
                class="form-control"
                id="productDescription"
                rows="4"
                v-model="product.description"
                required
              ></textarea>
            </div>

            <ProductPrices
              :product_prices="product.product_price"
            ></ProductPrices>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */ /* eslint-disable vue/no-unused-components */
import Header from "@/components/Header.vue";
import ProductPrices from "@/components/ProductPrices.vue";
import ProductPictures from "@/components/ProductPictures.vue";

import api from "@/globals/api";
import API_ENDPOINT from "@/globals/api-endpoint";
import router from "@/router/";
import ToastInitiator from "@/utils/toast";

export default {
  components: {
    Header,
    ProductPrices,
  },

  data() {
    return {
      product: {},
    };
  },
  mounted() {
    this.getProductById(this.$route.params.id);
  },
  methods: {
    getProductById(id) {
      api
        .get(API_ENDPOINT.PRODUCTS_WITH_ID(id))
        .then((res) => {
          this.product = res.data.data;
        })
        .catch((err) => {
          this.showError(err);
          console.log(err);
        });
    },
    submit() {
      const id = this.$route.params.id;
      let formData = new FormData();
      formData.append("name", this.product.name);
      formData.append("code", this.product.code);
      formData.append("weight", this.product.weight);
      formData.append("description", this.product.description);

      this.product.product_price.forEach((price, index) => {
        formData.append(`product_prices[${index}][min_qty]`, price.min_qty);
        formData.append(`product_prices[${index}][max_qty]`, price.max_qty);
        formData.append(`product_prices[${index}][price]`, price.price);
      });

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      const config = {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      };

      api
        .post(API_ENDPOINT.EDIT_PRODUCT(id), formData, config)
        .then((res) => {
          this._renderToastSuccess(res.data.meta);
          router.push("/product");
        })
        .catch((error) => {
          this._renderToastError(error);
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
    _renderToastSuccess(response) {
      const options = {
        text: response.message,
        duration: 3500,
        stopOnFocus: true,
        backgroundColor: "#6eddb8",
      };
      ToastInitiator.init(options);
    },
    _renderToastError(response) {
      const options = {
        text: response.message,
        duration: 3500,
        stopOnFocus: true,
        backgroundColor: "#d91e53",
      };
      ToastInitiator.init(options);
    },
  },
};
</script>
