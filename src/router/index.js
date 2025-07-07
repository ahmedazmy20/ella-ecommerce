import { createRouter, createWebHistory } from "vue-router";
import ProductDetails from "../views/ProductDetails.vue";
import ProductCategory from "../views/ProductCategory.vue";
import CartPage from "../views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/products/:category/:title", // category & title => is params
    name: "products_category",
    component: ProductCategory,
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: ProductDetails,
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/checkout-page",
    name: "checkout_page",
    component: CartPage,
  },
  {
    path: "/:pathMatch(.*)*", // مسك أي مسار مش معروف
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
// To Change the Page title dynamic
router.beforeEach((to, from, next) => {
  if (to.params.title) {
    document.title = to.params.title;
  } else {
    document.title = "ella-project";
  }
  next();
});

export default router;
