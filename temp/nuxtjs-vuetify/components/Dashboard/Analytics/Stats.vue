<template>
  <v-card
    class="analytics-stats-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="stats-card-content">
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <div class="item position-relative">
            <div class="title">
              <span class="d-block"> Website Visits </span>
              <h5 class="mb-0">215.2k</h5>
            </div>
            <div class="chart">
              <DashboardAnalyticsWebsiteVisitsChart />
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="info-badge d-inline-block"> +10% Increase </span>
              <span class="days d-block"> Last 7 days </span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item position-relative">
            <div class="title">
              <span class="d-block"> New Registers </span>
              <h5 class="mb-0">35.3k</h5>
            </div>
            <div class="chart">
              <DashboardAnalyticsNewRegistersChart />
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="info-badge d-inline-block"> +15% Increase </span>
              <span class="days d-block"> Last 7 days </span>
            </div>
          </div>
        </div>
      </div>
      <div class="shape">
        <img src="~/assets/images/spring-fat.png" alt="spring-fat" />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stats",
});
</script>

<style lang="scss" scoped>
.analytics-stats-card {
  .stats-card-content {
    .item {
      .title {
        margin-bottom: 16px;

        span {
          color: var(--bodyColor);
          line-height: 1.5;
        }
        h5 {
          margin-top: 5px;
          font-size: 20px;
        }
      }
      .chart {
        top: -30px;
        right: -10px;
        max-width: 120px;
        position: absolute;
      }
      .info-badge {
        font-size: 12px;
        color: #1e8308;
        padding: 0 9px;
        border-radius: 100px;
        border: 1px solid #82fc5a;
        background-color: #d8ffc8;

        &.down {
          border-color: #ffcea9;
          color: var(--dangerColor);
          background-color: #ffe1dd;
        }
      }
      .days {
        font-size: 12px;
      }
      &::before {
        top: 0;
        bottom: 0;
        content: "";
        right: -27px;
        position: absolute;
        border-right: 1px solid var(--borderColor);
      }
    }
    .col-lg-4 {
      &:nth-child(2) {
        .item {
          margin-right: -25px;
          padding-left: 25px;

          &::before {
            display: none;
          }
        }
      }
    }
    .shape {
      right: 0;
      top: 50%;
      position: absolute;
      transform: translateY(-50%);

      img {
        margin-bottom: -3px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .analytics-stats-card {
    .stats-card-content {
      .item {
        margin-bottom: 17px;
        padding-bottom: 17px;
        border-bottom: 1px solid var(--borderColor);

        .title {
          margin-bottom: 13px;

          span {
          }

          h5 {
            font-size: 17px;
          }
        }
        .info-badge {
          padding: 1px 8px;
        }
        &::before {
          display: none;
        }
      }
      .col-lg-4 {
        &:nth-child(2) {
          .item {
            margin-right: 0;
            padding-left: 0;
          }
        }
        &:last-child {
          .item {
            border-bottom-width: 0;
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
      }
      .shape {
        display: none;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .analytics-stats-card {
    .stats-card-content {
      .item {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom-width: 0;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .analytics-stats-card {
    .stats-card-content {
      .item {
        .title {
          h5 {
            font-size: 19px;
          }
        }
      }
      .shape {
        display: none;
      }
    }
  }
}
</style>
