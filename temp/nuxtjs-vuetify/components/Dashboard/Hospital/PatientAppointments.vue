<template>
  <v-card
    class="patient-appointments-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Patient Appointments</h5>
      <div class="date-list">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius me-3"
            >
              Oct 01 - Oct 31, 2024
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Sep 01 - Sep 30, 2024
            </button>
            <button type="button" class="bg-transparent border-none">
              Aug 01 - Aug 31, 2024
            </button>
            <button type="button" class="bg-transparent border-none">
              Jul 01 - Jul 31, 2024
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="trezo-table-content">
      <div class="trezo-table">
        <v-table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Assigned</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.slice(0, 5)" :key="item.id">
              <td class="fw-medium">
                {{ item.patient_name }}
              </td>
              <td class="text-body fw-medium">
                {{ item.date }}
              </td>
              <td class="text-body fw-medium">
                {{ item.time }}
              </td>
              <td>
                <div class="customer-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <img
                      :src="item.assigned.image"
                      class="rounded-circle"
                      alt="user-image"
                    />
                  </div>
                  <span class="d-block fw-medium">
                    {{ item.assigned.name }}
                  </span>
                </div>
              </td>
              <td class="text-body fw-medium">
                {{ item.department }}
              </td>
              <td>
                <span
                  class="trezo-status-badge shipped"
                  v-if="item.status.confirmed"
                >
                  Confirmed
                </span>
                <span
                  class="trezo-status-badge rescheduled"
                  v-if="item.status.rescheduled"
                >
                  Rescheduled
                </span>
                <span
                  class="trezo-status-badge rejected"
                  v-if="item.status.cancelled"
                >
                  Cancelled
                </span>
                <span
                  class="trezo-status-badge pPending"
                  v-if="item.status.pending"
                >
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <CommonPaginationTwo items="7" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/users/user11.jpg";
import image2 from "~/assets/images/users/user32.jpg";
import image3 from "~/assets/images/users/user33.jpg";
import image4 from "~/assets/images/users/user34.jpg";
import image5 from "~/assets/images/users/user35.jpg";

export default defineComponent({
  name: "PatientAppointments",
  data() {
    return {
      items: [
        {
          id: 1,
          patient_name: "John Doe",
          date: "Sep 12, 2024",
          time: "10:30 AM",
          assigned: {
            image: image1,
            name: "Dr. Sarah",
          },
          department: "Cardiology",
          status: {
            confirmed: true,
            rescheduled: false,
            cancelled: false,
            pending: false,
          },
        },
        {
          id: 2,
          patient_name: "Jane Smith",
          date: "Sep 11, 2024",
          time: "11:00 AM",
          assigned: {
            image: image2,
            name: "Dr. Mark",
          },
          department: "Pediatrics",
          status: {
            confirmed: false,
            rescheduled: true,
            cancelled: false,
            pending: false,
          },
        },
        {
          id: 3,
          patient_name: "Robert Clark",
          date: "Sep 10, 2024",
          time: "1:00 PM",
          assigned: {
            image: image3,
            name: "Dr. Emily",
          },
          department: "Orthopedics",
          status: {
            confirmed: false,
            rescheduled: false,
            cancelled: true,
            pending: false,
          },
        },
        {
          id: 4,
          patient_name: "Linda Green",
          date: "Sep 09, 2024",
          time: "9:30 AM",
          assigned: {
            image: image4,
            name: "Dr. Adam",
          },
          department: "Dermatology",
          status: {
            confirmed: true,
            rescheduled: false,
            cancelled: false,
            pending: false,
          },
        },
        {
          id: 5,
          patient_name: "Michael White",
          date: "Sep 08, 2024",
          time: "2:00 PM",
          assigned: {
            image: image5,
            name: "Dr. Rebecca",
          },
          department: "Surgery",
          status: {
            confirmed: false,
            rescheduled: false,
            cancelled: false,
            pending: true,
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.patient-appointments-card {
  .trezo-table-content {
    .trezo-table {
      table {
        thead {
          tr {
            background-color: transparent !important;
            th {
              font-size: 12px;
              text-align: end !important;
              color: var(--bodyColor);
              background-color: transparent !important;
              padding: {
                top: 0 !important;
                left: 14px !important;
                bottom: 8px !important;
                right: 14px !important;
              }
              &:first-child {
                text-align: start !important;
                padding-left: 0 !important;
              }
              &:nth-child(4) {
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              text-align: end !important;
              padding: 5.4px 14px !important;
              border: {
                left-width: 0 !important;
                right-width: 0 !important;
              }
              .customer-info {
                .img {
                  img {
                    margin-bottom: -3px;
                    width: 34px;
                  }
                }
                span {
                  margin-left: 8px;
                }
              }
              &:first-child {
                text-align: start !important;
                padding-left: 0 !important;
              }
              &:nth-child(4) {
                text-align: start !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
      }
    }
  }
}
.v-card.trezo-card {
  .v-card-header {
    .card-header-menu {
      padding: 4px 38px 4px 19px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .patient-appointments-card {
    .v-card-header {
      display: block;

      h5 {
        margin-bottom: 12px !important;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .patient-appointments-card {
    .v-card-header {
      display: flex;

      h5 {
        margin-bottom: 0;
      }
    }
  }
}
</style>
