<template>
  <v-row>
    <v-col cols="12" lg="6">
      <TopSellingProducts />
    </v-col>
    <v-col cols="12" lg="6">
      <RecentOrders />
    </v-col>
    <v-col cols="12" lg="4">
      <TopPerformers />
    </v-col>
    <v-col cols="12" lg="8">
      <RecentLeads />
    </v-col>
    <v-col cols="12" lg="12">
      <AllProjects />
    </v-col>
    <v-col cols="12" lg="4">
      <MyTasks />
    </v-col>
    <v-col cols="12" lg="4">
      <StudentsProgress />
    </v-col>
    <v-col cols="12" lg="4">
      <GroupLessons />
    </v-col>
    <v-col cols="12" lg="12">
      <PerformanceOfAgents />
    </v-col>
    <v-col cols="12" lg="5">
      <RecentCustomerRatings />
    </v-col>
    <v-col cols="12" lg="7">
      <ToDoList />
    </v-col>
  </v-row>
</template>

<script>
import TopSellingProducts from "./TopSellingProducts.vue";
import RecentOrders from "./RecentOrders.vue";
import TopPerformers from "./TopPerformers.vue";
import RecentLeads from "./RecentLeads.vue";
import AllProjects from "./AllProjects.vue";
import MyTasks from "./MyTasks.vue";
import StudentsProgress from "./StudentsProgress.vue";
import GroupLessons from "./GroupLessons.vue";
import PerformanceOfAgents from "./PerformanceOfAgents.vue";
import RecentCustomerRatings from "./RecentCustomerRatings.vue";
import ToDoList from "./ToDoList.vue";

export default {
  name: "BasicTable",
  components: {
    TopSellingProducts,
    RecentOrders,
    TopPerformers,
    RecentLeads,
    AllProjects,
    MyTasks,
    StudentsProgress,
    GroupLessons,
    PerformanceOfAgents,
    RecentCustomerRatings,
    ToDoList,
  },
};
</script>
