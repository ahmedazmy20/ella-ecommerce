import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/products/:category/:title", // category & title => is params
    name: "products_category",
    component: () => import("../views/ProductCategory.vue"),
  },
  {
    path: "/products/product-details/:productId",
    name: "product_details",
    component: () => import("../views/ProductDetails.vue"),
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/checkout-page",
    name: "checkout_page",
    component: () => import("../views/CheckoutView.vue"),
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
