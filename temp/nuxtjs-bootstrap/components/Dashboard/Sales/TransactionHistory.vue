<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3 mb-lg-4"
      >
        <h3 class="mb-0">Transaction History</h3>

        <div class="dropdown action-opt">
          <button
            class="btn bg-transparent p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MoreHorizontalIcon class="more-horizontal"></MoreHorizontalIcon>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
          >
            <li>
              <a class="dropdown-item" href="javascript:;">
                <ClockIcon class="clock"></ClockIcon>
                Today
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <PieChartIcon class="pie-chart"></PieChartIcon>
                Last 7 Days
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <RotateCwIcon class="rotate-cw"></RotateCwIcon>
                Last Month
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <CalendarIcon class="calendar"></CalendarIcon>
                Last 1 Year
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <BarChartIcon class="bar-chart"></BarChartIcon>
                All Time
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <EyeIcon class="eye"></EyeIcon>
                View
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="javascript:;">
                <TrashIcon class="trash"></TrashIcon>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="ps-0 mb-0 list-unstyled">
        <li class="d-flex align-items-center justify-content-between mb-3 pb-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-primary bg-opacity-10 text-primary text-center rounded-circle wh-40 lh-40"
              >
                credit_card
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Master Card</h6>
              <span class="fs-12">23 Dec 2024 - 3:20 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-success">+1,520</span>
        </li>
        <li class="d-flex align-items-center justify-content-between mb-3 pb-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-danger bg-opacity-10 text-danger text-center rounded-circle wh-40 lh-40"
              >
                redeem
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Paypal</h6>
              <span class="fs-12">23 Dec 2024 - 3:20 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-danger">-2,250</span>
        </li>
        <li class="d-flex align-items-center justify-content-between mb-3 pb-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-primary-div bg-opacity-10 text-primary-div text-center rounded-circle wh-40 lh-40"
              >
                account_balance
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Wise</h6>
              <span class="fs-12">23 Dec 2024 - 3:20 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-success">+3,560</span>
        </li>
        <li class="d-flex align-items-center justify-content-between mb-3 pb-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-info bg-opacity-10 text-info text-center rounded-circle wh-40 lh-40"
              >
                currency_ruble
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Payoneer</h6>
              <span class="fs-12">23 Dec 2024 - 3:20 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-success">+6,500</span>
        </li>
        <li class="d-flex align-items-center justify-content-between mb-3 pb-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-success bg-opacity-10 text-success text-center rounded-circle wh-40 lh-40"
              >
                credit_score
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Credit Card</h6>
              <span class="fs-12">23 Dec 2024 - 3:20 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-danger">+4,320</span>
        </li>
        <li class="d-flex align-items-center justify-content-between mb-3 pb-3">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-primary-div bg-opacity-10 text-primary-div text-center rounded-circle wh-40 lh-40"
              >
                account_balance
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Wise</h6>
              <span class="fs-12">16 Dec 2024 - 1:23 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-success">+5,432</span>
        </li>
        <li class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <i
                class="material-symbols-outlined icon-circle bg-danger bg-opacity-10 text-danger text-center rounded-circle wh-40 lh-40"
              >
                redeem
              </i>
            </div>
            <div class="flex-grow-1 ms-2">
              <h6 class="fw-medium fs16 mb-0">Paypal</h6>
              <span class="fs-12">23 Dec 2024 - 3:20 pm</span>
            </div>
          </div>
          <span class="fs-14 fw-medium text-success">+1,820</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransactionHistory",
});
</script>
