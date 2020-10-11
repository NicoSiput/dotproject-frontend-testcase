<template>
  <div class="list-picture">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="uploadPicture">
            <div class="picture-wrapper-item my-2 position-relative">
              <div class="picture__preview mb-3">
                <img
                  alt="picture"
                  class="img-responsive"
                  style="max-height: 100px;"
                  v-if="url"
                  :src="url"
                />
              </div>

              <div class="picture__upload">
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                      accept="image/*"
                      @change="previewImage()"
                      required
                    />
                    <label class="custom-file-label" for="inputGroupFile01"
                      >Choose file</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <button class="btn btn-sm btn-primary">
              Upload
            </button>
          </form>
        </div>
        <div class="col-md-8">
          <ListPicture :pictures="pictures"></ListPicture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListPicture from "@/components/listPicture.vue";
import api from "@/globals/api";
import API_ENDPOINT from "@/globals/api-endpoint";
import ToastInitiator from "@/utils/toast";

export default {
  components: {
    Header,
    ListPicture,
  },
  mounted() {
    this.getDataPicture();
  },
  data() {
    return {
      pictures: [],
      file: null,
      url: null,
    };
  },
  methods: {
    getDataPicture() {
      const productid = this.$route.params.productid;
      api.get(API_ENDPOINT.PICTURE_BY_PRODUCT(productid)).then((res) => {
        this.pictures = res.data.data;
      });
    },
    previewImage() {
      const file = event.target.files[0];
      if (file) {
        this.url = URL.createObjectURL(file);
        this.file = file;
      } else {
        this.url = null;
        this.file = file;
      }
    },

    uploadPicture() {
      let payload = new FormData();
      payload.append("picture", this.file);
      payload.append("productid", this.$route.params.productid);

      const config = {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      };

      api
        .post(API_ENDPOINT.PICTURES, payload, config)
        .then((res) => {
          this._renderToastSuccess(res.data.meta);
          this.getDataPicture();
          this.url = null;
          this.file = null;
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
