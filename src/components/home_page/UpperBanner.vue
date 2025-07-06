<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6" sm="12" md="12">
            <div
              class="content font-weight-light d-flex flex-column align-start text-start pt-5 pt-md-13"
            >
              <h3
                class="mt-10 mt-md-0 text-h6 text-sm-h5 text-md-h4 text-lg-h3"
              >
                <span class="panner-text">{{ $t("home.huge") }}</span>
                {{ $t("home.on") }} <br />
                {{ $t("home.uhd") }}
              </h3>
              <p class="hint">{{ $t("home.hint") }}</p>
              <v-btn
                color="white"
                class="mt-5 d-flex justify-center align-center"
                variant="outlined"
                density="default"
                style="
                  border-radius: 30px;
                  padding: 12px 30px;
                  text-transform: none;
                "
                >{{ $t("home.Shop-Now") }}</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 450px;
  position: relative;
  .parent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/banner-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .content {
      color: white;
      h3 {
        font-size: 50px;
        font-weight: 300;
        @media (min-width: 820px) {
          font-weight: 900;
        }
        span {
          color: #00ffc8;
        }
      }
      .hint {
        margin: 20px 0px;
      }
    }
  }
}
</style>
