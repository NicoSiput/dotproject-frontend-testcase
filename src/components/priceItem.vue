<template>
  <div class="price-items">
    <a class="btn btn-sm btn-primary" @click="addPriceRow()">Add New Price</a>

    <div class="price__wrapper">
      <div
        class="price__wrapper__item border p-3 my-2"
        v-for="(price, index) in product_prices"
        v-bind:key="price.key"
      >
        <div class="price__action text-right" v-if="index !== 0">
          <a
            class="btn btn-sm btn-danger text-right"
            @click="removePriceRow(price)"
            id="removePriceRow-${this._key}"
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

        <div class="price__data">
          <div class="row">
            <div class="col-md">
              <div class="form-group">
                <label for="minQty">Min Qty</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="price.min_qty"
                  required
                />
              </div>
            </div>
            <div class="col-md">
              <div class="form-group">
                <label for="maxQty">Max Qty</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="price.max_qty"
                  required
                />
              </div>
            </div>
            <div class="col-md">
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="price.price"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product_prices: {
      type: Array,
    },
  },
  watch: {
    product_prices(dataPrices) {
      if (dataPrices.length === 0) {
        this.addPriceRow();
      }
    },
  },
  data() {
    return {};
  },
  mounted() {
    const id = this.$route.params.id;
    if (!id) {
      this.addPriceRow();
    }
  },
  methods: {
    addPriceRow() {
      this.product_prices.push({});
    },
    removePriceRow(price) {
      const idx = this.product_prices.indexOf(price);
      this.product_prices.splice(idx, 1);
    },
  },
};
</script>
