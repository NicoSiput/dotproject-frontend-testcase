<template>
  <div class="picture-item">
    <a class="btn btn-sm btn-primary" @click="addPictureRow()"
      >Add New Picture</a
    >
    <div class="picture-wrapper">
      <div
        class="picture-wrapper-item my-2 position-relative"
        v-for="(picture, index) in this.product_pictures"
        v-bind:key="index"
      >
        <div class="picture__preview">
          <!-- <img v-if="url" :src="url" /> -->
          <img
            alt="picture"
            class="img-responsive"
            style="max-height: 100px;"
            v-if="picture.filepath"
            :src="picture.filepath"
          />
        </div>
        <div class="row my-3">
          <div class="col-8">
            <div class="picture__upload">
              <div class="input-group mb-3">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    accept="image/*"
                    @change="previewImage($event, index)"
                    required
                  />
                  <label class="custom-file-label" for="inputGroupFile01"
                    >Choose file</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="picture__action" v-if="index !== 0">
            <a
              class="btn btn-sm btn-danger text-right"
              @click="removePictureRow(picture)"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-x-square-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product_pictures: {
      type: Array,
    },
  },
  data() {
    return {
      pictures: [],
    };
  },
  mounted() {
    this.addPictureRow();
  },
  methods: {
    addPictureRow() {
      this.product_pictures.push({});
    },
    removePictureRow(picture) {
      const idx = this.product_pictures.indexOf(picture);
      this.product_pictures.splice(idx, 1);
    },

    previewImage(event, index) {
      const file = event.target.files[0];
      this.product_pictures[index].filepath = URL.createObjectURL(file);
      this.product_pictures[index].file = file;
      this.product_pictures.push({});
      this.product_pictures.pop();
    },
  },
};
</script>
