<template>
  <div class="form-product-price my-2">
    <div class="card">
      <div class="card-header bg-secondary text-white">
        <h2 data-toggle="collapse" href="#collapseExample">
          Product Price
        </h2>
      </div>
      <div class="collapse show" id="collapseExample">
        <div class="card-body">
          <priceItem :product_prices="product_prices"></priceItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import priceItem from "@/components/priceItem.vue";

export default {
  props: {
    product_prices: Array,
  },
  components: {
    priceItem,
  },
};
</script>

<style scoped>
h2 {
  font-size: 22px;
}
</style>
