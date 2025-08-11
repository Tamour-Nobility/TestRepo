<template>
  <div class="card bg-white border-0 rounded-10 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Interactive Rating</h4>
      <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code-tab"
            data-bs-toggle="tab"
            data-bs-target="#code-tab-pane"
            type="button"
            role="tab"
            aria-controls="code-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="preview-tab-pane"
          role="tabpanel"
          aria-labelledby="preview-tab"
          tabindex="0"
        >
          <div class="ratings" dir="ltr">
            <span
              v-for="(star, index) in 5"
              :key="index"
              class="rating me-2"
              @mouseover="hoverRating(index + 1)"
              @mouseleave="hoverRating(0)"
              @click="setRating(index + 1)"
            >
              <i
                :class="
                  index + 1 <= (hoveredRating || rating)
                    ? 'ri-star-fill'
                    : 'ri-star-line'
                "
              ></i>
            </span>
          </div>
          <p class="mt-3">Your Rating: {{ rating }}</p>
        </div>
        <div
          class="tab-pane fade"
          id="code-tab-pane"
          role="tabpanel"
          aria-labelledby="code-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            data-clipboard-target="#basicAlertsCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode">
&lt;div class="ratings" dir="ltr"&gt;
  &lt;span
    v-for="(star, index) in 5"
    :key="index"
    class="rating me-2"
    @mouseover="hoverRating(index + 1)"
    @mouseleave="hoverRating(0)"
    @click="setRating(index + 1)"
  &gt;
    &lt;i
      :class="index + 1 &lt;= (hoveredRating || rating) ? 'ri-star-fill' : 'ri-star-line'"
    &gt;&lt;/i&gt;
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
import { defineComponent, onMounted, ref } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "InteractiveRating",
  setup() {
    const rating = ref(0);
    const hoveredRating = ref(0);

    const setRating = (newRating: number) => {
      rating.value = newRating;
    };

    const hoverRating = (newHover: number) => {
      hoveredRating.value = newHover;
    };

    onMounted(() => {
      Prism.highlightAll();
    });

    return {
      rating,
      hoveredRating,
      setRating,
      hoverRating,
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
