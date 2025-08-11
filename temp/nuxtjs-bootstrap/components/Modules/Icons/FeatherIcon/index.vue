<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4 text-center">
      <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode">
&lt;i data-feather="circle"&gt;&lt;/i&gt;
</code>
</pre>
    </div>
  </div>

  <div class="row">
    <div
      class="col-lg-2 col-sm-6 col-md-3"
      v-for="icon in icons"
      :key="icon.name"
    >
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4 text-center">
          <i :data-feather="icon.name"></i>
          <span class="d-block mt-4">{{ icon.label }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-12 text-center mb-4">
    <a
      href="https://feathericons.com/"
      target="_blank"
      class="btn btn-primary py-2 px-4 text-decoration-none rounded-pill"
    >
      <span class="d-inline-block py-1">View All Icons</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import feather from "feather-icons";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "FeatherIcon",
  setup() {
    const icons = [
      { name: "activity", label: "activity" },
      { name: "airplay", label: "airplay" },
      { name: "alert-circle", label: "alert-circle" },
      { name: "alert-octagon", label: "alert-octagon" },
      { name: "alert-triangle", label: "alert-triangle" },
      { name: "align-center", label: "align-center" },
      { name: "align-justify", label: "align-justify" },
      { name: "align-left", label: "align-left" },
      { name: "align-right", label: "align-right" },
      { name: "anchor", label: "anchor" },
      { name: "aperture", label: "aperture" },
      { name: "arrow-down-circle", label: "arrow-down-circle" },
      { name: "arrow-down-left", label: "arrow-down-left" },
      { name: "arrow-down-right", label: "arrow-down-right" },
      { name: "arrow-down", label: "arrow-down" },
      { name: "arrow-left-circle", label: "arrow-left-circle" },
      { name: "arrow-left", label: "arrow-left" },
      { name: "bar-chart", label: "bar-chart" },
      { name: "battery-charging", label: "battery-charging" },
      { name: "battery", label: "battery" },
      { name: "bell-off", label: "bell-off" },
      { name: "bell", label: "bell" },
      { name: "bluetooth", label: "bluetooth" },
      { name: "bold", label: "bold" },
      { name: "book-open", label: "book-open" },
      { name: "book", label: "book" },
      { name: "bookmark", label: "bookmark" },
      { name: "box", label: "box" },
      { name: "briefcase", label: "briefcase" },
      { name: "calendar", label: "calendar" },
    ];

    onMounted(() => {
      Prism.highlightAll();
      feather.replace();
    });

    return { icons };
  },
});
</script>
