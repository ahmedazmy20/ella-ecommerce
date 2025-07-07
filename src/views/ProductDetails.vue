<template>
  <div class="product-details" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <v-container>
      <h3 class="page-title text-h5 mt-10">
        <span class="text-blue-darken-2 font-weight-bold">{{
          store.singelProduct.title
        }}</span>
        {{ $t("quick.Details") }}
      </h3>

      <v-row>
        <v-col cols="12" md="7" class="my-5">
          <v-row>
            <v-col cols="12" class="mb-6">
              <v-col cols="12" v-if="isLoading">
                <v-skeleton-loader
                  class="mx-auto"
                  type="image, image, image, image"
                  width="100%"
                  height="100%"
                ></v-skeleton-loader>
              </v-col>
              <img
                v-else
                width="300"
                :src="
                  selectedImage ? selectedImage : store.singelProduct.thumbnail
                "
                alt=""
              />
            </v-col>

            <v-col>
              <v-slide-group center-active show-arrows v-model="selectedImage">
                <v-slide-group-item
                  :value="img"
                  v-for="img in store.singelProduct.images"
                  :key="img"
                  v-slot="{ isSelected, toggle }"
                >
                  <v-hover v-slot="{ isHovering, props }">
                    <img
                      v-bind="props"
                      :isSelected="isSelected"
                      @click="toggle"
                      style="width: 150px; transition: all 0.4s ease"
                      :class="`cursor-pointer ${
                        isHovering ? 'bg-grey-lighten-3' : ''
                      } rounded-xl mx-3`"
                      :src="img"
                      :alt="img"
                    />
                  </v-hover>
                </v-slide-group-item>
              </v-slide-group>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="5" class="my-5">
          <v-col cols="12" v-if="isLoading">
            <v-skeleton-loader
              class="mx-auto"
              type="article, article, article, actions"
              width="100%"
              height="100%"
            ></v-skeleton-loader>
          </v-col>

          <div
            v-else
            class="details"
            :class="$i18n.locale === 'ar' ? 'text-end' : 'text-start'"
          >
            <v-card class="px-5 py-4">
              <v-card-text>
                <h3>
                  ({{ store.singelProduct.title }}) {{ $t("quick.Sampel") }} -
                  {{ store.singelProduct.category }} {{ $t("quick.For-Sale") }}
                </h3>
              </v-card-text>

              <v-card-text class="pt-0 pb-1">
                <div
                  class="rating d-flex align-center ga-5 mb-3"
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                >
                  <span class="font-weight-bold text-grey-darken-1">
                    {{ $t("quick.Rating") }} :
                  </span>
                  <v-rating
                    half-increments
                    color="yellow-darken-3"
                    active-color="yellow-darken-4"
                    readonly
                    :length="5"
                    :size="25"
                    :model-value="store.singelProduct.rating"
                  />
                  <span>
                    {{ $t("quick.Stock") }} : {{ store.singelProduct.stock }}
                  </span>
                </div>

                <div
                  class="description mb-3 d-flex"
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                >
                  <span class="font-weight-bold text-grey-darken-1">
                    {{ $t("quick.Description") }}:
                  </span>
                  {{ store.singelProduct.description }}
                </div>

                <div class="currency mb-3">
                  <span class="font-weight-bold text-grey-darken-1">
                    {{ $t("quick.Price") }} :
                  </span>
                  <del>$ {{ store.singelProduct.price }}</del>
                  {{ $t("quick.From") }}
                  <span class="text-red font-weight-black">
                    ${{
                      Math.ceil(
                        store.singelProduct.price -
                          store.singelProduct.price *
                            (store.singelProduct.discountPercentage / 100)
                      )
                    }}.00
                  </span>
                </div>

                <div
                  class="brand mb-3 d-flex"
                  :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
                >
                  <span class="font-weight-bold text-grey-darken-1">
                    {{ $t("quick.Brand") }} :
                  </span>
                  {{ store.singelProduct.brand }}
                </div>

                <span>{{ $t("quick.Quantity") }} :</span>
                <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
                  <div
                    class="counter ms-0 my-3 px-1 py-1"
                    style="
                      border: 1px solid black;
                      border-radius: 30px;
                      width: fit-content;
                    "
                  >
                    <v-icon
                      @click="quantity > 1 && quantity--"
                      class="cursor-pointer"
                    >
                      mdi-minus
                    </v-icon>
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
                    <v-icon @click="quantity++" class="cursor-pointer">
                      mdi-plus
                    </v-icon>
                  </div>
                </div>

                <div class="sub-total my-3">
                  <span>{{ $t("quick.Subtotal") }} :</span>
                  $
                  {{
                    Math.ceil(
                      store.singelProduct.price -
                        store.singelProduct.price *
                          (store.singelProduct.discountPercentage / 100)
                    ) * quantity
                  }}.00
                </div>

                <div
                  class="add-to-cart d-flex align-center justify-center"
                  :class="
                    $i18n.locale === 'ar' ? 'justify-end' : 'justify-start'
                  "
                >
                  <v-btn
                    :loading="btnLoding"
                    @click="addToCartWithQuantity(store.singelProduct)"
                    color="black"
                    class="text-white text-capitalize w-75 rounded-xl"
                  >
                    {{ $t("quick.Add-cart") }}
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { inject, onMounted, ref } from "vue";
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const isLoading = ref(false);
const btnLoding = ref(false);
const store = useProductsStore(); // get singel product from store
const route = useRoute();
const quantity = ref(1);
const selectedImage = ref(null);
const emitter = inject("emitter");

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
  }, 1000);
}
onMounted(async () => {
  isLoading.value = true;
  await store.getSingelProduct(route.params.productId);
  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
