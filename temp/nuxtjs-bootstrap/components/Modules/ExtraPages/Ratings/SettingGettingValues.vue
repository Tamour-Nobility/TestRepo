<template>
  <div class="card bg-white border-0 rounded-10 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-4">Setting and Getting Values</h4>
      <ul class="nav nav-tabs mb-4" id="myTab3" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="preview3-tab"
            data-bs-toggle="tab"
            data-bs-target="#preview3-tab-pane"
            type="button"
            role="tab"
            aria-controls="preview3-tab-pane"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="code3-tab"
            data-bs-toggle="tab"
            data-bs-target="#code3-tab-pane"
            type="button"
            role="tab"
            aria-controls="code3-tab-pane"
            aria-selected="false"
          >
            Code
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent3">
        <div
          class="tab-pane fade show active"
          id="preview3-tab-pane"
          role="tabpanel"
          aria-labelledby="preview3-tab"
          tabindex="0"
        >
          <div class="ratings" dir="ltr">
            <span
              v-for="(heart, index) in 5"
              :key="index"
              class="rating ms-2"
              @click="setRating(index + 1)"
            >
              <i
                :class="index + 1 <= rating ? 'ri-heart-fill' : 'ri-heart-line'"
              ></i>
            </span>
          </div>
          <p class="mt-3">Selected Rating: {{ rating }}</p>
        </div>
        <div
          class="tab-pane fade"
          id="code3-tab-pane"
          role="tabpanel"
          aria-labelledby="code3-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
            data-clipboard-target="#basicAlertsCode3"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode3">
&lt;!-- Rating Component for setting and getting values --&gt;
&lt;div class="ratings" dir="ltr"&gt;
  &lt;span
    v-for="(heart, index) in 5"
    :key="index"
    class="rating ms-2"
    @click="setRating(index + 1)"
  &gt;
    &lt;i :class="index + 1 &lt;= rating ? 'ri-heart-fill' : 'ri-heart-line'"&gt;&lt;/i&gt;
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
  name: "SettingGettingValues",
  setup() {
    const rating = ref(0); // Holds the current rating value

    // Function to set the rating
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
    &.ri-heart-fill {
      color: #f7d700;
    }
  }
}
</style>
