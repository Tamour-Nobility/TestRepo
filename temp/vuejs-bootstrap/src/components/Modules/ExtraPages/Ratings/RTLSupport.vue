<template>
  <div class="card bg-white border-0 rounded-10 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">RTL Support</h4>
      <ul class="nav nav-tabs mb-4" id="myTab4" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview4-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview4-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview4-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code4-tab"
            data-bs-toggle="tab"
            data-bs-target="#code4-tab-pane"
            type="button"
            role="tab"
            aria-controls="code4-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent4">
        <div
          class="tab-pane fade show active"
          id="preview4-tab-pane"
          role="tabpanel"
          aria-labelledby="preview4-tab"
          tabindex="0"
        >
          <div class="ratings" dir="rtl">
            <!-- Render stars with click functionality -->
            <span
              v-for="(star, index) in 5"
              :key="index"
              class="rating ms-2"
              @click="setRating(index + 1)"
            >
              <i
                :class="index + 1 <= rating ? 'ri-star-fill' : 'ri-star-line'"
              ></i>
            </span>
          </div>
          <p class="mt-3">Selected Rating: {{ rating }}</p>
        </div>
        <div
          class="tab-pane fade"
          id="code4-tab-pane"
          role="tabpanel"
          aria-labelledby="code4-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            data-clipboard-target="#basicAlertsCode4"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode4">
&lt;div class="ratings" dir="rtl"&gt;
  &lt;span
    v-for="(star, index) in 5"
    :key="index"
    class="rating ms-2"
    @click="setRating(index + 1)"
  &gt;
    &lt;i :class="index + 1 &lt;= rating ? 'ri-star-fill' : 'ri-star-line'"&gt;&lt;/i&gt;
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
  name: "RTLSupport",
  setup() {
    const rating = ref(0);

    const setRating = (value: number) => {
      rating.value = value;
    };

    return {
      rating,
      setRating,
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
