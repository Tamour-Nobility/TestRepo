<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="border-bottom border-primary pb-4 mb-4">
        <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
          <img
            src="~/assets/images/user-6.jpg"
            class="wh-34 rounded-circle"
            alt="user"
          />
          <span class="fw-medium text-primary">Ponsiano</span>
          <span>a day ago</span>
          <span
            class="bg-primary text-white fw-medium px-2 rounded-1 fs-12 position-relative top-2"
          >
            #BD0JL0G6
          </span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <h4 class="fs-15 mb-2 pb-1">Screenshots</h4>
        <img
          src="~/assets/images/screenshorts.jpg"
          class="mw-80 rounded-3"
          alt="screenshorts"
        />
      </div>

      <div class="border-bottom pb-4 mb-4 ps-4">
        <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
          <img
            src="~/assets/images/user-7.jpg"
            class="wh-34 rounded-circle"
            alt="user"
          />
          <span class="fw-medium text-danger">Zelxa</span>
          <span>18 hours ago</span>
          <span
            class="text-white fw-medium px-2 rounded-1 fs-12 position-relative top-2"
            style="background-color: #3584fc"
          >
            Support Staff
          </span>
        </div>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <h4 class="fs-15 mb-2 pb-1">Screenshots</h4>
        <div class="d-flex flex-wrap gap-3">
          <img
            src="~/assets/images/screenshorts-2.jpg"
            class="mw-80 rounded-3"
            alt="screenshorts"
          />
          <img
            src="~/assets/images/screenshorts-3.jpg"
            class="mw-80 rounded-3"
            alt="screenshorts"
          />
        </div>
      </div>

      <div class="border-bottom pb-4 mb-4 ps-4">
        <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
          <img
            src="~/assets/images/user-6.jpg"
            class="wh-34 rounded-circle"
            alt="user"
          />
          <span class="fw-medium text-primary">Ponsiano</span>
          <span>12 hours ago</span>
        </div>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <div class="border-bottom pb-4 mb-4 ps-4">
        <div class="d-flex flex-wrap gap-3 align-items-center mb-3">
          <img
            src="~/assets/images/user-7.jpg"
            class="wh-34 rounded-circle"
            alt="user"
          />
          <span class="fw-medium text-danger">Zelxa</span>
          <span>05 hours ago</span>
          <span
            class="text-white fw-medium px-2 rounded-1 fs-12 position-relative top-2"
            style="background-color: #3584fc"
          >
            Support Staff
          </span>
        </div>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation.
        </p>
      </div>

      <form>
        <div class="form-group mb-4">
          <label class="label text-secondary fs-14">Post A Reply</label>
          <CommonTextEditor />
        </div>
        <div class="form-group d-flex flex-wrap gap-3">
          <button
            type="submit"
            class="btn btn-danger fw-medium fs-16 py-2 px-4"
          >
            <span class="py-1 d-inline-block text-white">Save As Draft</span>
          </button>
          <button
            type="submit"
            class="btn btn-primary fw-medium fs-16 py-2 px-4"
          >
            <div class="d-flex align-items-center">
              <i class="material-symbols-outlined me-2 text-white">send</i>
              <span class="py-1 d-inline-block text-white">Submit Now</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Comments",
});
</script>
