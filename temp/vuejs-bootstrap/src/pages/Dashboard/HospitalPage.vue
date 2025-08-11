<template>
  <div class="main-content-container overflow-hidden">
    <div class="row">
      <div class="col-lg-5">
        <YourScheduleToday />
        <div class="row">
          <div class="col-sm-6">
            <OverallVisitorsChart />
          </div>
          <div class="col-sm-6">
            <PatientsChart />
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <PatientAdmissionsDischargesChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-xxl-5">
        <EmergencyRoomVisitsChart />
      </div>
      <div class="col-lg-6 col-xxl-2">
        <CriticalPatientsChart />
      </div>
      <div class="col-lg-12 col-xxl-5">
        <BedOccupancyRateChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-xl-8 col-md-6">
        <PatientAppointments />
      </div>
      <div class="col-lg-5 col-xl-4 col-md-6">
        <ScheduleAppointment />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <PatientByAgeChart />
      </div>
      <div class="col-xl-8">
        <HospitalEarnings />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YourScheduleToday from "../../components/Dashboard/Hospital/YourScheduleToday.vue";
import OverallVisitorsChart from "../../components/Dashboard/Hospital/OverallVisitorsChart.vue";
import PatientsChart from "../../components/Dashboard/Hospital/PatientsChart.vue";
import PatientAdmissionsDischargesChart from "../../components/Dashboard/Hospital/PatientAdmissionsDischargesChart.vue";
import EmergencyRoomVisitsChart from "../../components/Dashboard/Hospital/EmergencyRoomVisitsChart.vue";
import CriticalPatientsChart from "../../components/Dashboard/Hospital/CriticalPatientsChart.vue";
import BedOccupancyRateChart from "../../components/Dashboard/Hospital/BedOccupancyRateChart.vue";
import PatientAppointments from "../../components/Dashboard/Hospital/PatientAppointments.vue";
import ScheduleAppointment from "../../components/Dashboard/Hospital/ScheduleAppointment.vue";
import PatientByAgeChart from "../../components/Dashboard/Hospital/PatientByAgeChart.vue";
import HospitalEarnings from "../../components/Dashboard/Hospital/HospitalEarnings.vue";

export default defineComponent({
  name: "HospitalPage",
  components: {
    YourScheduleToday,
    OverallVisitorsChart,
    PatientsChart,
    PatientAdmissionsDischargesChart,
    EmergencyRoomVisitsChart,
    CriticalPatientsChart,
    BedOccupancyRateChart,
    PatientAppointments,
    ScheduleAppointment,
    PatientByAgeChart,
    HospitalEarnings,
  },
});
</script>
