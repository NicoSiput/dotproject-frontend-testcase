<template>
  <div class="list-picture">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Picture</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="pictures.length > 0">
        <tr
          v-for="(picture, index) in pictures"
          :key="picture.product_pictureid"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <img
              :src="picture.filepath"
              alt="Product Picture"
              width="100px"
              height="100px"
            />
          </td>
          <td>
            <button
              class="btn btn-sm btn-danger mr-2"
              @click="deleteData(picture)"
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
</template>

<script>
import api from "@/globals/api";
import API_ENDPOINT from "@/globals/api-endpoint";
import ToastInitiator from "@/utils/toast";

export default {
  props: {
    pictures: Array,
  },
  methods: {
    deleteData(picture) {
      const id = picture.product_pictureid;
      const result = confirm("Are you sure want to delete this data ?");
      if (result) {
        api
          .delete(API_ENDPOINT.PICTURE_BY_ID(id))
          .then((res) => {
            this._renderToastSuccess(res.data.meta);
            const idx = this.pictures.indexOf(picture);
            this.pictures.splice(idx, 1);
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
