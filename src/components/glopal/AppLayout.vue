<template>
  <div class="Layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <NavDrawer />
      <v-main class="main-content" v-if="$route.name !== 'checkout_page'">
        <slot></slot>
      </v-main>
      <AppNav v-if="$route.name !== 'checkout_page'" />
      <FixedNav v-if="$route.name !== 'checkout_page'" />
      <AppFooter
        v-if="$route.name !== 'checkout_page' && $route.name !== 'NotFound'"
      />
    </v-layout>
    <Checkout v-if="$route.name === 'checkout_page'" />
  </div>
</template>

<script setup>
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import NavDrawer from "./NavDrawer.vue";
import Checkout from "@/views/CheckoutView.vue";
</script>

<style lang="scss" scoped>
.main-content {
  padding-top: 60px;

  @media (min-width: 960px) {
    padding-top: 165px;
  }
}
</style>
