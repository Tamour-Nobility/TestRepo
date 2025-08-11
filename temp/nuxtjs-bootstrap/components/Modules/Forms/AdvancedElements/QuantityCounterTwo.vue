<template>
  <div class="add-to-cart-counter">
    <button
      type="submit"
      :class="['minusBtn', btnColor]"
      @click="decrement"
    ></button>
    <input
      type="text"
      size="25"
      v-model="internalValue"
      :class="['count', bgClass]"
    />
    <button
      type="submit"
      :class="['plusBtn', btnColor]"
      @click="increment"
    ></button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

const props = defineProps<{
  btnColor: string;
  bgClass: string;
}>();

const internalValue = ref<number>(1);

const increment = () => {
  internalValue.value++;
};

const decrement = () => {
  if (internalValue.value > 0) {
    internalValue.value--;
  }
};
</script>
