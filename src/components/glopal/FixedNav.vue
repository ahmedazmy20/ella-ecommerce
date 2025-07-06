<template>
  <div class="appNav">
    <v-app-bar style="background-color: #14149e" height="fit-content">
      <v-container style="padding: 2px 16px" fluid>
        <v-row class="d-flex align-center justify-space-between px-4">
          <v-col cols="5" sm="2" class="text-start">
            <div class="d-flex justify-center align-center">
              <v-btn class="text-h5">
                <v-icon @click="openNav" class="d-block text-white d-lg-none"
                  >mdi-format-list-bulleted</v-icon
                ></v-btn
              >
              <img
                class="ms-2 cursor-pointer"
                style="width: 140px"
                @click="$router.push({ name: 'home' })"
                src="@/assets/images/logo.png"
                alt=""
              />
            </div>
          </v-col>
          <v-col cols="3" sm="7" class="text-white d-none d-lg-block">
            <ul
              style="list-style: none"
              class="links d-flex justify-space-between align-center"
            >
              <li
                class="d-none d-lg-block"
                v-for="(category, i) in store.categories"
                :key="i"
              >
                <router-link
                  style="color: white; text-decoration: none"
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="4" sm="3" class="text-white mt-2">
            <div class="rightSide d-flex justify-end align-center">
              <div class="text-center d-none d-lg-block me-8">
                <select
                  v-model="$i18n.locale"
                  @change="handleLanguageChange"
                  style="
                    width: 100px;
                    height: 30px;
                    border-radius: 5px;
                    border: 1px solid #d9d9d9;
                  "
                  class="text-center text-white cursor-pointer"
                  outline="none"
                >
                  <option class="text-black" value="en">EN / USD</option>
                  <option class="text-black" value="ar">AR / EGP</option>
                </select>
              </div>
              <div
                class="cart text-yellow d-flex flex-column align-center"
                :style="`pointer-events:${
                  route.name == 'cart_page' ? 'none' : 'unset'
                }`"
                @click="openCart"
              >
                <v-badge
                  location="right top"
                  offset-x="-10"
                  color="red"
                  :style="`pointer-events:${
                    route.name == 'cart_page' ? 'none' : 'unset'
                  }`"
                  :content="cartStore.cartItems.length"
                  v-if="cartStore.cartItems.length"
                  class="cursor-pointer"
                ></v-badge>
                <svg
                  style="cursor: pointer; width: 30px; fill: #f9e10b"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="path1"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
                <span class="">{{ $t("cart") }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import i18n from "@/i18n";

const { t } = useI18n();
const store = useProductsStore();
store.loadCategories(t);

const route = useRoute();
const cartStore = useCartStore();

import { inject } from "vue";
const emitter = inject("emitter");
const openCart = () => {
  emitter?.emit("openCartDrawer");
};
const openNav = () => {
  emitter?.emit("openNavDrawer");
};
//mthods
function handleLanguageChange() {
  localStorage.setItem("language", i18n.locale);

  // لو بتغير الاتجاه (RTL) مع اللغة
  document.dir = i18n.locale === "ar" ? "rtl" : "ltr";

  // إعادة تحميل التصنيفات حسب اللغة الجديدة
  store.loadCategories(t);
}
</script>

<style lang="scss" scoped>
.links {
  li {
    cursor: pointer;
    position: relative;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      top: 120%;
      left: 0;
      width: 0%;
      height: 10%;
      background-color: rgba(252, 252, 252, 0.852);
      transition: all 0.5s ease-in-out;
    }
    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 120%;
        left: 0;
        width: 100%;
        height: 10%;
        background-color: rgba(255, 255, 255, 0.833);
      }
    }
  }
}
</style>
