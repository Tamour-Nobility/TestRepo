<template>
  <div class="row">
    <div class="col-lg-5">
      <DashboardHospitalYourScheduleToday />

      <div class="row">
        <div class="col-sm-6">
          <DashboardHospitalOverallVisitorsChart />
        </div>
        <div class="col-sm-6">
          <DashboardHospitalPatientsChart />
        </div>
      </div>
    </div>
    <div class="col-lg-7">
      <DashboardHospitalPatientAdmissionsDischargesChart />
    </div>
    <div class="col-xxl-5">
      <DashboardHospitalEmergencyRoomVisitsChart />
    </div>
    <div class="col-xxl-2 col-lg-4">
      <DashboardHospitalCriticalPatientsChart />
    </div>
    <div class="col-xxl-5 col-lg-8">
      <DashboardHospitalBedOccupancyRateChart />
    </div>
    <div class="col-lg-8">
      <DashboardHospitalPatientAppointments />
    </div>
    <div class="col-lg-4">
      <DashboardHospitalScheduleAppointment />
    </div>
    <div class="col-lg-4">
      <DashboardHospitalPatientByAgeChart />
    </div>
    <div class="col-lg-8">
      <DashboardHospitalEarnings />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HospitalPage",
});
</script>
