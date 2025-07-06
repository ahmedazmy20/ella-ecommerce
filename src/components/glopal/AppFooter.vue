<template>
  <div class="appFooter">
    <v-footer class="bg-grey-lighten-4 pt-13" :app="true" absolute>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <div class="title">
              <h3 class="text-h5 font-weight-bold text-uppercase">
                {{ $t("footer.subscribe-newsletter") }}
              </h3>
            </div>
            <div class="hint text-capitalize">
              {{ $t("footer.get-latest-sale") }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <div class="d-flex justify-center flex-wrap align-center ga-3">
              <input
                style="width: 30%; outline: none"
                type="text"
                class="bg-white px-6 py-3 rounded-xl"
                placeholder="enter your email address"
              />
              <v-btn
                class="d-flex justify-center align-center bg-blue-darken-4 rounded-xl px-8 py-5 text-white"
                >{{ $t("footer.Submit") }}</v-btn
              >
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm md lg>
            <v-card elevation="0" class="bg-transparent">
              <v-card-title class="font-weight-bold text-uppercase text-start">
                {{ $t("footer.shop") }}
              </v-card-title>
              <ul>
                <li v-for="(category, i) in store.categories" :key="i">
                  <v-card-text
                    class="pt-0 text-start cursor-pointer"
                    style="color: gray"
                  >
                    <router-link
                      style="color: gray; text-decoration: none"
                      :to="{
                        name: 'products_category',
                        params: {
                          category: category.route,
                          title: category.title,
                        },
                      }"
                      >{{ category.title }}</router-link
                    ></v-card-text
                  >
                </li>
              </ul>
            </v-card>
          </v-col>

          <v-col cols="12" sm md lg>
            <v-card elevation="0" class="bg-transparent">
              <v-card-title class="font-weight-bold text-uppercase text-start">
                {{ $t("footer.further-info") }}
              </v-card-title>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.About")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Customer-Service")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Reward-Program")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Shipping-Returns")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Privace-Policy")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Terms-Conditions")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Blog")
              }}</v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm md lg>
            <v-card elevation="0" class="bg-transparent">
              <v-card-title class="font-weight-bold text-uppercase text-start">
                {{ $t("footer.customer-service") }}
              </v-card-title>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Search-Terms")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Advanced-Search")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Orders-Returns")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Contact-Us")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Theme-FAQs")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Consultant")
              }}</v-card-text>
              <v-card-text class="pt-0 text-start" style="color: gray">{{
                $t("footer.Store-Locations")
              }}</v-card-text>
            </v-card>
          </v-col>

          <v-col class="text-start" cols="12" sm md lg>
            <img
              class="cursor-pointer"
              @click="$router.push({ name: 'home' })"
              src="../../assets/images/footer-logo.webp"
              alt="footer-logo"
            />
            <div class="d-flex align-start ga-6 py-5">
              <svg
                style="width: 12px; fill: #3f3f3f; margin-top: 5px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                ></path>
              </svg>
              <span class="text-start text-grey-darken-2">
                {{ $t("footer.Market-Street") }} <br />
                {{ $t("footer.San-Francisco") }}</span
              >
            </div>
            <div class="d-flex align-start ga-6">
              <svg
                style="width: 18px; fill: #3f3f3f; margin-top: 5px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone-alt"
                role="img"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-phone-alt fa-w-16 fa-7x"
              >
                <path
                  d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                ></path>
              </svg>
              <span class="text-start text-grey-darken-2">
                {{ $t("footer.Call-us") }}
                <span class="text-decoration-underline">{{
                  $t("footer.number")
                }}</span></span
              >
            </div>
            <div class="d-flex align-start ga-6 py-5">
              <svg
                style="width: 18px; fill: #3f3f3f; margin-top: 5px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-envelope fa-w-16 fa-7x"
              >
                <path
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  class=""
                ></path>
              </svg>
              <span
                class="text-start text-decoration-underline text-grey-darken-2"
              >
                example@domain.com
              </span>
            </div>

            <v-row>
              <v-col cols="4" sm md>
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    v-bind="props"
                    style="
                      width: 40px;
                      height: 40px;
                      transition: all 0.3s ease-in-out;
                    "
                    :class="`d-flex justify-center align-center ${
                      isHovering ? 'bg-blue-darken-1' : 'bg-grey-darken-3'
                    }  rounded-circle cursor-pointer`"
                  >
                    <svg
                      style="width: 20px; height: 20px; fill: white"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      class="icon icon-facebook"
                    >
                      <path
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </div>
                </v-hover>
              </v-col>
              <v-col cols="4" sm md>
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    v-bind="props"
                    style="
                      width: 40px;
                      height: 40px;
                      transition: all 0.3s ease-in-out;
                    "
                    :class="`d-flex justify-center align-center ${
                      isHovering ? 'bg-blue-darken-1' : 'bg-grey-darken-3'
                    }  rounded-circle cursor-pointer`"
                  >
                    <svg
                      style="width: 18px; height: 18px; fill: white"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xml:space="preserve"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      class="icon icon-instagram"
                    >
                      <g>
                        <path
                          d="M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152   c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M437,0H75C33.6,0,0,33.6,0,75v362   c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M256,392c-74.399,0-135-60.601-135-135   c0-74.401,60.601-135,135-135s135,60.599,135,135C391,331.399,330.399,392,256,392z M421,122c-16.5,0-30-13.5-30-30s13.5-30,30-30   s30,13.5,30,30S437.5,122,421,122z M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z    M256,152c-57.9,0-105,47.1-105,105s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z M256,152c-57.9,0-105,47.1-105,105   s47.1,105,105,105s105-47.1,105-105S313.9,152,256,152z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </v-hover>
              </v-col>
              <v-col cols="4" sm md>
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    v-bind="props"
                    style="
                      width: 40px;
                      height: 40px;
                      transition: all 0.3s ease-in-out;
                    "
                    :class="`d-flex justify-center align-center ${
                      isHovering ? 'bg-blue-darken-1' : 'bg-grey-darken-3'
                    }  rounded-circle cursor-pointer`"
                  >
                    <svg
                      style="width: 20px; height: 20px; fill: white"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      class="icon icon-pinterest"
                      viewBox="0 0 17 18"
                    >
                      <path
                        d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z"
                      ></path>
                    </svg>
                  </div>
                </v-hover>
              </v-col>
              <v-col cols="4" sm md>
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    v-bind="props"
                    style="
                      width: 40px;
                      height: 40px;
                      transition: all 0.3s ease-in-out;
                    "
                    :class="`d-flex justify-center align-center ${
                      isHovering ? 'bg-blue-darken-1' : 'bg-grey-darken-3'
                    }  rounded-circle cursor-pointer`"
                  >
                    <svg
                      style="width: 20px; height: 20px; fill: white"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-snapchat"
                      viewBox="0 0 50 50"
                    >
                      <path
                        d="M 46.773438 35.078125 C 40.96875 34.121094 38.316406 28.109375 38.230469 27.914063 C 38.21875 27.878906 38.191406 27.816406 38.175781 27.78125 C 38 27.429688 37.824219 26.933594 37.972656 26.582031 C 38.226563 25.980469 39.433594 25.597656 40.15625 25.367188 C 40.410156 25.285156 40.652344 25.210938 40.839844 25.136719 C 42.59375 24.441406 43.46875 23.535156 43.449219 22.433594 C 43.433594 21.546875 42.753906 20.734375 41.753906 20.382813 C 41.40625 20.234375 41.007813 20.160156 40.605469 20.160156 C 40.332031 20.160156 39.917969 20.199219 39.519531 20.382813 C 38.851563 20.695313 38.265625 20.863281 37.847656 20.882813 C 37.757813 20.878906 37.679688 20.871094 37.613281 20.859375 L 37.65625 20.171875 C 37.851563 17.0625 38.097656 13.1875 37.046875 10.832031 C 33.945313 3.890625 27.375 3.351563 25.433594 3.351563 L 24.550781 3.359375 C 22.613281 3.359375 16.054688 3.898438 12.960938 10.835938 C 11.910156 13.191406 12.152344 17.0625 12.351563 20.175781 L 12.359375 20.292969 C 12.371094 20.484375 12.382813 20.675781 12.394531 20.859375 C 11.960938 20.9375 11.113281 20.792969 10.234375 20.382813 C 9.039063 19.824219 6.886719 20.5625 6.589844 22.125 C 6.457031 22.816406 6.617188 24.128906 9.164063 25.132813 C 9.355469 25.210938 9.59375 25.285156 9.851563 25.367188 C 10.570313 25.597656 11.777344 25.976563 12.03125 26.582031 C 12.179688 26.933594 12.003906 27.429688 11.796875 27.855469 C 11.6875 28.109375 9.050781 34.121094 3.234375 35.078125 C 2.492188 35.199219 1.964844 35.855469 2.003906 36.613281 C 2.015625 36.8125 2.066406 37.011719 2.148438 37.207031 C 2.675781 38.445313 4.59375 39.296875 8.171875 39.878906 C 8.234375 40.089844 8.304688 40.402344 8.34375 40.574219 C 8.417969 40.929688 8.5 41.289063 8.609375 41.664063 C 8.714844 42.019531 9.078125 42.84375 10.210938 42.84375 C 10.554688 42.84375 10.929688 42.769531 11.332031 42.691406 C 11.925781 42.574219 12.667969 42.429688 13.621094 42.429688 C 14.152344 42.429688 14.699219 42.476563 15.25 42.566406 C 16.265625 42.734375 17.183594 43.386719 18.25 44.136719 C 19.914063 45.316406 21.800781 46.648438 24.726563 46.648438 C 24.804688 46.648438 24.882813 46.644531 24.957031 46.640625 C 25.0625 46.644531 25.171875 46.648438 25.28125 46.648438 C 28.207031 46.648438 30.09375 45.3125 31.761719 44.136719 C 32.777344 43.414063 33.738281 42.738281 34.757813 42.566406 C 35.308594 42.476563 35.855469 42.429688 36.386719 42.429688 C 37.304688 42.429688 38.03125 42.546875 38.679688 42.675781 C 39.140625 42.765625 39.507813 42.808594 39.847656 42.808594 C 40.605469 42.808594 41.1875 42.375 41.398438 41.648438 C 41.507813 41.28125 41.585938 40.925781 41.664063 40.566406 C 41.695313 40.433594 41.769531 40.097656 41.835938 39.875 C 45.414063 39.292969 47.332031 38.441406 47.855469 37.214844 C 47.941406 37.019531 47.988281 36.816406 48.003906 36.605469 C 48.042969 35.859375 47.515625 35.203125 46.773438 35.078125 Z"
                      ></path>
                    </svg>
                  </div>
                </v-hover>
              </v-col>
              <v-col cols="4" sm md>
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    v-bind="props"
                    style="
                      width: 40px;
                      height: 40px;
                      transition: all 0.3s ease-in-out;
                    "
                    :class="`d-flex justify-center align-center ${
                      isHovering ? 'bg-blue-darken-1' : 'bg-grey-darken-3'
                    }  rounded-circle cursor-pointer`"
                  >
                    <svg
                      style="width: 20px; height: 20px; fill: white"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      class="icon icon-twitter"
                      viewBox="0 0 18 15"
                    >
                      <path
                        d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"
                      ></path>
                    </svg>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <img
              class="w-50 h-75 rounded-pill"
              src="../../assets/images/cart-page-cards.webp"
              alt=""
            />
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/stores/products";

const store = useProductsStore();
</script>

<style lang="scss" scoped></style>
