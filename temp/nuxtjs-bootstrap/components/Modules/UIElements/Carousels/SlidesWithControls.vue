<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <h4 class="fs-18 mb-3">With Controls</h4>
      <p>
        Use <span class="text-danger">slide</span> class to set carousel with
        slides. Note the presence of the
        <span class="text-danger">d-block</span> and
        <span class="text-danger">w-100</span> class on carousel images to
        prevent browser default image alignment.
      </p>
      <ul class="nav nav-tabs mb-4 mt-4" id="myTab2" role="tablist">
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
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="~/assets/images/carousel-2.jpg"
                  class="d-block w-100"
                  alt="carousel"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="~/assets/images/carousel-1.jpg"
                  class="d-block w-100"
                  alt="carousel"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
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
            @click="copyCode"
          >
            Copy
          </button>
          <pre class="line-numbers pt-0 pb-0 ps-25 pe-25 mb-0">
<code class="language-markup" id="codeCopy">
&lt;div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"&gt;
&lt;div class="carousel-inner"&gt;
&lt;div class="carousel-item active"&gt;
&lt;img src="~/assets/images/carousel-2.jpg" class="d-block w-100" alt="carousel"&gt;
&lt;/div&gt;
&lt;div class="carousel-item"&gt;
&lt;img src="~/assets/images/carousel-1.jpg" class="d-block w-100" alt="carousel"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev"&gt;
&lt;span class="carousel-control-prev-icon" aria-hidden="true"&gt;&lt;/span&gt;
&lt;span class="visually-hidden"&gt;Previous&lt;/span&gt;
&lt;/button&gt;
&lt;button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next"&gt;
&lt;span class="carousel-control-next-icon" aria-hidden="true"&gt;&lt;/span&gt;
&lt;span class="visually-hidden"&gt;Next&lt;/span&gt;
&lt;/button&gt;
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
  name: "SlidesWithControls",
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
