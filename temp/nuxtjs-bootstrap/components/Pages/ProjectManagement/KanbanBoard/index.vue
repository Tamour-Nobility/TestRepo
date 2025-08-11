<template>
  <div class="row justify-content-center">
    <div class="col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 kanban-for-dark">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="mb-0 fs-16 fw-medium">To Do</h4>
            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                >
                  more_horiz
                </i>
              </button>

              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            v-for="item in toDo"
            :key="item.id"
            class="rounded-3 mb-4"
            :style="{
              background: item.bgClass,
            }"
            style="padding: 20px"
          >
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="mb-0 fs-14 fw-semibold">
                {{ item.title }}
              </h4>
              <button
                class="material-symbols-outlined fs-20 text-body hover border-0 p-0 bg-transparent"
              >
                edit
              </button>
            </div>
            <p>
              {{ item.description }}
            </p>
            <div class="d-flex align-items-center justify-content-between pt-1">
              <div class="d-flex">
                <NuxtLink
                  to="/my-profile"
                  v-for="user in item.users"
                  :key="user.id"
                  :class="user.class"
                >
                  <img
                    :src="user.image"
                    class="wh-34 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                </NuxtLink>
              </div>
              <span class="text-primary">5 days left</span>
            </div>
          </div>

          <button
            class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            data-bs-toggle="offcanvas"
            data-bs-target="#addNewCardModal"
            aria-controls="addNewCardModal"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
              <span>Add New Card</span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 kanban-for-dark">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="mb-0 fs-16 fw-medium">Doing</h4>
            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                >
                  more_horiz
                </i>
              </button>

              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            v-for="item in doing"
            :key="item.id"
            class="rounded-3 mb-4"
            :style="{
              background: item.bgClass,
            }"
            style="padding: 20px"
          >
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="mb-0 fs-14 fw-semibold">
                {{ item.title }}
              </h4>
              <button
                class="material-symbols-outlined fs-20 text-body hover border-0 p-0 bg-transparent"
              >
                edit
              </button>
            </div>
            <p>
              {{ item.description }}
            </p>
            <div class="d-flex align-items-center justify-content-between pt-1">
              <div class="d-flex">
                <NuxtLink
                  to="/my-profile"
                  v-for="user in item.users"
                  :key="user.id"
                  :class="user.class"
                >
                  <img
                    :src="user.image"
                    class="wh-34 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                </NuxtLink>
              </div>
              <span class="text-primary">3 days left</span>
            </div>
          </div>

          <button
            class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            data-bs-toggle="offcanvas"
            data-bs-target="#addNewCardModal"
            aria-controls="addNewCardModal"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
              <span>Add New Card</span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-sm-6">
      <div class="card bg-white border-0 rounded-3 mb-4 kanban-for-dark">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="mb-0 fs-16 fw-medium">Done</h4>
            <div
              class="dropdown action-opt ms-2 position-relative top-3"
              v-b-tooltip.hover.top="'More_Option'"
            >
              <button
                class="p-0 border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="material-symbols-outlined fs-20 fw-bold text-body hover"
                >
                  more_horiz
                </i>
              </button>

              <ul
                class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
              >
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EyeIcon class="eye"></EyeIcon>
                    View All
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <EditIcon class="edit"></EditIcon>
                    Edit
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <Trash2Icon class="trash-2"></Trash2Icon>
                    Delete One
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="javascript:void(0);">
                    <LockIcon class="lock"></LockIcon>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            v-for="item in done"
            :key="item.id"
            class="rounded-3 mb-4"
            :style="{
              background: item.bgClass,
            }"
            style="padding: 20px"
          >
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="mb-0 fs-14 fw-semibold">
                {{ item.title }}
              </h4>
              <button
                class="material-symbols-outlined fs-20 text-body hover border-0 p-0 bg-transparent"
              >
                edit
              </button>
            </div>
            <p>
              {{ item.description }}
            </p>
            <div class="d-flex align-items-center justify-content-between pt-1">
              <div class="d-flex">
                <NuxtLink
                  to="/my-profile"
                  v-for="user in item.users"
                  :key="user.id"
                  :class="user.class"
                >
                  <img
                    :src="user.image"
                    class="wh-34 rounded-circle border border-2 border-color-white"
                    alt="user"
                  />
                </NuxtLink>
              </div>
              <span class="text-primary">3 days left</span>
            </div>
          </div>

          <button
            class="btn btn-outline-primary py-1 px-2 px-sm-4 fs-14 fw-medium rounded-3 hover-bg"
            data-bs-toggle="offcanvas"
            data-bs-target="#addNewCardModal"
            aria-controls="addNewCardModal"
          >
            <span class="py-sm-1 d-block">
              <i class="ri-add-line d-none d-sm-inline-block me-1"></i>
              <span>Add New Card</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/images/user-6.jpg";
import image2 from "~/assets/images/user-7.jpg";
import image3 from "~/assets/images/user-8.jpg";
import image4 from "~/assets/images/user-9.jpg";
import image5 from "~/assets/images/user-10.jpg";
import image6 from "~/assets/images/user-11.jpg";
import image7 from "~/assets/images/user-12.jpg";
import image8 from "~/assets/images/user-13.jpg";
import image9 from "~/assets/images/user-14.jpg";
import image10 from "~/assets/images/user-15.jpg";
import image11 from "~/assets/images/user-16.jpg";
import image12 from "~/assets/images/user-17.jpg";
import image13 from "~/assets/images/user-18.jpg";
import image14 from "~/assets/images/user-19.jpg";
import image15 from "~/assets/images/user-20.jpg";
import image16 from "~/assets/images/user-21.jpg";
import image17 from "~/assets/images/user-22.jpg";
import image18 from "~/assets/images/user-23.jpg";
import image19 from "~/assets/images/user-24.jpg";
import image20 from "~/assets/images/user-25.jpg";
import image21 from "~/assets/images/user-26.jpg";
import image22 from "~/assets/images/user-27.jpg";
import image23 from "~/assets/images/user-28.jpg";
import image24 from "~/assets/images/user-29.jpg";
import image25 from "~/assets/images/user-30.jpg";

export default defineComponent({
  name: "KanbanBoard",
  data() {
    return {
      toDo: [
        {
          id: 1,
          title: `Project Requirements`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `5 days left`,
          bgClass: `#F3E8FF`,
          users: [
            {
              id: 1,
              image: image1,
              class: "",
            },
            {
              id: 2,
              image: image2,
              class: "ms-m-15",
            },
            {
              id: 3,
              image: image3,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 2,
          title: `WordPress Theme`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `7 days left`,
          bgClass: `#DAEBFF`,
          users: [
            {
              id: 1,
              image: image4,
              class: "",
            },
            {
              id: 2,
              image: image5,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 3,
          title: `UX/UI Design`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `10 days left`,
          bgClass: `#D8FFC8`,
          users: [
            {
              id: 1,
              image: image6,
              class: "",
            },
            {
              id: 2,
              image: image7,
              class: "ms-m-15",
            },
            {
              id: 3,
              image: image8,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 4,
          title: `Project Analysis`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `14 days left`,
          bgClass: `#FFE8D4`,
          users: [
            {
              id: 1,
              image: image9,
              class: "",
            },
            {
              id: 2,
              image: image10,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 5,
          title: `Competitor Research `,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `15 days left`,
          bgClass: `#DDE4FF`,
          users: [
            {
              id: 1,
              image: image11,
              class: "",
            },
            {
              id: 2,
              image: image12,
              class: "ms-m-15",
            },
          ],
        },
      ],
      doing: [
        {
          id: 1,
          title: `React Template`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `3 days left`,
          bgClass: `#FFE8D4`,
          users: [
            {
              id: 1,
              image: image13,
              class: "",
            },
            {
              id: 2,
              image: image14,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 2,
          title: `Laravel Project`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `5 days left`,
          bgClass: `#F3E8FF`,
          users: [
            {
              id: 1,
              image: image15,
              class: "",
            },
            {
              id: 2,
              image: image16,
              class: "ms-m-15",
            },
            {
              id: 3,
              image: image17,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 3,
          title: `Project Requirements`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `7 days left`,
          bgClass: `#FFE1DD`,
          users: [
            {
              id: 1,
              image: image18,
              class: "",
            },
          ],
        },
        {
          id: 4,
          title: `UX/UI Design`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `9 days left`,
          bgClass: `#D8FFC8`,
          users: [
            {
              id: 1,
              image: image19,
              class: "",
            },
            {
              id: 2,
              image: image20,
              class: "ms-m-15",
            },
          ],
        },
      ],
      done: [
        {
          id: 1,
          title: `Admin Template`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `3 days left`,
          bgClass: `#DDE4FF`,
          users: [
            {
              id: 1,
              image: image21,
              class: "",
            },
            {
              id: 2,
              image: image22,
              class: "ms-m-15",
            },
            {
              id: 3,
              image: image23,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 2,
          title: `eCommerce Template`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `7 days left`,
          bgClass: `#F3E8FF`,
          users: [
            {
              id: 1,
              image: image24,
              class: "",
            },
            {
              id: 2,
              image: image25,
              class: "ms-m-15",
            },
          ],
        },
        {
          id: 3,
          title: `Shopify Theme`,
          description: `A brief description of the project, its objectives, and its importance to the organization.`,
          daysLeft: `10 days left`,
          bgClass: `#D8FFC8`,
          users: [
            {
              id: 1,
              image: image6,
              class: "",
            },
            {
              id: 2,
              image: image7,
              class: "ms-m-15",
            },
            {
              id: 3,
              image: image8,
              class: "ms-m-15",
            },
          ],
        },
      ],
    };
  },
});
</script>
