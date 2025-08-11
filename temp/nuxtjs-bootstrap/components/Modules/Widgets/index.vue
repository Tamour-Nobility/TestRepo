<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsRevenueGrowthChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsLeadConversionChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsTotalOrdersChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsAnnualProfitChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsTicketsResolvedChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsInProgressChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsTicketsDueChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <ModulesWidgetsTicketsNewOpenChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-6">
        <ModulesWidgetsWelcomeBack />
      </div>
      <div class="col-lg-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <ModulesWidgetsTotalCourses />
          </div>
          <div class="col-lg-4 col-sm-4">
            <ModulesWidgetsTotalEnrolled />
          </div>
          <div class="col-lg-4 col-sm-4">
            <ModulesWidgetsTotalMentors />
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <ModulesWidgetsTotalCustomersChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <ModulesWidgetsTotalOrdersChartTwo />
      </div>
      <div class="col-lg-4 col-md-6">
        <ModulesWidgetsTotalRevenueChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-6">
        <ModulesWidgetsProjectsOverview />
      </div>
      <div class="col-xl-6">
        <ModulesWidgetsProjectsRoadmapChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4">
        <ModulesWidgetsCoursesSalesChart />
      </div>
      <div class="col-lg-4">
        <ModulesWidgetsTimeSpentChart />
      </div>
      <div class="col-lg-4">
        <ModulesWidgetsOurTopCourses />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-4 col-lg-4">
        <ModulesWidgetsProjectsAnalysisChart />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <ModulesWidgetsTeamMembers />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <ModulesWidgetsWorkingSchedule />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widgets",
});
</script>
