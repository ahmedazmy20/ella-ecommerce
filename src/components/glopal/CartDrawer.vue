<template>
  <div class="cartDrawer">
    <v-navigation-drawer
      @testEmit="drawer = !drawer"
      v-model="drawer"
      :location="'right'"
      temporary
      width="350"
      md="400"
      class="px-2 pt-1"
    >
      <v-card elevation="0 text-start">
        <v-card-title
          ><div class="top-cart d-flex justify-space-between">
            <h4>{{ $t("Cart.Shopping-Cart") }}</h4>
            <v-hover v-slot="{ isHovering, props }">
              <div
                v-bind="props"
                style="transition: all 0.3s ease-in-out"
                :class="`${
                  isHovering ? 'bg-grey-lighten-1 text-white' : ''
                } rounded-circle d-flex justify-center align-center`"
              >
                <v-icon @click="drawer = false" class="cursor-pointer"
                  >mdi-close</v-icon
                >
              </div>
            </v-hover>
          </div>
        </v-card-title>
        <v-card-text class="text-grey-darken-1"
          >{{ cartStore.cartItems.length }} {{ $t("Cart.items") }}</v-card-text
        >
        <v-card-text
          class="text-grey-darken-1 pt-0"
          v-if="!cartStore.cartItems.length"
          >{{ $t("Cart.Free-shipping-orders-over") }}
        </v-card-text>
        <v-card-text
          class="text-grey-darken-1 text-center"
          v-if="!cartStore.cartItems.length"
          >{{ $t("Cart.Your-cart-empty") }}
        </v-card-text>

        <div
          v-if="cartStore.cartItems.length"
          class="progress position-relative mr-2"
        >
          <v-progress-linear
            :color="`${
              parseInt((totalPrice / 10000) * 100) <= 30
                ? '#B22222'
                : parseInt((totalPrice / 10000) * 100) <= 60
                ? '#FF8C00'
                : parseInt((totalPrice / 10000) * 100) < 99
                ? '#FFD700'
                : parseInt((totalPrice / 10000) * 100) > 99
                ? '#00FF00'
                : ''
            }`"
            height="10"
            :model-value="
              parseInt((totalPrice / 10000) * 100) <= 100
                ? parseInt((totalPrice / 10000) * 100)
                : 100
            "
            striped
          ></v-progress-linear>
          <svg
            class="icon-shipping-truck position-absolute"
            :style="`
              top: -15px;
              left: ${
                parseInt((totalPrice / 10000) * 100) <= 100
                  ? parseInt((totalPrice / 10000) * 100)
                  : 100
              }%;
              transform: translateX(-100%);
              transition: all 0.15s ease-in-out;
            `"
            viewBox="0 0 40.55 24"
            width="40.55"
            height="24"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  :fill="`${
                    parseInt((totalPrice / 10000) * 100) <= 30
                      ? '#B22222'
                      : parseInt((totalPrice / 10000) * 100) <= 60
                      ? '#FF8C00'
                      : parseInt((totalPrice / 10000) * 100) < 99
                      ? '#FFD700'
                      : parseInt((totalPrice / 10000) * 100) > 99
                      ? '#00FF00'
                      : ''
                  }`"
                  class="truck-body"
                  d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                ></path>
                <path
                  class="truck-body"
                  :fill="`${
                    parseInt((totalPrice / 10000) * 100) <= 30
                      ? '#B22222'
                      : parseInt((totalPrice / 10000) * 100) <= 60
                      ? '#FF8C00'
                      : parseInt((totalPrice / 10000) * 100) < 99
                      ? '#FFD700'
                      : parseInt((totalPrice / 10000) * 100) > 99
                      ? '#00FF00'
                      : ''
                  }`"
                  d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <v-card-text
          v-if="cartStore.cartItems.length && 10000 - totalPrice > 0"
          class="text-grey-darken-1 text-capitalize"
        >
          {{ $t("Cart.Only") }}
          <span class="font-weight-bold text-red"
            >${{ 10000 - totalPrice }}</span
          >
          {{ $t("Cart.away-Free-Shipping") }}
        </v-card-text>
        <v-card-text
          v-if="cartStore.cartItems.length && 10000 - totalPrice <= 0"
          class="text-green-darken-1 text-capitalize"
        >
          {{ $t("Cart.order-incloded-shipping") }}
        </v-card-text>
        <v-card-actions
          v-if="!cartStore.cartItems.length"
          class="d-flex justify-center"
        >
          <v-btn
            class="text-capitalize w-75 rounded-xl"
            style="border: 1px solid #a1a1a1"
            @click="closeDrawer"
            >{{ $t("Cart.continue-shopping") }}</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card elevation="0" class="scrolling text-start my-0" height="45vh">
        <v-card-text class="text-center" v-if="cartStore.cartItems.length">
          <v-row v-for="item in cartStore.cartItems" :key="item" class="mb-2">
            <v-col cols="4">
              <img class="w-100" :src="item.thumbnail" alt="item-img" />
            </v-col>
            <v-col cols="8" class="text-start">
              <h3 style="font-size: 14px; line-height: 1.2">
                {{ item.title }} {{ $t("Cart.Sample") }} - {{ item.category }}
              </h3>
              <p class="pt-1">{{ $t("Cart.Category") }}: {{ item.category }}</p>
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                ) * item.quantity
              }}.00

              <v-col
                cols="12"
                class="ps-0 d-flex justify-space-between align-center"
              >
                <div
                  class="counter my-2 px-1 py-1"
                  style="
                    border: 1px solid black;
                    border-radius: 30px;
                    width: fit-content;
                  "
                >
                  <v-icon
                    @click="item.quantity > 1 && item.quantity--"
                    class="cursor-pointer"
                    >mdi-minus</v-icon
                  >
                  <input
                    style="
                      width: 30px;
                      border: none;
                      text-align: center;
                      outline: none;
                    "
                    type="number"
                    v-model.number="item.quantity"
                    @input="
                      if (item.quantity < 1) {
                        item.quantity = 1;
                      }
                    "
                  />
                  <v-icon @click="item.quantity++" class="cursor-pointer"
                    >mdi-plus</v-icon
                  >
                </div>
                <v-hover v-slot="{ isHovering, props }">
                  <v-icon
                    @click="cartStore.deleteItem(item.id)"
                    v-bind="props"
                    style="transition: all 0.3s ease"
                    :class="`cursor-pointer ${isHovering ? 'text-red' : ''}`"
                    >mdi-delete</v-icon
                  >
                </v-hover>
              </v-col>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card elevation="0" class="mt-5 px-3">
        <v-row v-if="cartStore.cartItems.length">
          <v-col cols="12" class="pb-0">
            <div
              class="subtotal d-flex justify-space-between font-weight-medium"
            >
              <span>{{ $t("Cart.Subtotal") }}:</span>
              <span>${{ totalPrice }}</span>
            </div>
          </v-col>
          <v-col cols="12" class="pt-1">
            <div class="Total d-flex justify-space-between font-weight-medium">
              <span>{{ $t("Cart.Total") }}:</span>
              <span style="font-size: 18px">${{ totalPrice }}</span>
            </div>
          </v-col>
        </v-row>
        <v-card-actions class="d-flex flex-column justify-center">
          <v-btn
            @click="$router.push({ name: 'checkout_page' })"
            v-if="cartStore.cartItems.length"
            variant="elevated"
            class="text-capitalize w-100 rounded-xl bg-blue-lighten-2 text-white"
            style="border: 1px solid #a1a1a1"
            >{{ $t("Cart.checkout") }}</v-btn
          >
          <v-btn
            v-if="cartStore.cartItems.length"
            class="text-capitalize w-100 rounded-xl"
            style="border: 1px solid #a1a1a1"
            @click="goToCartPage"
            >{{ $t("Cart.view-cart") }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { useCartStore } from "@/stores/cart";
import router from "@/router";

const cartStore = useCartStore();
const drawer = ref(false);
const emitter = inject("emitter");
onMounted(() => {
  emitter?.on("openCartDrawer", () => {
    drawer.value = !drawer.value;
  });
  cartStore.getCartItems();
});
//functions

function goToCartPage() {
  drawer.value = false;
  setTimeout(() => {
    if (router.currentRoute.value.name !== "cart_page") {
      router.push({ name: "cart_page" });
    } else {
      // إجبار إعادة تحميل الصفحة أو إعادة توجيه لنفسها
      router.replace({ path: "/cart-page", query: { t: Date.now() } });
    }
  }, 300);
}

function closeDrawer() {
  drawer.value = false;
  router.push({ name: "home" });
}
// computed to calc total price
const totalPrice = computed(() => {
  let total = 0;
  cartStore.cartItems.forEach((product) => {
    total +=
      Math.ceil(
        product.price - product.price * (product.discountPercentage / 100)
      ) * product.quantity;
  });
  return total;
});
</script>

<style lang="scss" scoped>
.scrolling {
  max-height: 90vh; // Optional: Limit height to force scrolling
  overflow-y: auto;

  // Scrollbar Styles for WebKit browsers
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 4px;
    &:hover {
      background: #a8a8a8;
    }
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
</style>
