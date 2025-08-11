<template>
  <div class="main-content-container overflow-hidden">
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
    </div>
    <div class="row">
      <div class="col-lg-6 col-xxl-5">
        <DashboardHospitalEmergencyRoomVisitsChart />
      </div>
      <div class="col-lg-6 col-xxl-2">
        <DashboardHospitalCriticalPatientsChart />
      </div>
      <div class="col-lg-12 col-xxl-5">
        <DashboardHospitalBedOccupancyRateChart />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-xl-8 col-md-6">
        <DashboardHospitalPatientAppointments />
      </div>
      <div class="col-lg-5 col-xl-4 col-md-6">
        <DashboardHospitalScheduleAppointment />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <DashboardHospitalPatientByAgeChart />
      </div>
      <div class="col-xl-8">
        <DashboardHospitalEarnings />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HospitalPage",
});
</script>
