<template>
  <div class="new-products mb-16">
    <v-container fluid>
      <div class="title px-1 d-flex justify-space-between align-center">
        <h2 class="text-h6 mb-5 text-sm-h4 font-weight-bold">
          {{ $t("home.New-Fragrances") }}
        </h2>
      </div>
      <div class="main">
        <v-row>
          <!-- loding skeleton -->
          <v-col cols="12" md="7" v-if="!store.Fragrances.length" class="mt-16">
            <v-row>
              <v-col cols="4" v-for="i in 3" :key="i">
                <v-skeleton-loader
                  class="mx-auto"
                  type="image, article,button"
                  width="100%"
                  height="100%"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="7" v-else>
            <v-slide-group class="px-md-2">
              <v-slide-group-item
                v-for="product in store.Fragrances.slice(0, 5)"
                :key="product.id"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <v-card
                    style="transition: all 0.5s ease-in-out"
                    v-bind="props"
                    class="mx-2 my-10 rounded-lg"
                    width="240"
                    md="280"
                    elevation="0"
                  >
                    <div class="image position-relative">
                      <img
                        style="transition: all 0.5s ease-in-out"
                        :class="`${isHovering ? 'scale' : ''} w-100`"
                        :src="selectedImages[product.id] || product.thumbnail"
                        :alt="product.title"
                      />
                      <v-btn
                        @click="openDialog(product)"
                        :class="`position-absolute rounded-xl font-weight-bold opacity-0 ${
                          isHovering ? 'opacity-100' : ''
                        }`"
                        style="
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                        "
                        >{{ $t("swiper.Quick-View") }}</v-btn
                      >
                    </div>

                    <v-card-text class="pb-1 text-start">
                      <span
                        >({{
                          product.title.split(" ").slice(0, 2).join(" ")
                        }})</span
                      >
                      <span>
                        {{
                          product.description.split(" ").slice(0, 4).join(" ") +
                          "....."
                        }}
                      </span>
                    </v-card-text>

                    <v-card-text class="pt-0 pb-1 text-start">
                      <v-rating
                        half-increments
                        color="yellow-darken-3"
                        active-color="yellow-darken-4"
                        class="mb-2"
                        readonly
                        :length="5"
                        :size="20"
                        :model-value="product.rating"
                      />
                      <div class="currency">
                        <del>$ {{ product.price }}</del>
                        From
                        <span class="text-red font-weight-black">
                          ${{
                            Math.ceil(
                              product.price -
                                product.price *
                                  (product.discountPercentage / 100)
                            )
                          }}.00
                        </span>
                      </div>
                    </v-card-text>

                    <v-card-text class="py-0">
                      <ul class="related-images d-flex align-center">
                        <li
                          style="list-style-type: none"
                          v-for="(img, i) in product.images"
                          :key="i"
                        >
                          <v-btn
                            variant="text"
                            style="width: 50px; height: 60px"
                            class="rounded-circle"
                            @click="
                              handleImageClick(
                                product.id,
                                product.thumbnail,
                                img
                              )
                            "
                          >
                            <img
                              style="width: 50px; height: 50px"
                              :src="img"
                              :alt="product.title"
                            />
                          </v-btn>
                        </li>
                      </ul>
                    </v-card-text>

                    <v-card-actions class="d-flex justify-center">
                      <v-btn
                        @click="
                          router.push({
                            name: 'product_details',
                            params: { productId: product.id },
                          })
                        "
                        class="px-8 py-5 mb-5 text-capitalize d-flex justify-center align-center"
                        min-width="92"
                        variant="outlined"
                        rounded
                      >
                        {{ $t("swiper.Choose-Options") }}
                      </v-btn>
                    </v-card-actions>
                  </v-card></v-hover
                >
              </v-slide-group-item>
            </v-slide-group>
          </v-col>

          <v-col cols="12" md="5">
            <img
              class="w-100 h-md-100"
              src="@/assets/images/vr-banner.webp"
              alt="vr-banner"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import router from "@/router";
import { useProductsStore } from "@/stores/products";
import { onMounted, reactive } from "vue";
import { inject } from "vue";

const emitter = inject("emitter");

const openDialog = (product) => {
  emitter?.emit("openTheDialog", product);
};

const store = useProductsStore();
const selectedImages = reactive({});
const resetTimers = reactive({});

onMounted(async () => {
  await store.getProducts();
  store.Fragrances.forEach((el) => {
    selectedImages[el.id] = el.thumbnail;
  });
});

function handleImageClick(productId, originalThumbnail, newImage) {
  selectedImages[productId] = newImage;

  // Clear old timer if exists
  if (resetTimers[productId]) {
    clearTimeout(resetTimers[productId]);
  }

  // Reset to original thumbnail after 3 seconds
  resetTimers[productId] = setTimeout(() => {
    selectedImages[productId] = originalThumbnail;
  }, 3000);
}
</script>

<style lang="scss" scoped>
.scale {
  transform: scale(1.06);
}
.v-slide-group__next,
.v-slide-group__prev {
  align-items: center;
  display: none;
  flex: 0 1 52px;
  justify-content: center;
  min-width: 52px;
  cursor: pointer;
}
</style>
