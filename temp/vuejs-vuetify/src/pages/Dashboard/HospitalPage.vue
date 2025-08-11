<template>
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
    <div class="col-xxl-5">
      <EmergencyRoomVisitsChart />
    </div>
    <div class="col-xxl-2 col-lg-4">
      <CriticalPatientsChart />
    </div>
    <div class="col-xxl-5 col-lg-8">
      <BedOccupancyRateChart />
    </div>
    <div class="col-lg-8">
      <PatientAppointments />
    </div>
    <div class="col-lg-4">
      <ScheduleAppointment />
    </div>
    <div class="col-lg-4">
      <PatientByAgeChart />
    </div>
    <div class="col-lg-8">
      <HospitalEarnings />
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
