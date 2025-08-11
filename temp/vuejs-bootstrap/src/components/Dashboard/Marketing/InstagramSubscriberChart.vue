<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-30"
      >
        <h3 class="mb-0">Instagram Subscriber</h3>
        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i data-feather="more-horizontal"></i>
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="clock"></i>
                Today
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="pie-chart"></i>
                Last 7 Days
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="rotate-cw"></i>
                Last Month
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="calendar"></i>
                Last 1 Year
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="bar-chart"></i>
                All Time
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="eye"></i>
                View
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <i data-feather="trash"></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style="margin: -25px -28px -16px -17px">
        <apexchart
          v-if="isClient"
          type="bar"
          height="389"
          :options="instagramSubscriber"
          :series="subscriber"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import feather from "feather-icons";

export default defineComponent({
  name: "InstagramSubscriberChart",
  setup() {
    const isClient = ref(false);
    const subscriber = ref([
      {
        name: "Gained",
        data: [44, 60, 41, 67, 22, 43, 13, 30, 20, 8],
      },
      {
        name: "Lost",
        data: [13, 30, 20, 8, 13, 27, 44, 60, 41, 67],
      },
    ]);
    const instagramSubscriber = ref({
      chart: {
        type: "bar",
        height: 389,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false,
          columnWidth: "28px",
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#605DFF", "#9CAAFF", "#DDE4FF"],
      xaxis: {
        categories: [
          "Oct 01",
          "Oct 02",
          "Oct 03",
          "Oct 04",
          "Oct 05",
          "Oct 06",
          "Oct 07",
          "Oct 07",
          "Oct 08",
          "Oct 09",
        ],
        axisTicks: {
          show: false,
          color: "#8695AA",
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
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
        tickAmount: 5,
        max: 125,
        min: 0,
        labels: {
          formatter: (val: string) => {
            return "" + val + "K";
          },
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: true,
          color: "#D5D9E2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "12px",
        horizontalAlign: "left",
        itemMargin: {
          horizontal: 8,
          vertical: 0,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      fill: {
        opacity: 1,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: "#ECF0FF",
      },
    });

    onMounted(() => {
      isClient.value = true;
      feather.replace();
    });

    return {
      isClient,
      subscriber,
      instagramSubscriber,
    };
  },
});
</script>
