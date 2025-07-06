<template>
  <div class="quick-view">
    <v-dialog v-model="dialog" max-width="900px" class="mx-auto">
      <div class="position-relative">
        <v-icon
          @click="dialog = false"
          class="position-absolute bg-black text-white rounded-lg"
          style="z-index: 10; top: -10px; right: -10px"
        >
          mdi-close
        </v-icon>

        <v-card class="overflow-y-auto py-4 px-2" style="max-height: 90vh">
          <v-row>
            <!-- Left Side: Images -->
            <v-col cols="12" md="7" class="my-3">
              <v-row>
                <!-- Main Image -->
                <v-col cols="12" class="mb-3 d-flex justify-center">
                  <v-col cols="12" v-if="isLoading">
                    <v-skeleton-loader
                      class="mx-auto"
                      type="image, image"
                      width="100%"
                      height="300px"
                    ></v-skeleton-loader>
                  </v-col>
                  <img
                    v-else
                    class="align-center w-75"
                    lazy="loading"
                    :src="selectedImage ? selectedImage : product.thumbnail"
                    alt=""
                    style="max-height: 300px; object-fit: contain"
                  />
                </v-col>

                <!-- Thumbnail Images -->
                <v-col>
                  <v-row v-if="isLoading">
                    <v-col cols="4" v-for="img in product.images" :key="img">
                      <v-skeleton-loader
                        class="mx-auto"
                        type="image"
                        width="100%"
                        height="100%"
                      ></v-skeleton-loader>
                    </v-col>
                  </v-row>

                  <v-slide-group
                    v-else
                    center-active
                    show-arrows
                    v-model="selectedImage"
                  >
                    <v-slide-group-item
                      :value="img"
                      v-for="img in product.images"
                      :key="img"
                      v-slot="{ isSelected, toggle }"
                    >
                      <v-hover v-slot="{ isHovering, props }">
                        <img
                          v-bind="props"
                          :isSelected="isSelected"
                          @click="toggle"
                          style="
                            width: 100px;
                            height: 100px;
                            object-fit: cover;
                            transition: all 0.4s ease;
                          "
                          :class="`cursor-pointer ${
                            isHovering ? 'bg-grey-lighten-3' : ''
                          } rounded-xl mx-2`"
                          lazy="loading"
                          :src="img"
                          :alt="img"
                        />
                      </v-hover>
                    </v-slide-group-item>
                  </v-slide-group>
                </v-col>
              </v-row>
            </v-col>

            <!-- Right Side: Details -->
            <v-col cols="12" md="5" class="my-3">
              <v-col cols="12" v-if="isLoading">
                <v-skeleton-loader
                  class="mx-auto"
                  type="article, article, article, actions"
                  width="100%"
                  height="300px"
                ></v-skeleton-loader>
              </v-col>

              <div
                v-else
                class="details"
                :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
              >
                <v-card class="px-3 py-3">
                  <v-card-text>
                    <h3>({{ product.title }}) - {{ product.category }}</h3>
                  </v-card-text>

                  <v-card-text class="pt-0 pb-1">
                    <div class="rating d-flex align-center ga-2 mb-2">
                      <span class="font-weight-bold text-grey-darken-1"
                        >{{ $t("quick.Rating") }}:</span
                      >
                      <v-rating
                        half-increments
                        color="yellow-darken-3"
                        active-color="yellow-darken-4"
                        readonly
                        :length="5"
                        :size="20"
                        :model-value="product.rating"
                      />
                      <span>{{ $t("quick.Stock") }}: {{ product.stock }}</span>
                    </div>

                    <div class="description mb-2">
                      <span class="font-weight-bold text-grey-darken-1"
                        >{{ $t("quick.Description") }}:</span
                      >
                      {{ product.description }}
                    </div>

                    <div class="currency mb-2">
                      <span class="font-weight-bold text-grey-darken-1"
                        >{{ $t("quick.Price") }}:</span
                      >
                      <del>$ {{ product.price }}</del>
                      {{ $t("quick.From") }}
                      <span class="text-red font-weight-black">
                        ${{
                          Math.ceil(
                            product.price -
                              product.price * (product.discountPercentage / 100)
                          )
                        }}.00
                      </span>
                    </div>

                    <div class="brand mb-2">
                      <span class="font-weight-bold text-grey-darken-1"
                        >{{ $t("quick.Brand") }}:</span
                      >
                      {{ product.brand }}
                    </div>

                    <span>{{ $t("quick.Quantity") }}:</span>
                    <div
                      class="counter my-2 px-1 py-1"
                      style="
                        border: 1px solid black;
                        border-radius: 30px;
                        width: fit-content;
                      "
                    >
                      <v-icon
                        @click="quantity > 1 && quantity--"
                        class="cursor-pointer"
                        >mdi-minus</v-icon
                      >
                      <input
                        style="
                          width: 30px;
                          border: none;
                          text-align: center;
                          outline: none;
                        "
                        type="number"
                        v-model.number="quantity"
                        @input="handleQuantityInput"
                      />
                      <v-icon @click="quantity++" class="cursor-pointer"
                        >mdi-plus</v-icon
                      >
                    </div>

                    <div class="sub-total my-2">
                      <span>{{ $t("quick.Subtotal") }}:</span>
                      $
                      {{
                        Math.ceil(
                          product.price -
                            product.price * (product.discountPercentage / 100)
                        ) * quantity
                      }}.00
                    </div>

                    <div class="add-to-cart d-flex align-center justify-center">
                      <v-btn
                        @click="addToCartWithQuantity(product)"
                        color="black"
                        :loading="btnLoding"
                        class="text-white text-capitalize w-100 rounded-xl"
                      >
                        {{ $t("quick.Add-cart") }}
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { inject } from "vue";
import { useCartStore } from "@/stores/cart";
const dialog = ref(false);
const product = ref("");
const isLoading = ref(false);
const btnLoding = ref(false);
const quantity = ref(1);
const selectedImage = ref(null);
const emitter = inject("emitter");
const cartStore = useCartStore();

//methods
function handleQuantityInput() {
  if (quantity.value < 1) {
    quantity.value = 1;
  }
}
function addToCartWithQuantity(product) {
  btnLoding.value = true;
  product.quantity = quantity.value;
  setTimeout(() => {
    btnLoding.value = false;
    cartStore.additem(product);
    emitter?.emit("openCartDrawer");
    emitter?.emit("showMsg", product.title);
    dialog.value = false;
  }, 1000);
}
onMounted(() => {
  isLoading.value = true;
  emitter?.on("openTheDialog", (data) => {
    selectedImage.value = null;
    quantity.value = 1;
    product.value = data;
    dialog.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
  });
});
</script>

<style lang="scss" scoped></style>
