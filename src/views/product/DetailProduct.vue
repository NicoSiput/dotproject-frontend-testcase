<template>
  <div class="product-detail">
    <Header />
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h2>{{ product.name }}</h2>
        </div>
        <div class="card-body">
          <div class="product__wrapper">
            <div class="product__code  d-flex align-items-center mb-2">
              <div class="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-upc-scan"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"
                  />
                </svg>
              </div>
              <div class="text">
                <p class="ml-2 m-0">{{ product.code }}</p>
              </div>
            </div>
            <div class="product__weight  d-flex align-items-center mb-2">
              <div class="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-basket2-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1z"
                  />
                </svg>
              </div>
              <div class="text">
                <p class="ml-2 m-0">{{ product.weight }} <small>(gr)</small></p>
              </div>
            </div>
            <div class="product__description d-flex align-items-center mb-2">
              <div class="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-info-circle-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </div>
              <div class="values">
                <p class="ml-2 m-0">{{ product.description }}</p>
              </div>
            </div>

            <div class="product__price d-flex align-items-center mb-2">
              <div class="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-tags-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                  <path
                    d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
                  />
                </svg>
              </div>
              <div class="values">
                <p class="ml-2 m-0">
                  {{ countPrice }}
                  price
                </p>
              </div>
            </div>

            <div class="product__price__item d-flex align-items-center mb-2">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Min Qty</th>
                      <th scope="col">Max Qty</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(price, index) in product.product_price"
                      :key="index"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ price.min_qty }}</td>
                      <td>{{ price.max_qty }}</td>
                      <td>{{ price.price }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="product__picture d-flex align-items-center mb-2">
              <div class="icon">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-images"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.002 4h-10a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1zm-10-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-10zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4 2h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1z"
                  />
                </svg>
              </div>
              <div class="values">
                <p class="ml-2 m-0">
                  {{ countPicture }}
                  picture
                </p>
              </div>
            </div>

            <div class="product__picture__items d-flex align-items-center mb-2">
              <div class="row">
                <div
                  class="col-md-4 text-center"
                  v-for="(picture, index) in product.product_picture"
                  :key="index"
                >
                  <img :src="picture.filepath" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import api from "@/globals/api";
import API_ENDPOINT from "@/globals/api-endpoint";

export default {
  components: {
    Header,
  },
  data() {
    return {
      product: [],
      countPrice: 0,
      countPicture: 0,
    };
  },
  mounted() {
    this.getAllData();
  },
  methods: {
    getAllData() {
      const idProduct = this.$route.params.id;
      api
        .get(API_ENDPOINT.PRODUCTS_WITH_ID(idProduct))
        .then((res) => {
          this.product = res.data.data;
          this.countPrice = this.product.product_price.length;
          this.countPicture = this.product.product_picture.length;
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
  },
};
</script>
