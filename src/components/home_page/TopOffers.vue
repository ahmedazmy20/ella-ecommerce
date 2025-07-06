<template>
  <div class="top-offers pb-12">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <div class="content">
            <v-hover v-slot="{ isHovering, props }">
              <img
                style="width: 100%; transition: all 0.5s ease; display: block"
                src="../../assets/images/playstations.webp"
                alt=""
                v-bind="props"
                :class="`${isHovering ? 'scale' : ''}`"
            /></v-hover>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="content">
            <v-hover v-slot="{ isHovering, props }">
              <img
                style="width: 100%; transition: all 0.5s ease; display: block"
                src="../../assets/images/headset.webp"
                alt=""
                v-bind="props"
                :class="`${isHovering ? 'scale' : ''}`"
            /></v-hover>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="content">
            <v-hover v-slot="{ isHovering, props }">
              <img
                style="width: 100%; transition: all 0.5s ease; display: block"
                src="../../assets/images/chairs.webp"
                alt=""
                v-bind="props"
                :class="`${isHovering ? 'scale' : ''}`"
            /></v-hover>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="content-bottom mr-md-3">
            <v-hover v-slot="{ isHovering, props }">
              <img
                style="width: 100%; transition: all 0.5s ease; display: block"
                src="../../assets/images/iphones.webp"
                alt=""
                v-bind="props"
                :class="`${isHovering ? 'scale' : ''}`"
            /></v-hover>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="content-bottom ml-md-3">
            <v-hover v-slot="{ isHovering, props }">
              <img
                style="width: 100%; transition: all 0.5s ease; display: block"
                src="../../assets/images/laptops.webp"
                alt=""
                v-bind="props"
                :class="`${isHovering ? 'scale' : ''}`"
            /></v-hover>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.top-offers {
  background-color: #c4c4c431;
  padding: 20px 0px;
  margin-top: 20px;
  .content {
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    .scale {
      transform: scale(1.06);
    }
  }
  .content-bottom {
    margin-top: 20px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    .scale {
      transform: scale(1.06);
    }
  }
}
</style>
