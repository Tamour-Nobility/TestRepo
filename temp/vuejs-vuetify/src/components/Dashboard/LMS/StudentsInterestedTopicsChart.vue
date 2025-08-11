<template>
  <v-card
    class="students-interested-topics-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Student’s Interested Topics</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none d-inline-block border-radius"
          >
            Last 6 Months
          </button>
        </template>
        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>
    <div class="topics-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="bar"
          height="410"
          :options="studentsInterestedTopics"
          :series="topics"
        ></apexchart>
      </div>
    </div>
  </v-card>
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
        height: 410,
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

<style lang="scss" scoped>
.students-interested-topics-card {
  .topics-card-content {
    .chart {
      margin: {
        bottom: -20px;
        top: -8px;
      }
    }
  }
}
</style>
