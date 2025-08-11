<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen w-100 p-lg-5">
      <div class="modal-content">
        <div class="modal-header border-0 p-4 p-md-5 pb-0 border-bottom">
          <h1 class="modal-title fs-24" id="exampleModalLabel">Create NFT</h1>
          <button
            type="button"
            class="btn-close campaigns-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4 p-md-5">
          <form
            class="campaign-stepper-content m-auto"
            style="max-width: 1208px"
          >
            <h3 class="fs-18 mb-4">Upload Image, Video, Audio, or 3D Model</h3>

            <div class="mb-4 only-file-upload">
              <div
                class="d-flex align-items-center position-relative z-1 bg-border-color p-4 rounded-2"
                style="border: 2px dashed #5da8ff"
              >
                <div class="flex-shrink-0">
                  <img src="@/assets/images/upload.png" alt="upload" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4 class="fs-16">
                    Drop campaign files here or click to upload.
                  </h4>
                  <p>Upload upto 12 files, max size each file: 5MB.</p>
                </div>
                <label
                  class="position-absolute top-0 bottom-0 start-0 end-0 cursor"
                  id="upload-container"
                >
                  <input
                    class="form__file bottom-0"
                    id="upload-files"
                    type="file"
                    multiple
                  />
                </label>
              </div>
              <div id="files-list-container"></div>
            </div>

            <div class="mb-4">
              <label class="fw-semibold mb-2"
                >Product Name <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control bg-border-color h-55 fs-16"
                placeholder="Christmas Eve"
              />
            </div>

            <div class="mb-4">
              <label class="fw-semibold mb-2">Description</label>
              <textarea
                class="form-control bg-border-color fs-16"
                rows="5"
                placeholder="Enter Description"
              ></textarea>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="mb-4">
                  <label class="fw-semibold mb-2">Item Price</label>
                  <input
                    type="text"
                    class="form-control bg-border-color h-55 fs-16"
                    placeholder="12.50 ETH"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-4">
                  <label class="fw-semibold mb-2">Size</label>
                  <input
                    type="text"
                    class="form-control bg-border-color h-55 fs-16"
                    placeholder="2.50 MB"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-4">
                  <label class="fw-semibold mb-2">Properties</label>
                  <input
                    type="text"
                    class="form-control bg-border-color h-55 fs-16"
                    placeholder="Enter Link"
                  />
                </div>
              </div>
            </div>

            <div class="mb-4">
              <label class="fw-semibold mb-2">External Link</label>
              <textarea
                class="form-control bg-border-color fs-16"
                rows="5"
                placeholder="Enter Description"
              ></textarea>
            </div>

            <div class="d-flex flex-wrap gap-3 mb-4">
              <div class="d-flex align-items-center form-check style">
                <div class="flex-shrink-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    style="width: 20px; height: 20px"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <label
                    class="form-check-label ps-0 fs-14 fw-medium text-secondary"
                    for="flexRadioDefault1"
                  >
                    Put On Sale
                  </label>
                </div>
              </div>
              <div class="d-flex align-items-center form-check style">
                <div class="flex-shrink-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    style="width: 20px; height: 20px"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <label
                    class="form-check-label ps-0 fs-14 fw-medium text-secondary"
                    for="flexRadioDefault2"
                  >
                    Instant Sale Price
                  </label>
                </div>
              </div>
              <div class="d-flex align-items-center form-check style">
                <div class="flex-shrink-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    style="width: 20px; height: 20px"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <label
                    class="form-check-label ps-0 fs-14 fw-medium text-secondary"
                    for="flexRadioDefault3"
                  >
                    Unlock One Purchased
                  </label>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end">
              <button class="btn btn-primary py-2 px-4">Create NFT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "CreateNFT",
  setup() {
    const initializeFileUpload = () => {
      const multipleEvents = (
        element: HTMLElement | null,
        eventNames: string,
        // eslint-disable-next-line no-undef
        listener: EventListener
      ) => {
        if (!element) return;
        const events = eventNames.split(" ");
        events.forEach((event) => {
          element.addEventListener(event, listener, false);
        });
      };

      const fileUpload = () => {
        const INPUT_FILE =
          document.querySelector<HTMLInputElement>("#upload-files");
        const INPUT_CONTAINER =
          document.querySelector<HTMLElement>("#upload-container");
        const FILES_LIST_CONTAINER = document.querySelector<HTMLElement>(
          "#files-list-container"
        );
        const FILE_LIST: { name: string; url: string }[] = [];

        if (!INPUT_FILE || !INPUT_CONTAINER || !FILES_LIST_CONTAINER) return;

        // Add hover or active effects
        multipleEvents(INPUT_FILE, "click dragstart dragover", () => {
          INPUT_CONTAINER.classList.add("active");
        });

        multipleEvents(INPUT_FILE, "dragleave dragend drop change", () => {
          INPUT_CONTAINER.classList.remove("active");
        });

        // Handle file input change
        INPUT_FILE.addEventListener("change", () => {
          const files = [...(INPUT_FILE.files || [])];
          FILE_LIST.length = 0; // Clear the list on new file selection

          files.forEach((file) => {
            const fileURL = URL.createObjectURL(file);
            const fileName = file.name;
            FILE_LIST.push({ name: fileName, url: fileURL });
          });

          // Render file list
          FILES_LIST_CONTAINER.innerHTML = "";
          FILE_LIST.forEach((addedFile) => {
            const content = `
              <div class="form__files-container">
                <span class="form__text">${addedFile.name}</span>
                <div>
                  <a class="form__icon" href="${addedFile.url}" target="_blank" title="Preview">&#128065;</a>
                  <a class="form__icon" href="${addedFile.url}" title="Download" download>&#11123;</a>
                </div>
              </div>
            `;
            FILES_LIST_CONTAINER.insertAdjacentHTML("beforeend", content);
          });
        });
      };

      fileUpload();
    };

    onMounted(() => {
      initializeFileUpload();
    });
  },
});
</script>
