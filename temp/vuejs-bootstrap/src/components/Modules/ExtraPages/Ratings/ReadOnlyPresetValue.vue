<template>
  <div class="card bg-white border-0 rounded-10 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Read-only and Preset Value</h4>
      <ul class="nav nav-tabs mb-4" id="myTab5" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview5-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview5-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview5-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code5-tab"
            data-bs-toggle="tab"
            data-bs-target="#code5-tab-pane"
            type="button"
            role="tab"
            aria-controls="code5-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent5">
        <div
          class="tab-pane fade show active"
          id="preview5-tab-pane"
          role="tabpanel"
          aria-labelledby="preview5-tab"
          tabindex="0"
        >
          <!-- Read-only preset value rating -->
          <div class="ratings" dir="rtl">
            <span v-for="(star, index) in 5" :key="index" class="rating ms-2">
              <i
                :class="
                  index + 1 <= presetRating ? 'ri-star-fill' : 'ri-star-line'
                "
              ></i>
            </span>
          </div>
          <p class="mt-3">Preset Rating: {{ presetRating }}</p>
        </div>
        <div
          class="tab-pane fade"
          id="code5-tab-pane"
          role="tabpanel"
          aria-labelledby="code5-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            data-clipboard-target="#basicAlertsCode5"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode5">
&lt;div class="ratings" dir="rtl"&gt;
  &lt;span v-for="(star, index) in 5" :key="index" class="rating ms-2"&gt;
    &lt;i :class="index + 1 &lt;= presetRating ? 'ri-star-fill' : 'ri-star-line'"&gt;&lt;/i&gt;
  &lt;/span&gt;
&lt;/div&gt;
</code>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ReadOnlyPresetValue",
  setup() {
    const presetRating = ref(4);

    return {
      presetRating,
    };
  },
});
</script>

<style lang="scss" scoped>
.rating {
  i {
    &.ri-star-fill {
      color: #f7d700;
    }
  }
}
</style>
