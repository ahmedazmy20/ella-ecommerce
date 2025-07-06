<template>
  <div class="why-shop-with-us py-4 my-15">
    <v-container fluid>
      <h2 class="title font-weight-bold">{{ $t("home.whyShopWithUs") }}</h2>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              style="transition: all 0.5s ease-in-out"
              v-bind="props"
              :class="`${
                isHovering ? 'bg-glass' : 'bg-transparent'
              } elevation-0 py-5 px-5 rounded-lg`"
            >
              <img
                src="../../assets/images/free-shipping.png"
                alt="free-shipping-img"
              />
              <v-card-title
                style="white-space: pre-wrap"
                class="font-weight-bold"
                >{{ $t("home.Free-Shipping-firest") }}</v-card-title
              >
              <v-card-text class="pb-0">
                {{ $t("home.Praesent-facilisis") }}
              </v-card-text>
              <a href="#" class="text-white font-weight-medium">{{
                $t("home.Learn-More")
              }}</a>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              style="transition: all 0.5s ease-in-out"
              v-bind="props"
              :class="`${
                isHovering ? 'bg-glass' : 'bg-transparent'
              } elevation-0 py-5 px-5 rounded-lg`"
            >
              <img
                src="../../assets/images/weekly-flash-sales.png"
                alt="free-shipping-img"
              />
              <v-card-title
                style="white-space: pre-wrap"
                class="font-weight-bold"
                >{{ $t("home.Weekly-Sale") }}</v-card-title
              >
              <v-card-text class="pb-0">
                {{ $t("home.Praesent-facilisis") }}
              </v-card-text>
              <a href="#" class="text-white font-weight-medium">{{
                $t("home.Learn-More")
              }}</a>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              style="transition: all 0.5s ease-in-out"
              v-bind="props"
              :class="`${
                isHovering ? 'bg-glass' : 'bg-transparent'
              } elevation-0 py-5 px-5 rounded-lg`"
            >
              <img
                src="../../assets/images/discount.png"
                alt="free-shipping-img"
              />
              <v-card-title
                style="white-space: pre-wrap"
                class="font-weight-bold"
                >{{ $t("home.Anual-Discount") }}</v-card-title
              >
              <v-card-text class="pb-0">
                {{ $t("home.Praesent-facilisis") }}
              </v-card-text>
              <a href="#" class="text-white font-weight-medium">{{
                $t("home.Learn-More")
              }}</a>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="12" lg="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              style="transition: all 0.5s ease-in-out"
              v-bind="props"
              :class="`${
                isHovering ? 'bg-glass' : 'bg-transparent'
              } elevation-0 py-5 px-5 rounded-lg`"
            >
              <img
                src="../../assets/images/cash-back.png"
                alt="free-shipping-img"
              />
              <v-card-title
                style="white-space: pre-wrap"
                class="font-weight-bold"
                >{{ $t("home.Cashback-Program") }}</v-card-title
              >
              <v-card-text class="pb-0">
                {{ $t("home.Praesent-facilisis") }}
              </v-card-text>
              <a href="#" class="text-white font-weight-medium">{{
                $t("home.Learn-More")
              }}</a>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.why-shop-with-us {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-size: cover;
  height: fit-content;
  background-position: center;
  background-repeat: repeat-x;
  color: white;
  h2 {
    font-size: 25px;
    @media (min-width: 550px) {
      font-size: 35px;
    }
    padding: 0px 0px 15px;
    span {
      color: #00ffc8;
    }
  }
}
.bg-glass {
  background: rgba(255, 255, 255, 0.1); /* Light glass */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
}
</style>
