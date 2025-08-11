<template>
  <v-row>
    <v-col cols="12" xxl="6" lg="6">
      <DashboardLMSWelcomeDashboard />
    </v-col>
    <v-col cols="12" xxl="2" lg="2" md="4" sm="6">
      <DashboardLMSTotalCourses />
    </v-col>
    <v-col cols="12" xxl="2" lg="2" md="4" sm="6">
      <DashboardLMSTotalEnrolled />
    </v-col>
    <v-col cols="12" xxl="2" lg="2" md="4" sm="6">
      <DashboardLMSTotalMentors />
    </v-col>
    <v-col cols="12" lg="7">
      <DashboardLMSStudentsInterestedTopicsChart />
    </v-col>
    <v-col cols="12" lg="5">
      <DashboardLMSTopInstructors />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardLMSStudentsProgress />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <DashboardLMSGroupLessons />
    </v-col>
    <v-col cols="12" lg="4" md="6">
      <DashboardLMSEnrolledByCountries />
    </v-col>
    <v-col cols="12" lg="12">
      <DashboardLMSCourses />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardLMSCoursesSalesChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardLMSTimeSpentChart />
    </v-col>
    <v-col cols="12" lg="4">
      <DashboardLMSOurTopCourses />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LMSPage",
});
</script>
