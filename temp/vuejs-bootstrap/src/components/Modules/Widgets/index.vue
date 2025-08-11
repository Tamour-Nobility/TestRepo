<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <RevenueGrowthChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <LeadConversionChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <TotalOrdersChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <AnnualProfitChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <TicketsResolvedChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <InProgressChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <TicketsDueChart />
      </div>
      <div class="col-xxl-3 col-xl-6 col-sm-6">
        <TicketsNewOpenChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-6">
        <WelcomeBack />
      </div>
      <div class="col-lg-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-4">
            <TotalCourses />
          </div>
          <div class="col-lg-4 col-sm-4">
            <TotalEnrolled />
          </div>
          <div class="col-lg-4 col-sm-4">
            <TotalMentors />
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <TotalCustomersChart />
      </div>
      <div class="col-lg-4 col-md-6">
        <TotalOrdersChartTwo />
      </div>
      <div class="col-lg-4 col-md-6">
        <TotalRevenueChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xl-6">
        <ProjectsOverview />
      </div>
      <div class="col-xl-6">
        <ProjectsRoadmapChart />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-4">
        <CoursesSalesChart />
      </div>
      <div class="col-lg-4">
        <TimeSpentChart />
      </div>
      <div class="col-lg-4">
        <OurTopCourses />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-xxl-4 col-lg-4">
        <ProjectsAnalysisChart />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <TeamMembers />
      </div>

      <div class="col-xxl-4 col-lg-4">
        <WorkingSchedule />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RevenueGrowthChart from "./RevenueGrowthChart.vue";
import LeadConversionChart from "./LeadConversionChart.vue";
import TotalOrdersChart from "./TotalOrdersChart.vue";
import AnnualProfitChart from "./AnnualProfitChart.vue";
import TicketsResolvedChart from "./TicketsResolvedChart.vue";
import InProgressChart from "./InProgressChart.vue";
import TicketsDueChart from "./TicketsDueChart.vue";
import TicketsNewOpenChart from "./TicketsNewOpenChart.vue";
import WelcomeBack from "./WelcomeBack.vue";
import TotalCourses from "./TotalCourses.vue";
import TotalEnrolled from "./TotalEnrolled.vue";
import TotalMentors from "./TotalMentors.vue";
import TotalCustomersChart from "./TotalCustomersChart.vue";
import TotalOrdersChartTwo from "./TotalOrdersChartTwo.vue";
import TotalRevenueChart from "./TotalRevenueChart.vue";
import ProjectsOverview from "./ProjectsOverview.vue";
import ProjectsRoadmapChart from "./ProjectsRoadmapChart.vue";
import CoursesSalesChart from "./CoursesSalesChart.vue";
import TimeSpentChart from "./TimeSpentChart.vue";
import OurTopCourses from "./OurTopCourses.vue";
import ProjectsAnalysisChart from "./ProjectsAnalysisChart.vue";
import TeamMembers from "./TeamMembers.vue";
import WorkingSchedule from "./WorkingSchedule.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Widgets",
  components: {
    RevenueGrowthChart,
    LeadConversionChart,
    TotalOrdersChart,
    AnnualProfitChart,
    TicketsResolvedChart,
    InProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    WelcomeBack,
    TotalCourses,
    TotalEnrolled,
    TotalMentors,
    TotalCustomersChart,
    TotalOrdersChartTwo,
    TotalRevenueChart,
    ProjectsOverview,
    ProjectsRoadmapChart,
    CoursesSalesChart,
    TimeSpentChart,
    OurTopCourses,
    ProjectsAnalysisChart,
    TeamMembers,
    WorkingSchedule,
  },
});
</script>
