<template>
  <div class="add-to-cart-counter">
    <input @click="decrement" type="button" class="minusBtn" value="-" />
    <input type="text" size="25" v-model="internalValue" class="count" />
    <input @click="increment" type="button" class="plusBtn" value="+" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

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
