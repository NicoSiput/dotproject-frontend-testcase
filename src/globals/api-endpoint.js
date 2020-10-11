import CONFIG from "./config";

const END_POINT = {
  PRODUCTS: `${CONFIG.BASE_URL}/products`,
  PRODUCTS_WITH_ID: (id) => `${CONFIG.BASE_URL}/products/${id}`,
  EDIT_PRODUCT: (id) => `${CONFIG.BASE_URL}/products/${id}/?_method=PUT`,
  PICTURE_BY_PRODUCT: (productid) =>
    `${CONFIG.BASE_URL}/products/${productid}/picture`,
  PICTURE_BY_ID: (id) => `${CONFIG.BASE_URL}/pictures/${id}`,
  PICTURES: `${CONFIG.BASE_URL}/pictures`,
};
export default END_POINT;
