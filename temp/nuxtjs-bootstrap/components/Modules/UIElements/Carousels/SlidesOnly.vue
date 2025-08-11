<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-3">Slides Only & Auto</h4>
      <p>
        Use <span class="text-danger">slide</span> class to set carousel with
        slides. Note the presence of the
        <span class="text-danger">d-block</span> and
        <span class="text-danger">w-100</span> class on carousel images to
        prevent browser default image alignment.
      </p>
      <ul class="nav nav-tabs mb-4 mt-4" id="myTab" role="tablist">
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
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="~/assets/images/carousel-1.jpg"
                  class="d-block w-100"
                  alt="carousel"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="~/assets/images/carousel-2.jpg"
                  class="d-block w-100"
                  alt="carousel"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="code-tab-pane"
          role="tabpanel"
          aria-labelledby="code-tab"
          tabindex="0"
        >
          <button
            class="btn btn-outline-primary bg-white btn-sm copy-btn position-absolute end-0"
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="codeCopy">
&lt;div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"&gt;
&lt;div class="carousel-inner"&gt;
&lt;div class="carousel-item active"&gt;
&lt;img src="~/assets/images/carousel-1.jpg" class="d-block w-100" alt="carousel"&gt;
&lt;/div&gt;
&lt;div class="carousel-item"&gt;
&lt;img src="~/assets/images/carousel-2.jpg" class="d-block w-100" alt="carousel"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
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
  name: "SlidesOnly",
  setup() {
    const copyCode = async () => {
      const codeElement = document.getElementById("codeCopy");
      if (codeElement) {
        try {
          await navigator.clipboard.writeText(codeElement.innerText);
          alert("Code copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      }
    };

    onMounted(() => {
      Prism.highlightAll();
    });

    return { copyCode };
  },
});
</script>
