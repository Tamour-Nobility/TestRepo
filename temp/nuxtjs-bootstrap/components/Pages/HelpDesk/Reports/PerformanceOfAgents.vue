<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-0">
      <div class="p-4">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <h3 class="mb-0">Performance of Agents</h3>
          <select
            class="form-select month-select form-control p-0 h-auto border-0 w-110"
            style="background-position: right 0 center"
            aria-label="Default select example"
          >
            <option selected>Last 30 Days</option>
            <option value="1">Last 60 Days</option>
            <option value="2">Last 90 Days</option>
          </select>
        </div>
      </div>

      <div class="default-table-area style-two all-projects">
        <div class="table-responsive">
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Agent Name</th>
                <th scope="col">Total Tickets</th>
                <th scope="col">Open Tickets</th>
                <th scope="col">Resolved Tickets</th>
                <th scope="col">Avg. Resolution Time</th>
                <th scope="col">Satisfaction Rate</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items.slice(0, 6)" :key="item.id">
                <td class="text-body">{{ item.id }}</td>
                <td>
                  <NuxtLink
                    to="/help-desk/agents"
                    class="d-flex align-items-center"
                  >
                    <div class="flex-shrink-0">
                      <img
                        :src="item.agentName.image"
                        class="wh-34 rounded-circle"
                        alt="user"
                      />
                    </div>
                    <div class="flex-grow-1 ms-2 position-relative top-1">
                      <h6 class="mb-0 fs-14 fw-medium">
                        {{ item.agentName.name }}
                      </h6>
                    </div>
                  </NuxtLink>
                </td>
                <td class="text-body">
                  {{ item.totalTickets }}
                </td>
                <td class="text-body">
                  {{ item.openTickets }}
                </td>
                <td class="text-body">
                  {{ item.resolvedTickets }}
                </td>
                <td class="text-body">
                  {{ item.avgResolutionTime }}
                </td>
                <td>
                  <div
                    :style="{
                      position: 'relative',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: item.satisfactionRate.bgGradient,
                    }"
                  >
                    <div
                      style="
                        position: absolute;
                        width: 80%;
                        height: 80%;
                        background-color: #ffffff;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <p class="text-body fw-semibold" style="font-size: 12px">
                        {{ item.satisfactionRate.percentage }}%
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center gap-1">
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-primary">
                        {{ item.action.view }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-body">
                        {{ item.action.edit }}
                      </i>
                    </button>
                    <button
                      class="ps-0 border-0 bg-transparent lh-1 position-relative top-2"
                    >
                      <i class="material-symbols-outlined fs-16 text-danger">
                        {{ item.action.delete }}
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="p-4 pt-lg-4">
          <CommonPaginationTwo items="6" :total="items.length" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/user-12.jpg";
import image2 from "~/assets/images/user-13.jpg";
import image3 from "~/assets/images/user-14.jpg";
import image4 from "~/assets/images/user-15.jpg";
import image5 from "~/assets/images/user-16.jpg";
import image6 from "~/assets/images/user-17.jpg";

export default defineComponent({
  name: "PerformanceOfAgents",
  data() {
    return {
      items: [
        {
          id: "#854",
          agentName: {
            image: image1,
            name: "Oliver Khan",
          },
          totalTickets: 230,
          openTickets: 20,
          resolvedTickets: 75,
          avgResolutionTime: "2.5 hours",
          satisfactionRate: {
            percentage: 80,
            bgGradient: "conic-gradient(#605dff 80%, #eceef2 80%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#853",
          agentName: {
            image: image2,
            name: "Ava Cooper",
          },
          totalTickets: 180,
          openTickets: 16,
          resolvedTickets: 35,
          avgResolutionTime: "1.4 hours",
          satisfactionRate: {
            percentage: 75,
            bgGradient: "conic-gradient(#AD63F6 75%, #ECEEF2 75%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#852",
          agentName: {
            image: image3,
            name: "Isabella Evans",
          },
          totalTickets: 150,
          openTickets: 35,
          resolvedTickets: 45,
          avgResolutionTime: "3.2 hours",
          satisfactionRate: {
            percentage: 80,
            bgGradient: "conic-gradient(#37D80A 80%, #ECEEF2 80%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#851",
          agentName: {
            image: image4,
            name: "Mia Hughes",
          },
          totalTickets: 75,
          openTickets: 86,
          resolvedTickets: 25,
          avgResolutionTime: "4.5 hours",
          satisfactionRate: {
            percentage: 100,
            bgGradient: "conic-gradient(#3584FC 100%, #ECEEF2 100%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#850",
          agentName: {
            image: image5,
            name: "Noah Mitchell",
          },
          totalTickets: 320,
          openTickets: 90,
          resolvedTickets: 10,
          avgResolutionTime: "3.8 hours",
          satisfactionRate: {
            percentage: 80,
            bgGradient: "conic-gradient(#FD5812 80%, #ECEEF2 80%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#849",
          agentName: {
            image: image6,
            name: "Sophia Carter",
          },
          totalTickets: 120,
          openTickets: 55,
          resolvedTickets: 20,
          avgResolutionTime: "5.3 hours",
          satisfactionRate: {
            percentage: 60,
            bgGradient: "conic-gradient(#AD63F6 60%, #ECEEF2 60%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#854",
          agentName: {
            image: image1,
            name: "Oliver Khan",
          },
          totalTickets: 230,
          openTickets: 20,
          resolvedTickets: 75,
          avgResolutionTime: "2.5 hours",
          satisfactionRate: {
            percentage: 80,
            bgGradient: "conic-gradient(#605dff 80%, #eceef2 80%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#853",
          agentName: {
            image: image2,
            name: "Ava Cooper",
          },
          totalTickets: 180,
          openTickets: 16,
          resolvedTickets: 35,
          avgResolutionTime: "1.4 hours",
          satisfactionRate: {
            percentage: 75,
            bgGradient: "conic-gradient(#AD63F6 75%, #ECEEF2 75%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#852",
          agentName: {
            image: image3,
            name: "Isabella Evans",
          },
          totalTickets: 150,
          openTickets: 35,
          resolvedTickets: 45,
          avgResolutionTime: "3.2 hours",
          satisfactionRate: {
            percentage: 80,
            bgGradient: "conic-gradient(#37D80A 80%, #ECEEF2 80%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#851",
          agentName: {
            image: image4,
            name: "Mia Hughes",
          },
          totalTickets: 75,
          openTickets: 86,
          resolvedTickets: 25,
          avgResolutionTime: "4.5 hours",
          satisfactionRate: {
            percentage: 100,
            bgGradient: "conic-gradient(#3584FC 100%, #ECEEF2 100%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#850",
          agentName: {
            image: image5,
            name: "Noah Mitchell",
          },
          totalTickets: 320,
          openTickets: 90,
          resolvedTickets: 10,
          avgResolutionTime: "3.8 hours",
          satisfactionRate: {
            percentage: 80,
            bgGradient: "conic-gradient(#FD5812 80%, #ECEEF2 80%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
        {
          id: "#849",
          agentName: {
            image: image6,
            name: "Sophia Carter",
          },
          totalTickets: 120,
          openTickets: 55,
          resolvedTickets: 20,
          avgResolutionTime: "5.3 hours",
          satisfactionRate: {
            percentage: 60,
            bgGradient: "conic-gradient(#AD63F6 60%, #ECEEF2 60%)",
          },
          action: {
            view: "visibility",
            edit: "edit",
            delete: "delete",
          },
        },
      ],
    };
  },
});
</script>
