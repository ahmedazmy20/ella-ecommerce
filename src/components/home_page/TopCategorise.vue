<template>
  <div class="top-categories my-8">
    <div class="top-cat-upper-image">
      <img class="w-100" src="../../assets/images/cyber-banner.webp" alt="" />
    </div>
    <div class="mt-14 mb-8 px-1 d-flex align-center justify-center">
      <h3
        style="width: fit-content"
        class="text-h5 text-md-h4 font-weight-bold text-center flex-grow-1"
      >
        <span class="title">{{ $t("home.topCategories") }}</span>
      </h3>
    </div>
    <div class="main-categories">
      <v-container fluid>
        <v-row>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="category in categories"
            :key="category.title"
          >
            <div class="categories d-flex justify-center">
              <v-card class="text-center w-75 elevation-0">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="card-image rounded-circle overflow-hidden cursor-pointer"
                  >
                    <img
                      v-bind="props"
                      class="w-100 d-block"
                      :style="`
                        transform: ${
                          isHovering
                            ? 'rotate(6deg) scale(1.2)'
                            : 'rotate(0deg)'
                        };
                        transition: 0.5s ease-in-out;
                      `"
                      :src="category.image"
                      :alt="category.title"
                    />
                  </div>
                  <v-card-text
                    v-bind="props"
                    :class="`cursor-pointer font-weight-bold ${
                      isHovering ? 'text-blue-darken-3' : ''
                    }`"
                    style="transition: 0.3s ease-in-out"
                    >{{ $t(category.title) }}</v-card-text
                  ></v-hover
                >
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const categories = ref([
  {
    title: "home.mobilePhones",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    title: "home.Labtops",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
  },
  {
    title: "home.Televisions",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
  },
  {
    title: "home.PCs",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
  },
  {
    title: "home.Audio",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
  },
  {
    title: "home.Gaming",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
  },
  {
    title: "home.Home-Appliances",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
  },
  {
    title: "home.Kitchen-Appliances",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
  },
  {
    title: "home.Camera",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
  },
  {
    title: "home.Consumables",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
  },
  {
    title: "home.Smart-Homes",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
  },
  {
    title: "home.Accessories",
    image:
      "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
  },
]);
</script>

<style lang="scss" scoped>
.top-categories {
  .title {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 120%;
      left: 0;
      width: 100%;
      height: 6%;
      background-color: rgb(141, 53, 176);
    }
    &::before {
      content: "";
      position: absolute;
      top: 140%;
      left: 15%;
      width: 70%;
      height: 6%;
      background-color: rgb(24, 34, 129);
    }
  }
}
</style>
