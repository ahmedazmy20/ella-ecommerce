<template>
  <div class="check-out">
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="7"
          order="2"
          order-sm="2"
          order-md="1"
          class="ps-md-16 pe-md-6"
        >
          <v-card elevation="0">
            <v-card-title class="text-start ps-0 d-none d-md-block"
              >new-ella-demo</v-card-title
            >
            <v-card-text class="ps-0 d-none d-md-block"
              ><v-breadcrumbs
                class="py-0text-subtitle-2 ps-0"
                :items="[
                  `${$t('checkout.cart')}`,
                  `${$t('checkout.checkout')}`,
                ]"
              >
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
            </v-card-text>
            <v-card-text class="text-capitalize text-grey ps-0">{{
              $t("checkout.express-checkout")
            }}</v-card-text>
            <v-card-actions class="ps-0">
              <v-row>
                <v-col cols="6">
                  <v-btn
                    class="bg-blue-lighten-1 w-100 d-flex justify-center align-center py-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 341 80.035"
                      title="Shop Pay"
                      width="65"
                      height="56"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223h-101.06Zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513h5.794Zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758 0 3.605-2.518 5.758-7.695 5.758h-7.901V24.808Zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.197.38 3.652 2.613 5.524 7.457 4.26l.048-3.885c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209Zm1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303Zm32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842l-10.069 26.167Z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.373 0 3.014-2.584 4.436-7.742 4.436-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865v-.021ZM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618v-.01ZM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.618.618 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.82 19.82 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.632.632 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603l.021.01ZM180.098 15.951c-5.649 0-10.689 2.055-14.373 5.68a.313.313 0 0 1-.534-.222v-4.362a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054l-.011.01Zm-2.103 37.54c-7.454 0-13.103-5.847-13.103-13.58 0-7.734 5.638-13.582 13.103-13.582 7.464 0 13.091 5.753 13.091 13.581 0 7.829-5.553 13.581-13.102 13.581h.011Z"
                      ></path></svg></v-btn
                ></v-col>
                <v-col cols="6">
                  <v-btn
                    class="bg-black w-100 d-flex justify-center align-center py-5"
                    ><svg
                      width="41"
                      height="17"
                      style="font-size: 19px; display: flex"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M19.526 2.635v4.083h2.518c.6 0 1.096-.202 1.488-.605.403-.402.605-.882.605-1.437 0-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99c1.013 0 1.873.337 2.582 1.012.72.675 1.08 1.497 1.08 2.466 0 .991-.36 1.819-1.08 2.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668 2.287c0 .392.166.718.499.98.332.26.722.391 1.168.391.633 0 1.196-.234 1.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61 0-1.12.148-1.528.442-.409.294-.613.657-.613 1.093m1.946-5.815c1.112 0 1.989.297 2.633.89.642.594.964 1.408.964 2.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45 1.372-2.486 1.372-.882 0-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96 0-.828.313-1.486.94-1.976s1.463-.735 2.51-.735c.892 0 1.629.163 2.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132 2.132 0 0 0-1.455-.547c-.84 0-1.504.353-1.995 1.062l-1.324-.834c.73-1.045 1.81-1.568 3.238-1.568m11.853.262l-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"
                          fill="#FFF"
                        />
                        <path
                          d="M13.448 7.134c0-.473-.04-.93-.116-1.366H6.988v2.588h3.634a3.11 3.11 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"
                          fill="#4285F4"
                        />
                        <path
                          d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.728 6.728 0 0 0 6.01 3.703"
                          fill="#34A853"
                        />
                        <path
                          d="M3.212 8.267a4.034 4.034 0 0 1 0-2.572V3.964H.978A6.678 6.678 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017l2.234-1.731z"
                          fill="#FABB05"
                        />
                        <path
                          d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.728 6.728 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"
                          fill="#E94235"
                        />
                      </g></svg></v-btn
                ></v-col>
                <v-col cols="12">
                  <p class="before">{{ $t("checkout.OR") }}</p>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-text
              class="text-start ps-0"
              :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
            >
              <h3 class="font-weight-regular">
                {{ $t("checkout.Shipping-Address") }}
              </h3>
            </v-card-text>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-select
                  class="custom-select"
                  :label="$t('checkout.Country/Region')"
                  :items="[
                    $t('checkout.egypt'),
                    $t('checkout.Saudi'),
                    $t('checkout.Qatar'),
                    $t('checkout.USA'),
                  ]"
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="6" class="py-0"
                ><v-text-field
                  v-model="firstname"
                  variant="outlined"
                  :label="$t('checkout.First-name')"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="6" class="py-0"
                ><v-text-field
                  variant="outlined"
                  :label="$t('checkout.Last-name')"
                  required
                ></v-text-field></v-col
              ><v-col cols="12" class="py-0"
                ><v-text-field
                  variant="outlined"
                  :label="$t('checkout.Address')"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="4" class="py-0"
                ><v-text-field
                  variant="outlined"
                  :label="$t('checkout.City')"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="4" class="py-0"
                ><v-select
                  class="custom-select"
                  :label="$t('checkout.Governorate')"
                  :items="[
                    $t('checkout.Alexandria'),
                    $t('checkout.Cairo'),
                    $t('checkout.Giza'),
                    $t('checkout.Suez'),
                  ]"
                  variant="outlined"
                ></v-select
              ></v-col>
              <v-col cols="4" class="py-0"
                ><v-text-field
                  type="number"
                  variant="outlined"
                  :label="$t('checkout.postal-code')"
                  required
                ></v-text-field
              ></v-col>
              <v-col cols="12" class="pt-0 d-flex justify-end">
                <v-btn
                  style="font-size: 12px"
                  class="text-uppercase py-5 px-10 d-flex"
                  color="primary"
                  @click="dialog = true"
                  >{{ $t("checkout.submit") }}</v-btn
                >
              </v-col>
              <v-col cols="12" class="mt-5">
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-card-text class="text-start text-grey-darken-1 ps-0"
                  >{{ $t("checkout.all-rights-reserved") }} &copy; 2023 new ella
                  demo</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="5"
          order="1"
          offset-sm="1"
          order-md="2"
          class="pe-10 ps-6 bg-grey-lighten-5 pt-8 ms-0"
        >
          <v-row>
            <v-col cols="12" class="d-block d-md-none">
              <v-card elevation="0" class="bg-transparent">
                <v-card-title class="text-start ps-0"
                  >new-ella-demo</v-card-title
                >
                <v-card-text class="ps-0"
                  ><v-breadcrumbs
                    class="py-0text-subtitle-2 ps-0"
                    :items="['Cart', 'Checkout']"
                  >
                    <template v-slot:divider>
                      <v-icon>mdi-chevron-right</v-icon>
                    </template>
                  </v-breadcrumbs>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <div class="products-checkout">
                <v-row
                  class="text-start px-md-5"
                  v-for="product in cartStore.cartItems"
                  :key="product"
                >
                  <v-col cols="3" md="2" class="py-1"
                    ><div class="product-image">
                      <v-badge color="grey" :content="product.quantity"
                        ><img
                          class="rounded-lg"
                          style="
                            width: 55px;
                            height: 55px;
                            border: 1px solid #d5d5d5;
                          "
                          :src="product.thumbnail"
                          :alt="product.title"
                      /></v-badge></div
                  ></v-col>
                  <v-col cols="6" md="8" class="py-1"
                    ><p style="font-size: 12px; font-weight: 700">
                      ({{ product.title }}) {{ $t("checkout.Sample") }} -
                      {{ product.category }} {{ $t("checkout.For-Sale") }}
                    </p>
                    <p class="text-grey-darken-2" style="font-size: 12px">
                      {{ product.category }}
                    </p></v-col
                  >
                  <v-col cols="3" md="2" class="py-1">
                    <p>
                      ${{
                        Math.ceil(
                          product.price -
                            product.price * (product.discountPercentage / 100)
                        ) * product.quantity
                      }}.00
                    </p></v-col
                  >
                </v-row>
                <v-row class="px-5 border-t-sm mt-5 pt-5">
                  <v-col cols="12">
                    <div class="subtotal d-flex justify-space-between">
                      <span class="">{{ $t("checkout.Subtotal") }}:</span>
                      <span class="font-weight-bold">${{ totalPrice }}.00</span>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <OrderSuccess :popup="dialog" v-if="dialog" @close="dialog = false" />
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";
import OrderSuccess from "@/components/order_success/OrderSuccess.vue";

const dialog = ref(false);
const firstname = ref("");
const cartStore = useCartStore();

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
</script>

<style lang="scss" scoped>
.before {
  font-weight: 600;
  color: #848181;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 45%;
    height: 1px;
    background-color: #c7c3c3;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 45%;
    height: 1px;
    background-color: #c7c3c3;
  }
}

.custom-input {
  width: 100%;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid #728d89;
  font-size: 14px;
}
</style>
