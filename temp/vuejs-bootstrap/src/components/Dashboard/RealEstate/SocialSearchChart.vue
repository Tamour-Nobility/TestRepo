<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="mb-4">
        <h3 class="mb-0">Social Search</h3>
        <span>Total Traffic In This Week</span>
      </div>

      <div style="margin: -20px 0 -22px 0">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="230"
          :options="socialSearch"
          :series="search"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "SocialSearchChart",
  setup() {
    const isClient = ref(false);
    const search = ref([90, 80, 70, 60]);
    const socialSearch = ref({
      chart: {
        height: 230,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "14px",
            },
            value: {
              fontSize: "14px",
            },
            total: {
              show: true,
              label: "Total",
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              formatter: function (_w: never) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
          hollow: {
            margin: 10,
            size: "40%",
            background: "transparent",
          },
        },
      },
      labels: ["LinkedIn", "Twitter", "Facebook", "Instagram"],
      colors: ["#AD63F6", "#3584FC", "#37D80A", "#FD5812"],
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      search,
      socialSearch,
    };
  },
});
</script>
