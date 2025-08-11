<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Default Example</h4>
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
              <input type="range" class="form-range" id="customRange1" />
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
&lt;input type="range" class="form-range" id="customRange1" /&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Min-Max Example</h4>
          <ul class="nav nav-tabs mb-4" id="myTab2" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview2-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview2-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview2-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code2-tab"
                data-bs-toggle="tab"
                data-bs-target="#code2-tab-pane"
                type="button"
                role="tab"
                aria-controls="code2-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent2">
            <div
              class="tab-pane fade show active"
              id="preview2-tab-pane"
              role="tabpanel"
              aria-labelledby="preview2-tab"
              tabindex="0"
            >
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id="customRange2"
              />
            </div>
            <div
              class="tab-pane fade"
              id="code2-tab-pane"
              role="tabpanel"
              aria-labelledby="code2-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode2"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode2">
&lt;input type="range" class="form-range" min="0" max="5" id="customRange2" /&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Disabled Example</h4>
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
              <input
                type="range"
                class="form-range"
                id="disabledRange"
                disabled
              />
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
&lt;input type="range" class="form-range" id="disabledRange" disabled /&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Steps Example</h4>
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
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              />
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
&lt;input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" /&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 mb-4">Range Example</h4>
          <ul class="nav nav-tabs mb-4" id="myTab7" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="preview7-tab"
                data-bs-toggle="tab"
                data-bs-target="#preview7-tab-pane"
                type="button"
                role="tab"
                aria-controls="preview7-tab-pane"
                aria-selected="true"
              >
                Preview
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="code7-tab"
                data-bs-toggle="tab"
                data-bs-target="#code7-tab-pane"
                type="button"
                role="tab"
                aria-controls="code7-tab-pane"
                aria-selected="false"
              >
                Code
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent7">
            <div
              class="tab-pane fade show active"
              id="preview7-tab-pane"
              role="tabpanel"
              aria-labelledby="preview7-tab"
              tabindex="0"
            >
              <input
                type="range"
                class="slider"
                name="cash_end"
                value=""
                data-from="5000"
              />
            </div>
            <div
              class="tab-pane fade"
              id="code7-tab-pane"
              role="tabpanel"
              aria-labelledby="code7-tab"
              tabindex="0"
            >
              <button
                class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute top-0 end-0"
                data-clipboard-target="#basicAlertsCode7"
              >
                Copy
              </button>
              <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="basicAlertsCode7">
&lt;input type="text" class="slider" name="cash_end" value="" data-from="5000" /&gt;
</code>
</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

export default defineComponent({
  name: "RangeSlider",
  setup() {
    onMounted(() => {
      Prism.highlightAll();
    });
  },
});
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
}
</style>
