<template>
  <div class="Pretium-ligular">
    <v-container fluid>
      <v-row>
        <v-col v-for="image in images" :key="image.img" cols="12" sm="6">
          <img class="w-100" :src="image.img" alt="image" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
const images = ref([
  {
    img: require("../../assets/images/band-left-cover.webp"),
  },
  {
    img: require("../../assets/images/band-right-cover.webp"),
  },
]);
</script>

<style lang="scss" scoped></style>
