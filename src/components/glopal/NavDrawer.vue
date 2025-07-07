<template>
  <div class="navDrawer">
    <v-navigation-drawer
      @testEmit="drawer = !drawer"
      v-model="drawer"
      :location="'left'"
      temporary
    >
      <ul class="d-flex flex-column ga-5 text-start">
        <div class="menu d-flex justify-space-between">
          <span class="text-black font-weight-bold">{{
            t("navbar.menu")
          }}</span>
          <v-icon @click="drawer = !drawer">mdi-close</v-icon>
        </div>
        <li v-for="(category, i) in store.categories" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <router-link
              v-bind="props"
              :class="`${
                isHovering ? 'text-blue' : 'text-grey-darken-1'
              } text-decoration-none font-weight-medium`"
              style="text-decoration: none; transition: all 0.3s ease-in-out"
              :to="{
                name: 'products_category',
                params: { category: category.route, title: category.title },
              }"
              >{{ category.title }}</router-link
            >
          </v-hover>
        </li>
        <div class="text-center">
          <select
            v-model="locale"
            @change="handleLanguageChange"
            style="
              width: 100px;
              height: 30px;
              border-radius: 5px;
              border: 1px solid #d9d9d9;
            "
            class="text-center cursor-pointer"
            outline="none"
          >
            <option class="text-black" value="en">EN / USD</option>
            <option class="text-black" value="ar">AR / EGP</option>
          </select>
        </div>
      </ul>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import { useProductsStore } from "@/stores/products";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const store = useProductsStore();
store.loadCategories(t);
const drawer = ref(false);
const emitter = inject("emitter");
onMounted(() => {
  emitter?.on("openNavDrawer", () => {
    drawer.value = !drawer.value;
  });
});
// methods
const handleLanguageChange = () => {
  localStorage.setItem("lang", locale.value);
  document.dir = locale.value === "ar" ? "rtl" : "ltr";
  store.loadCategories(t);
};

// لو المستخدم رجع للموقع بلغة محفوظة قبل كدا
onMounted(() => {
  document.dir = locale.value === "ar" ? "rtl" : "ltr";
});
</script>

<style lang="scss" scoped></style>
