<template>
  <div class="flash-deals mt-12">
    <v-container fluid>
      <div class="text-center">
        <div class="mb-8 px-1 d-flex align-center justify-center">
          <h3
            :style="`width: fit-content; color: ${props.color}`"
            class="text-h5 text-md-h4 font-weight-bold text-center flex-grow-1"
          >
            <span class="title">{{ props.title }}</span>
          </h3>
        </div>

        <!-- Row wrapper for all cases -->
        <v-row>
          <!-- Skeleton Loading -->
          <template v-if="!props.prouducts.length">
            <v-col cols="12" sm="6" md="3" v-for="i in 4" :key="i">
              <v-skeleton-loader
                type="card, image, article"
                width="240"
                class="my-10"
              />
            </v-col>
          </template>

          <!-- Products Loaded -->
          <template v-else>
            <v-col cols="12">
              <v-slide-group show-arrows class="px-md-2">
                <template v-slot:prev>
                  <v-btn icon variant="text" class="border-md">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                </template>

                <template v-slot:next>
                  <v-btn icon variant="text" class="border-md">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </template>

                <v-slide-group-item
                  v-for="product in props.prouducts.slice(0, 8)"
                  :key="product.id"
                >
                  <v-hover v-slot="{ isHovering, props: hoverProps }">
                    <v-card
                      v-bind="hoverProps"
                      style="transition: all 0.5s ease-in-out"
                      class="mx-2 my-10 rounded-lg"
                      width="240"
                      :elevation="isHovering ? 3 : 0"
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
                        <span>({{ shortTitle(product.title) }})</span>
                        <span>{{ shortDesc(product.description) }}</span>
                      </v-card-text>

                      <v-card-text class="pt-0 pb-1 text-start">
                        <v-rating
                          half-increments
                          color="yellow-darken-3"
                          active-color="yellow-darken-4"
                          class="mb-2"
                          readonly
                          :length="5"
                          :size="24"
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
                            v-for="(img, i) in product.images"
                            :key="i"
                            style="list-style-type: none; margin-right: 10px"
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
                    </v-card>
                  </v-hover>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
          </template>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import router from "@/router";
import { inject, reactive, defineProps, onMounted } from "vue";

const emitter = inject("emitter");

const openDialog = (product) => {
  emitter?.emit("openTheDialog", product);
};

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  prouducts: {
    type: Array,
    required: true,
  },
  getProducts: {
    type: Function,
    required: true,
  },
});

const selectedImages = reactive({});
const resetTimers = reactive({});

onMounted(async () => {
  await props.getProducts();
  props.prouducts.forEach((product) => {
    selectedImages[product.id] = product.thumbnail;
  });
});

function handleImageClick(productId, originalThumbnail, newImage) {
  selectedImages[productId] = newImage;

  if (resetTimers[productId]) {
    clearTimeout(resetTimers[productId]);
  }

  resetTimers[productId] = setTimeout(() => {
    selectedImages[productId] = originalThumbnail;
  }, 3000);
}

function shortTitle(title) {
  return title.split(" ").slice(0, 2).join(" ");
}

function shortDesc(desc) {
  return desc.split(" ").slice(0, 4).join(" ") + ".....";
}
</script>

<style lang="scss" scoped>
.scale {
  transform: scale(1.06);
}
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
</style>
