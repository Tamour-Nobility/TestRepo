<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Student’s Interested Topics</h3>
        <select
          class="form-select month-select form-control p-0 h-auto border-0 w-110"
          style="background-position: right 0 center"
          aria-label="Default select example"
        >
          <option selected>Last 6 Month</option>
          <option value="1">Last 8 Month</option>
          <option value="2">Last 12 Month</option>
        </select>
      </div>

      <apexchart
        v-if="isClient"
        type="bar"
        height="395"
        :options="studentsInterestedTopics"
        :series="topics"
      ></apexchart>
      <div id="student_interested_topics"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "StudentsInterestedTopicsChart",
  setup() {
    const isClient = ref(false);
    const topics = ref([
      {
        name: "Courses",
        data: [47, 69, 37, 17, 28, 40],
      },
    ]);
    const studentsInterestedTopics = ref({
      chart: {
        type: "bar",
        height: 395,
        toolbar: {
          show: false,
        },
      },
      colors: ["#605DFF"],
      plotOptions: {
        bar: {
          barHeight: "21px",
          horizontal: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#ECEEF2",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "UX/UI Design",
          "WordPress",
          "Motion Design",
          "Video Editing",
          "Angular",
          "Python",
        ],
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        labels: {
          show: true,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: true,
          color: "#ECEEF2",
        },
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      topics,
      studentsInterestedTopics,
    };
  },
});
</script>
