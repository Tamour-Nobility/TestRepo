<template>
  <div class="clockdiv">
    <ul
      class="ps-0 mb-0 list-unstyled d-flex align-items-center gap-3 justify-content-center"
    >
      <li class="time">
        <span class="days">{{ days }}</span>
      </li>
      <li class="time">
        <span class="hours">{{ hours }}</span>
      </li>
      <li class="time">
        <span class="minutes">{{ minutes }}</span>
      </li>
      <li class="time">
        <span class="seconds">{{ seconds }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  props: {
    endDate: { type: String, required: true },
  },
  setup(props) {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    let interval: number;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const endTime = new Date(props.endDate).getTime();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      hours.value = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((timeLeft % (1000 * 60)) / 1000);
    };

    onMounted(() => {
      updateCountdown();
      interval = setInterval(updateCountdown, 1000) as unknown as number;
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return { days, hours, minutes, seconds };
  },
});
</script>
