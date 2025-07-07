<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <app-layout>
      <router-view /> <QuickView />
      <v-snackbar v-model="snackbar" location="left buttom" max-width="100">
        {{ itemTitle }} {{ $t("Cart.Add-successfully") }}
        <template v-slot:actions>
          <v-icon @click="snackbar = false">mdi-close</v-icon>
        </template>
      </v-snackbar>
    </app-layout>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import AppLayout from "@/components/glopal/AppLayout.vue";
import QuickView from "./components/glopal/QuickView.vue";
import i18n from "./i18n";
const snackbar = ref(false);
const emitter = inject("emitter");
const itemTitle = ref("");
document.dir = i18n.locale === "ar" ? "rtl" : "ltr";
onMounted(() => {
  emitter?.on("showMsg", (data) => {
    itemTitle.value = data;
    snackbar.value = true;
  });
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
