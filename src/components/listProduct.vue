<template>
  <div class="list-product">
    <router-link to="/product/add" class="btn btn-primary mb-3"
      >Add Product
    </router-link>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Product</th>
            <th scope="col">Weight</th>
            <th scope="col">Prices</th>
            <th scope="col">Pictures</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="listProduct.length > 0">
          <tr v-for="(product, index) in listProduct" :key="product.productid">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.weight }}</td>
            <td>
              {{ product.product_price.length }}
              {{ product.product_price.length > 1 ? " kinds" : "kind" }}
            </td>
            <td>
              {{ product.product_picture.length }}
              {{ product.product_picture.length > 1 ? " pcs" : "pc" }}
            </td>
            <td>
              <router-link
                v-bind:to="'/product/' + product.productid"
                class="btn btn-sm btn-primary mr-2"
                ><svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-eye-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  />
                </svg>
              </router-link>

              <router-link
                v-bind:to="`/product/${product.productid}/picture`"
                class="btn btn-sm btn-info mr-2"
                ><svg
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
              </router-link>

              <router-link
                v-bind:to="'/product/edit/' + product.productid"
                class="btn btn-sm btn-warning mr-2"
                ><svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                  />
                </svg>
              </router-link>

              <button
                class="btn btn-sm btn-danger mr-2"
                @click="deleteData(product)"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>

        <tbody v-else>
          <tr>
            <td colspan="90">No Data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "@/globals/api";
import API_ENDPOINT from "@/globals/api-endpoint";
import ToastInitiator from "@/utils/toast";

export default {
  props: {
    listProduct: Array,
  },
  methods: {
    deleteData(product) {
      const id = product.productid;
      const result = confirm("Are you sure want to delete this data ?");
      if (result) {
        api
          .delete(API_ENDPOINT.PRODUCTS_WITH_ID(id))
          .then((res) => {
            this._renderToastSuccess(res.data.meta);
            const idx = this.listProduct.indexOf(product);
            this.listProduct.splice(idx, 1);
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
            console.log(error.config);
          });
      }
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
