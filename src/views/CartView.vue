<template>
  <div class="cart-page pa-2">
    <v-container fluid>
      <v-row>
        <!-- Breadcrumb -->
        <v-col cols="12" class="pb-0">
          <v-card elevation="0">
            <v-card-text
              ><v-breadcrumbs
                class="py-0 text-subtitle-2"
                :items="[`${$t('Cart.Home')}`, `${$t('Cart.Shopping-Cart')}`]"
              >
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
            </v-card-text>
            <v-card-text class="pb-0">
              <div class="top-cart d-flex justify-space-between align-center">
                <h4 class="text-h6 font-weight-bold">
                  {{ $t("Cart.Shopping-Cart") }}
                </h4>
              </div></v-card-text
            >
            <v-card-text class="pb-0" v-if="!cartStore.cartItems.length">
              <div class="">
                <h4 class="text-h6 text-grey-lighten-1">
                  {{ $t("Cart.Your-cart-empty") }}
                </h4>
                <p class="text-grey-darken-1 my-2">
                  {{ $t("Cart.Free-shipping-orders-over") }}
                </p>
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-center"
              v-if="!cartStore.cartItems.length"
              ><v-btn
                class="text-capitalize w-50 w-md-25 rounded-xl"
                style="border: 1px solid #a1a1a1"
                @click="$router.push({ name: 'home' })"
                >{{ $t("Cart.continue-shopping") }}</v-btn
              ></v-card-actions
            >
          </v-card>
        </v-col>

        <!-- Cart Header -->
        <v-col cols="12" class="pt-0">
          <v-card elevation="0" class="text-start">
            <v-card-text>
              <!-- Progress -->
              <div
                v-if="cartStore.cartItems.length"
                class="progress position-relative"
              >
                <v-progress-linear
                  class="rounded-lg my-3"
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
                  :model-value="progressValue"
                  striped
                ></v-progress-linear>
                <svg
                  class="icon-shipping-truck position-absolute"
                  :style="`
              top: -10px;
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
            </v-card-text>

            <!-- Free Shipping Message -->
            <v-card-text v-if="cartStore.cartItems.length">
              <p
                v-if="10000 - totalPrice > 0"
                class="text-grey-darken-1 text-capitalize"
              >
                {{ $t("Cart.Only") }}
                <span class="font-weight-bold text-red">
                  ${{ 10000 - totalPrice }}
                </span>
                {{ $t("Cart.away-Free-Shipping") }}
              </p>
              <p v-else class="text-green-darken-1 text-capitalize">
                {{ $t("Cart.order-incloded-shipping") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Cart Items (Table) -->
        <v-col cols="12" md="8" v-if="cartStore.cartItems.length">
          <div
            class="table-wrapper"
            style="border-bottom: 1px solid #d5d5d5; padding-bottom: 16px"
          >
            <v-table fixed-header class="cart-table">
              <thead>
                <tr>
                  <th>{{ $t("Cart.PRODUCT") }}</th>
                  <th class="text-center">{{ $t("Cart.PRICE") }}</th>
                  <th class="text-center">{{ $t("Cart.QUANTITY") }}</th>
                  <th class="text-center">{{ $t("Cart.TOTAL") }}</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in cartStore.cartItems" :key="item.id">
                  <td class="text-start">
                    <div class="d-flex align-center ga-2">
                      <img
                        class="product-img"
                        :src="item.thumbnail"
                        alt="product"
                      />
                      <div>
                        <h3 class="product-title">
                          {{ item.title }}
                        </h3>
                        <p class="text-caption">
                          {{ $t("Cart.Category") }}: {{ item.category }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">${{ discountedPrice(item) }}.00</td>
                  <td class="text-center">
                    <div class="counter d-flex align-center justify-center">
                      <v-icon
                        @click="item.quantity > 1 && item.quantity--"
                        class="cursor-pointer"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        v-model.number="item.quantity"
                        @input="
                          if (item.quantity < 1) {
                            item.quantity = 1;
                          }
                        "
                        class="quantity-input"
                      />
                      <v-icon @click="item.quantity++" class="cursor-pointer"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </td>
                  <td class="text-center">
                    <div class="d-flex justify-space-between align-center">
                      <span
                        >${{ discountedPrice(item) * item.quantity }}.00</span
                      >
                      <v-hover v-slot="{ isHovering, props }">
                        <div
                          v-bind="props"
                          :class="['delete-icon', { hover: isHovering }]"
                          @click="cartStore.deleteItem(item.id)"
                        >
                          <v-icon>mdi-close</v-icon>
                        </div>
                      </v-hover>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
          <div class="secure-shopping mt-12 d-flex align-center ga-2">
            <v-icon>mdi-shield-lock</v-icon>
            <span>{{ $t("Cart.Secure-Guarantee") }}</span>
          </div>
          <div class="image text-start mt-5">
            <img
              style="width: 350px"
              src="../assets/images/cart-page-cards.webp"
              alt=""
            />
          </div>
        </v-col>

        <!-- Order Summary -->
        <v-col cols="12" md="4" v-if="cartStore.cartItems.length">
          <v-card elevation="0">
            <v-card-text>
              <h3 class="order-summary-title">
                {{ $t("Cart.Order-Summary") }}
              </h3>

              <div class="d-flex justify-space-between my-2">
                <span>{{ $t("Cart.Subtotal") }}:</span>
                <span>${{ totalPrice }}</span>
              </div>

              <h5 class="text-start my-4">
                {{ $t("Cart.Get-Shipping-Estimate") }}:
              </h5>

              <v-row>
                <v-col cols="12">
                  <select class="custom-select">
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </v-col>
                <v-col cols="8">
                  <select class="custom-select">
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </v-col>
                <v-col cols="4">
                  <input
                    type="number"
                    :placeholder="$t('checkout.postal-code')"
                    class="custom-input"
                  />
                </v-col>
              </v-row>

              <v-btn class="mt-4 w-100 bg-blue-lighten-2 text-white">{{
                $t("Cart.Calculate-Shipping")
              }}</v-btn>

              <div
                class="total d-flex justify-space-between mt-4 pt-3 border-top"
              >
                <span class="text-uppercase">{{ $t("Cart.Total") }}:</span>
                <span>${{ totalPrice }}</span>
              </div>

              <p class="text-caption mt-2">
                {{ $t("Cart.Tax-checkout") }}
              </p>

              <v-btn
                @click="$router.push({ name: 'checkout_page' })"
                variant="tonal"
                class="mt-3 w-100 bg-blue-lighten-2 text-white"
                >{{ $t("Cart.Proceed-Checkout") }}</v-btn
              >
              <v-btn
                variant="tonal"
                class="mt-3 w-100"
                @click="$router.push({ name: 'home' })"
                >{{ $t("Cart.continue-shopping") }}</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { ref, computed } from "vue";

const cartStore = useCartStore();

const countries = ref([
  { id: 1, name: "Egypt" },
  { id: 2, name: "Saudi Arabia" },
  { id: 3, name: "Qatar" },
  { id: 4, name: "America" },
]);

const totalPrice = computed(() => {
  return cartStore.cartItems.reduce((total, product) => {
    return (
      total +
      Math.ceil(
        product.price - product.price * (product.discountPercentage / 100)
      ) *
        product.quantity
    );
  }, 0);
});
//methods

//watch quantity not under 1
const discountedPrice = (item) => {
  return Math.ceil(item.price - item.price * (item.discountPercentage / 100));
};

const progressValue = computed(() =>
  Math.min(100, parseInt((totalPrice.value / 10000) * 100))
);
</script>

<style lang="scss" scoped>
.table-wrapper {
  overflow-x: auto;
}

.cart-table {
  min-width: 600px;
}

.product-img {
  width: 80px;
}

.product-title {
  font-size: 14px;
  line-height: 1.2;
}

.quantity-input {
  width: 30px;
  text-align: center;
  border: none;
  outline: none;
  background-color: transparent;
}

.delete-icon {
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-icon.hover {
  background-color: #e0e0e0;
  color: white;
}

.custom-select {
  width: 100%;
  padding: 10px 30px 10px 10px;
  border: 1px solid #728d89;
  border-radius: 10px;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5H7z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
}

.custom-input {
  width: 100%;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid #728d89;
  font-size: 14px;
}

.order-summary-title {
  border-bottom: 2px solid black;
  padding-bottom: 8px;
  text-transform: uppercase;
  font-size: 16px;
}

@media (max-width: 600px) {
  .cart-table {
    min-width: 100%;
  }

  .product-img {
    width: 60px;
  }

  .order-summary-title {
    font-size: 14px;
  }
}
</style>
