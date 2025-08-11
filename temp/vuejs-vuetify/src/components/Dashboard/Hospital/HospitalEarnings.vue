<template>
  <v-card
    class="hospital-earnings-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Hospital Earnings</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu border-none p-0 d-inline-block border-radius"
          >
            This Week
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
    <div class="hospital-earnings-card-content">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <div class="image text-center">
            <v-img
              src="@/assets/images/hospital.png"
              alt="hospital-image"
              class="justify-content-center"
            />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="content">
            <div class="row">
              <div class="col-sm-6">
                <div class="box bg-white border-radius">
                  <h3 class="fw-medium">$120,000</h3>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-body"> Total Profit </span>
                    <span
                      class="info-badge text-danger fw-medium position-relative"
                    >
                      <i class="ri-arrow-down-fill"></i>
                      5%
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="box bg-white border-radius">
                  <h3 class="fw-medium">$80,000</h3>
                  <div class="d-flex align-items-center">
                    <span class="d-block text-body"> Total Costs </span>
                    <span
                      class="info-badge text-success fw-medium position-relative"
                    >
                      <i class="ri-arrow-up-fill"></i>
                      3%
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="item bg-white border-radius position-relative">
                  <h3 class="fw-medium">
                    $900,000
                    <span class="text-success position-relative">
                      <i class="ri-arrow-up-fill"></i>
                      12%
                    </span>
                  </h3>
                  <span class="d-block text-body"> Total Earnings </span>
                  <div class="chart">
                    <apexchart
                      v-if="isClient"
                      type="area"
                      height="95"
                      :options="hospitalEarnings"
                      :series="earnings"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "HospitalEarnings",
  setup() {
    const isClient = ref(false);
    const earnings = ref([
      {
        name: "Earnings",
        data: [3, 7, 7, 10, 9, 11, 20],
      },
    ]);
    const hospitalEarnings = ref({
      chart: {
        type: "area",
        height: 95,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#3584FC"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        borderColor: "#ECEEF2",
      },
      stroke: {
        curve: "straight",
        width: 1,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        labels: {
          show: false,
          style: {
            colors: "#8695AA",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        // tickAmount: 6,
        show: false,
        // max: 150,
        // min: 0,
        labels: {
          formatter: (val: any) => {
            return "$" + val + "k";
          },
          style: {
            colors: "#64748B",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
          color: "#ECEEF2",
        },
        axisTicks: {
          show: false,
          color: "#ECEEF2",
        },
      },
      legend: {
        show: false,
        position: "top",
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
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      earnings,
      hospitalEarnings,
    };
  },
});
</script>

<style lang="scss" scoped>
.hospital-earnings-card {
  background-color: #fff5ed !important;

  .hospital-earnings-card-content {
    .image {
      margin: {
        top: 8.5px;
        right: -8px;
        bottom: 8.5px;
      }
    }
    .content {
      padding-left: 15px;

      .box {
        padding: 17.5px 25px;
        margin-bottom: 25px;

        h3 {
          font-size: 24px;
          margin-bottom: 5px;
        }
        .info-badge {
          padding-left: 15px;
          margin-left: 8px;
          font-size: 12px;

          i {
            left: 0;
            top: 50%;
            font-size: 14px;
            position: absolute;
            transform: translateY(-50%);
          }
        }
      }
      .item {
        padding: 25px;
        margin-bottom: 15px;

        h3 {
          font-size: 24px;
          margin-bottom: 5px;

          span {
            padding-left: 15px;
            font-size: 12px;
            top: -4px;

            i {
              left: 0;
              top: 50%;
              font-size: 14px;
              position: absolute;
              transform: translateY(-50%);
            }
          }
        }
        &::before {
          left: 0;
          right: 0;
          content: "";
          height: 15px;
          bottom: -15px;
          opacity: 0.65;
          position: absolute;
          border-radius: 0 0 7px 7px;
          background: var(--whiteColor);
          margin: {
            left: 25px;
            right: 25px;
          }
        }
        .chart {
          top: 50%;
          right: 20px;
          margin-top: 5px;
          max-width: 150px;
          position: absolute;
          transform: translateY(-50%);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .hospital-earnings-card {
    .hospital-earnings-card-content {
      .image {
        margin: {
          top: 0;
          right: 0;
          bottom: 17px;
        }
      }
      .content {
        padding-left: 0;

        .box {
          padding: 15px 17px;
          margin-bottom: 15px;

          h3 {
            font-size: 20px;
          }
        }
        .item {
          padding: 15px 17px;

          h3 {
            font-size: 20px;
          }
          &::before {
            margin: {
              left: 17px;
              right: 17px;
            }
          }
          .chart {
            right: 10px;
            max-width: 120px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .hospital-earnings-card {
    .hospital-earnings-card-content {
      .image {
        margin: {
          bottom: 20px;
        }
      }
      .content {
        .box {
          padding: {
            left: 20px;
            right: 20px;
          }
        }
        .item {
          padding: {
            left: 20px;
            right: 20px;
          }
          .chart {
            right: 15px;
          }
        }
      }
    }
  }
}
</style>
