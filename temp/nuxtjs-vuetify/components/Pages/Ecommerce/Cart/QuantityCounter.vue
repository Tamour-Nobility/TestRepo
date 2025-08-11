<template>
  <div class="quantity-counter position-relative">
    <button
      @click="decrement"
      class="border-none p-0 transition cursor-pointer bg-transparent"
    >
      -
    </button>
    <input
      type="number"
      class="d-block w-100 border-none text-center border-radius"
      v-model="internalValue"
    />
    <button
      @click="increment"
      class="border-none p-0 transition cursor-pointer bg-transparent"
    >
      +
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const props = defineProps<{ value: number }>();

const internalValue = ref<number>(props.value);

// Watch for changes in the prop to update internal value
watch(
  () => props.value,
  (newVal: any) => {
    internalValue.value = newVal;
  }
);

const increment = () => {
  internalValue.value++;
};

const decrement = () => {
  if (internalValue.value > 0) {
    internalValue.value--;
  }
};
</script>

<style lang="scss" scoped>
.quantity-counter {
  width: 100px;

  input {
    height: 42px;
    font-size: 15px;
    background: #f6f7f9;
    color: var(--blackColor);

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      display: none;
    }
  }
  button {
    top: 50%;
    left: 15px;
    font-size: 20px;
    position: absolute;
    color: var(--bodyColor);
    transform: translateY(-50%);

    &:last-child {
      left: auto;
      right: 15px;
    }
    &:hover {
      color: var(--primaryColor);
    }
  }
}
</style>
