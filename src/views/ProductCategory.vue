<template>
  <div class="product-category pt-10">
    <h1 class="text-center title">{{ $t(route.params.title) }}</h1>
    <v-container fluid class="px-16">
      <!-- Skeleton Loader -->
      <v-row v-if="isLoading">
        <v-col
          v-for="n in 8"
          :key="n"
          class="d-flex justify-center align-center"
        >
          <v-skeleton-loader
            type="card, image, article"
            width="240"
            class="my-10"
          />
        </v-col>
      </v-row>

      <!-- عرض المنتجات بعد التحميل -->
      <v-row v-else>
        <v-col
          class="d-flex justify-center align-center"
          v-for="product in store.categoriesProducts"
          :key="product.id"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              style="transition: all 0.5s ease-in-out"
              v-bind="props"
              class="mx-2 my-10 rounded-lg cursor-pointer"
              width="240"
              md="280"
              :elevation="isHovering ? 6 : 0.5"
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
                  style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
                  >{{ $t("swiper.Quick-View") }}</v-btn
                >
              </div>

              <v-card-text class="pb-1">
                <span>
                  ({{ product.title.split(" ").slice(0, 2).join(" ") }})
                </span>
                <span>
                  {{
                    product.description.split(" ").slice(0, 4).join(" ") +
                    "....."
                  }}
                </span>
              </v-card-text>

              <v-card-text class="pt-0 pb-1">
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
                          product.price * (product.discountPercentage / 100)
                      )
                    }}.00
                  </span>
                </div>
              </v-card-text>

              <v-card-text class="py-0">
                <ul class="related-images d-flex align-center justify-center">
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
                        handleImageClick(product.id, product.thumbnail, img)
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
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import router from "@/router";
import { inject } from "vue";

const emitter = inject("emitter");

const openDialog = (product) => {
  emitter?.emit("openTheDialog", product);
};
const route = useRoute();
const store = useProductsStore();

const isLoading = ref(true);
const selectedImages = reactive({});
const resetTimers = reactive({});

onMounted(async () => {
  isLoading.value = true;
  await store.getProductsByCategory(route.params.category);
  isLoading.value = false;
});

watch(
  () => route.params.category,
  async () => {
    isLoading.value = true;
    await store.getProductsByCategory(route.params.category);
    isLoading.value = false;
  }
);

function handleImageClick(productId, originalThumbnail, newImage) {
  selectedImages[productId] = newImage;

  if (resetTimers[productId]) {
    clearTimeout(resetTimers[productId]);
  }

  resetTimers[productId] = setTimeout(() => {
    selectedImages[productId] = originalThumbnail;
  }, 3000);
}
</script>

<style scoped lang="scss">
.product-category {
  .title {
    font-size: 2rem;
    font-weight: 600;
    &::after {
      content: "";
      display: block;
      width: 150px;
      height: 3px;
      background-color: #0066ff;
      margin: 10px auto;
    }
    font-family: "Gill Sans MT", "Trebuchet MS", sans-serif;
  }

  .scale {
    transform: scale(1.06);
  }
}
</style>
