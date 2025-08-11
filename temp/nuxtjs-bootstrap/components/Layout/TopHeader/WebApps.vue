<template>
  <div class="dropdown notifications apps">
    <button
      class="btn btn-secondary border-0 p-0 position-relative"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="material-symbols-outlined">apps</span>
    </button>

    <div class="dropdown-menu dropdown-lg p-0 border-0 py-4 px-3 max-h-312">
      <div
        class="notification-menu d-flex flex-wrap justify-content-between gap-4"
      >
        <a
          href="https://www.figma.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/figma.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Figma</span>
        </a>
        <a
          href="https://www.dribbble.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/dribbble.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Dribbble</span>
        </a>
        <a
          href="https://www.spotify.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/spotify.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Spotify</span>
        </a>
        <a
          href="https://www.github.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/github.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Github</span>
        </a>
        <a
          href="https://www.google.com/drive/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/gdrive.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>GDrive</span>
        </a>
        <a
          href="https://www.trello.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/trello.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Trello</span>
        </a>
        <a
          href="https://www.slak.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/slak.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Slak</span>
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/pinterest.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Pinterest</span>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/facebook.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          class="dropdown-item p-0 text-center"
        >
          <img
            src="~/assets/images/linkedin.svg"
            class="wh-25"
            alt="united-states"
          />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebApps",
};
</script>
