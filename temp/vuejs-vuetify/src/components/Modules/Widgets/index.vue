<template>
  <div class="row">
    <div class="col-xxl-3 col-xl-6 col-lg-3 col-sm-6 mb-25">
      <RevenueGrowth />
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-3 col-sm-6 mb-25">
      <LeadConversion />
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-3 col-sm-6 mb-25">
      <TotalOrders />
    </div>
    <div class="col-xxl-3 col-xl-6 col-lg-3 col-sm-6 mb-25">
      <AnnualProfit />
    </div>
    <div class="col-sm-6 col-lg-3 mb-25">
      <TicketsResolvedChart />
    </div>
    <div class="col-sm-6 col-lg-3 mb-25">
      <TicketsInProgressChart />
    </div>
    <div class="col-sm-6 col-lg-3 mb-25">
      <TicketsDueChart />
    </div>
    <div class="col-sm-6 col-lg-3 mb-25">
      <TicketsNewOpenChart />
    </div>
    <div class="col-xxl-6 mb-25">
      <WelcomeBack />
    </div>
    <div class="col-xxl-2 col-sm-4 mb-25">
      <TotalCourses />
    </div>
    <div class="col-xxl-2 col-sm-4 mb-25">
      <TotalEnrolled />
    </div>
    <div class="col-xxl-2 col-sm-4 mb-25">
      <TotalMentors />
    </div>
    <div class="col-md-4 mb-25">
      <TotalCustomersChart />
    </div>
    <div class="col-md-4 mb-25">
      <TotalRevenueChart />
    </div>
    <div class="col-md-4 mb-25">
      <TotalOrdersChart />
    </div>
    <div class="col-xxl-6 mb-25">
      <ProjectsOverview />
    </div>
    <div class="col-xxl-6 mb-25">
      <ProjectsRoadmapChart />
    </div>
    <div class="col-lg-4 mb-25">
      <CoursesSalesChart />
    </div>
    <div class="col-lg-4 mb-25">
      <TimeSpentChart />
    </div>
    <div class="col-lg-4 mb-25">
      <OurTopCourses />
    </div>
    <div class="col-xxl-4 col-xl-12 col-lg-4 mb-25">
      <ProjectsAnalysisChart />
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-md-6 mb-25">
      <TeamMembers />
    </div>
    <div class="col-xxl-4 col-xl-6 col-lg-4 col-md-6 mb-25">
      <LeadsBySourceChart />
    </div>
  </div>
</template>

<script>
import RevenueGrowth from "./RevenueGrowth.vue";
import LeadConversion from "./LeadConversion.vue";
import TotalOrders from "./TotalOrders.vue";
import AnnualProfit from "./AnnualProfit.vue";
import TicketsResolvedChart from "./TicketsResolvedChart.vue";
import TicketsInProgressChart from "./TicketsInProgressChart.vue";
import TicketsDueChart from "./TicketsDueChart.vue";
import TicketsNewOpenChart from "./TicketsNewOpenChart.vue";
import WelcomeBack from "./WelcomeBack.vue";
import TotalCourses from "./TotalCourses.vue";
import TotalEnrolled from "./TotalEnrolled.vue";
import TotalMentors from "./TotalMentors.vue";
import TotalCustomersChart from "./TotalCustomersChart.vue";
import TotalRevenueChart from "./TotalRevenueChart.vue";
import TotalOrdersChart from "./TotalOrdersChart.vue";
import ProjectsOverview from "./ProjectsOverview.vue";
import ProjectsRoadmapChart from "./ProjectsRoadmapChart.vue";
import CoursesSalesChart from "./CoursesSalesChart.vue";
import TimeSpentChart from "./TimeSpentChart.vue";
import OurTopCourses from "./OurTopCourses.vue";
import ProjectsAnalysisChart from "./ProjectsAnalysisChart.vue";
import TeamMembers from "./TeamMembers.vue";
import LeadsBySourceChart from "./LeadsBySourceChart.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Widgets",
  components: {
    RevenueGrowth,
    LeadConversion,
    TotalOrders,
    AnnualProfit,
    TicketsResolvedChart,
    TicketsInProgressChart,
    TicketsDueChart,
    TicketsNewOpenChart,
    WelcomeBack,
    TotalCourses,
    TotalEnrolled,
    TotalMentors,
    TotalCustomersChart,
    TotalRevenueChart,
    TotalOrdersChart,
    ProjectsOverview,
    ProjectsRoadmapChart,
    CoursesSalesChart,
    TimeSpentChart,
    OurTopCourses,
    ProjectsAnalysisChart,
    TeamMembers,
    LeadsBySourceChart,
  },
};
</script>
