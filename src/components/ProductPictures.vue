<template>
  <div class="form-product-picture my-2">
    <div class="card">
      <div class="card-header bg-secondary text-white">
        <h2 data-toggle="collapse" href="#collapsePicture">
          Product Picture
        </h2>
      </div>
      <div class="collapse show" id="collapsePicture">
        <div class="card-body">
          <itemPicture :product_pictures="product_pictures"></itemPicture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemPicture from "./pictureItem";
export default {
  props: {
    product_pictures: Array,
  },
  components: {
    itemPicture,
  },
};
</script>

<style scoped>
h2 {
  font-size: 22px;
}
</style>
