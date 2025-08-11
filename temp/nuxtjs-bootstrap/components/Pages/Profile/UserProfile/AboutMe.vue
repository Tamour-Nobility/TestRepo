<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div
        class="d-flex justify-content-between align-items-center flex-wrap gap-2 border-bottom pb-4 mb-4"
      >
        <h4 class="fs-18 mb-0">About Me</h4>
        <div
          class="dropdown action-opt ms-2 position-relative top-3"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="More Option"
        >
          <button
            class="p-0 border-0 bg-transparent"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="material-symbols-outlined fs-20 fw-bold text-body hover">
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

      <h4 class="fs-16 fw-medium mb-2">Introduction</h4>
      <p class="mb-4" style="max-width: 691px">
        Alice Johnson, a visionary UX/UI designer, blends creativity with
        user-centric design principles to craft seamless digital experiences.
        With a passion for innovation and a knack for understanding user needs,
        [Your Name] has become a driving force in the ever-evolving landscape of
        digital design. This 5000-word biography aims to delve into Alice's
        journey, from humble beginnings to becoming a recognized name in the
        realm of user experience and interface design.
      </p>

      <h4 class="fs-16 fw-medium mb-2">Professional Beginnings</h4>
      <p class="mb-4" style="max-width: 691px">
        Upon graduating, Alice embarked on their professional journey, eager to
        make an impact in the world of design. They initially gained experience
        working at VivoTech, where they collaborated with cross-functional teams
        to deliver user-centric solutions for various clients. This early
        exposure provided invaluable insights into the complexities of design
        processes and solidified Alice's commitment to enhancing user
        experiences.
      </p>

      <h4 class="fs-16 fw-medium mb-2 pb-1">Expertise in UX/UI Design</h4>
      <p style="max-width: 691px">
        Driven by a desire for continuous growth, Alice delved deeper into the
        nuances of UX/UI design, staying abreast of emerging trends,
        technologies, and methodologies. They immersed themselves in user
        research, wireframing, prototyping, and usability testing, refining
        their craft with each project.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>
