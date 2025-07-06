<template>
  <div class="order-success">
    <v-dialog v-model="dialog" class="w-100 w-md-50" persistent>
      <v-card class="text-center py-10 px-3">
        <div class="icon">
          <v-icon
            class="text-green rounded-circle"
            style="
              width: 70px;
              height: 70px;
              border: 1px solid #4eef41;
              font-size: 40px;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title class="text-center text-capitalize text-h6">{{
          $t("order.success")
        }}</v-card-title>
        <v-card-text>{{ $t("order.success-message") }}</v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="px-4 py-4 d-flex"
            color="primary"
            variant="elevated"
            @click="closeDialog"
            >{{ $t("order.Got-it") }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { watch, ref, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();
const dialog = ref(false);
const props = defineProps({
  popup: Boolean,
});

const emit = defineEmits(["close"]);

watch(
  () => props.popup,
  (newVal) => {
    dialog.value = newVal;
  },
  { immediate: true }
);

function closeDialog() {
  cartStore.resetItems();
  dialog.value = false;
  emit("close"); //انه يقفل parent  هنبعت اشارة لل
  router.push({ name: "home" });
}
</script>

<style lang="scss" scoped></style>
