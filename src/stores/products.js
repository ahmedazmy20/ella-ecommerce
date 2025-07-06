import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  // state
  const products = ref([]);
  const singelProduct = ref("");
  const Fragrances = ref([]);
  const Furniture = ref([]);
  const groceries = ref([]);
  const beauty = ref([]);
  const categoriesProducts = ref([]);
  const categories = ref([]);

  // methods (actions)
  async function getProducts() {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      products.value = data.products;

      Fragrances.value = data.products.filter(
        (product) => product.category === "fragrances"
      );

      Furniture.value = data.products.filter(
        (product) => product.category === "furniture"
      );

      groceries.value = data.products.filter(
        (product) => product.category === "groceries"
      );

      beauty.value = data.products.filter(
        (product) => product.category === "beauty"
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function getProductsByCategory(category) {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      categoriesProducts.value = data.products;
    } catch (error) {
      console.error("Error fetching ProductsByCategory", error);
    }
  }

  async function getSingelProduct(productId) {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      singelProduct.value = data;
    } catch (error) {
      console.error("Error fetching ProductsByCategory", error);
    }
  }

  // 🟢 دالة تحميل التصنيفات مع الترجمة
  function loadCategories(t) {
    categories.value = [
      { title: t("Laptops"), route: "laptops" },
      { title: t("Tablets"), route: "tablets" },
      { title: t("Vehicle"), route: "vehicle" },
      { title: t("Motorcycle"), route: "motorcycle" },
      { title: t("Mens Shirts"), route: "mens-shirts" },
      { title: t("Sunglasses"), route: "sunglasses" },
      { title: t("Womens Watches"), route: "womens-watches" },
    ];
  }

  return {
    products,
    getProducts,
    Fragrances,
    Furniture,
    groceries,
    beauty,
    categories,
    loadCategories,
    getProductsByCategory,
    categoriesProducts,
    singelProduct,
    getSingelProduct,
  };
});
