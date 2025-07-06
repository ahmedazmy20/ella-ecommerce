<template>
  <div class="home" dir="rtl">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsSwiper
      :title="$t('home.flashDeals')"
      :color="'red'"
      :prouducts="store.products"
      :getProducts="store.getProducts"
    />
    <TopCategorise />
    <NewProducts />
    <QualityFeatures />
    <ProductsSwiper
      :title="$t('home.furniture')"
      :color="'black'"
      :prouducts="store.Furniture"
      :getProducts="store.getProducts"
    />
    <PretiumLigular />
    <ProductsSwiper
      :title="$t('home.beauty')"
      :color="'red'"
      :prouducts="store.beauty"
      :getProducts="store.getProducts"
    />
    <img
      class="w-100 px-4"
      src="../assets/images/tv-banner.webp"
      alt="tv-banner"
    />
    <ProductsSwiper
      :title="$t('home.Groceries')"
      :color="'black'"
      :prouducts="store.groceries"
      :getProducts="store.getProducts"
    />
    <NewPrandes />
    <WhyShopWithUs />
  </div>
</template>

<script setup>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import ProductsSwiper from "@/components/home_page/ProductsSwiper.vue";
import TopCategorise from "@/components/home_page/TopCategorise.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import PretiumLigular from "@/components/home_page/PretiumLigular.vue";
import NewPrandes from "@/components/home_page/NewPrandes.vue";
import WhyShopWithUs from "@/components/home_page/WhyShopWithUs.vue";

import { useProductsStore } from "@/stores/products";
const store = useProductsStore();
</script>

<style lang="scss" scoped></style>

<ProductsSwiper
  :title="'Flash Deals'"
  :color="'red'"
  :prouducts="store.beauty"
  :getProducts="store.getProducts"
/>
<ProductsSwiper
  :title="'Flash Deals'"
  :color="'red'"
  :prouducts="store.groceries"
  :getProducts="store.getProducts"
/>
<ProductsSwiper
  :title="'Flash Deals'"
  :color="'red'"
  :prouducts="store.Furniture"
  :getProducts="store.getProducts"
/>
<ProductsSwiper
  :title="'Flash Deals'"
  :color="'red'"
  :prouducts="store.Fragrances"
  :getProducts="store.getProducts"
/>
