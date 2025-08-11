<template>
  <div class="quantity-counter position-relative">
    <button
      @click="decrement"
      class="border-none p-0 transition cursor-pointer bg-transparent fw-normal"
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
      class="border-none p-0 transition cursor-pointer bg-transparent fw-normal"
    >
      +
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

// eslint-disable-next-line no-undef
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
  width: 102px;

  input {
    height: 34px;
    font-size: 14px;
    border-radius: 7px;
    background: #ecf0ff;
    color: var(--blackColor);

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      display: none;
    }
  }
  button {
    top: 50%;
    left: 17px;
    font-size: 25px !important;
    position: absolute;
    color: var(--bodyColor) !important;
    transform: translateY(-50%);

    &:last-child {
      left: auto;
      right: 17px;
    }
    &:hover {
      color: var(--primaryColor);
    }
  }
}
</style>
