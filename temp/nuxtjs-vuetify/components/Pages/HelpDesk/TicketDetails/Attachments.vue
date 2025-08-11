<template>
  <v-card
    class="attachments-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Attachments</h5>
    </div>
    <div class="attachments-card-content">
      <ul class="m-0 p-0 list-unstyled">
        <li
          class="border-radius d-flex align-items-center justify-space-between"
        >
          <div class="d-flex align-items-center">
            <div class="icon">
              <i class="ri-file-warning-line"></i>
            </div>
            <div>
              <h6 class="d-flex align-items-center fw-medium">
                Project_attachment_1.zip
              </h6>
              <span class="d-block file-size"> 3.25 MB </span>
            </div>
          </div>
          <button type="button">
            <i class="ri-download-2-line"></i>
          </button>
        </li>
        <li
          class="border-radius d-flex align-items-center justify-space-between"
        >
          <div class="d-flex align-items-center">
            <div class="icon">
              <i class="ri-file-warning-line"></i>
            </div>
            <div>
              <h6 class="d-flex align-items-center fw-medium">
                Project_attachment_2.zip
              </h6>
              <span class="d-block file-size"> 3.25 MB </span>
            </div>
          </div>
          <button type="button">
            <i class="ri-download-2-line"></i>
          </button>
        </li>
        <li
          class="border-radius d-flex align-items-center justify-space-between"
        >
          <div class="d-flex align-items-center">
            <div class="icon">
              <i class="ri-file-warning-line"></i>
            </div>
            <div>
              <h6 class="d-flex align-items-center fw-medium">
                Project_attachment_3.zip
              </h6>
              <span class="d-block file-size"> 3.25 MB </span>
            </div>
          </div>
          <button type="button">
            <i class="ri-download-2-line"></i>
          </button>
        </li>
        <li
          class="border-radius d-flex align-items-center justify-space-between"
        >
          <div class="d-flex align-items-center">
            <div class="icon">
              <i class="ri-file-warning-line"></i>
            </div>
            <div>
              <h6 class="d-flex align-items-center fw-medium">
                Project_attachment_4.zip
              </h6>
              <span class="d-block file-size"> 3.25 MB </span>
            </div>
          </div>
          <button type="button">
            <i class="ri-download-2-line"></i>
          </button>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Attachments",
};
</script>

<style lang="scss" scoped>
.attachments-card {
  .attachments-card-content {
    ul {
      li {
        padding: 15px;
        margin-bottom: 10px;
        background: #f6f7f9;

        .icon {
          margin-right: 12px;

          i {
            background-color: var(--whiteColor);
            color: var(--primaryColor);
            display: inline-block;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            font-size: 22px;
            height: 40px;
            width: 40px;
          }
        }
        h6 {
          font-size: 14px;
          margin-bottom: 7px;
        }
        .file-size {
          font-size: 13px;
        }
        button {
          color: var(--primaryColor);
          min-width: auto;
          height: auto;
          padding: 0;
          i {
            font-size: 22px;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .attachments-card {
    .attachments-card-content {
      ul {
        li {
          padding: 12px;

          .icon {
            margin-right: 10px;

            i {
              line-height: 35px;
              font-size: 18px;
              height: 35px;
              width: 35px;
            }
          }
          h6 {
            font-size: 13px;
            margin-bottom: 7px;
          }
          .file-size {
            font-size: 12px;
          }
          button {
            i {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .attachments-card {
    .attachments-card-content {
      ul {
        li {
          padding: 12px;

          .icon {
            margin-right: 10px;

            i {
              line-height: 35px;
              font-size: 20px;
              height: 35px;
              width: 35px;
            }
          }
          h6 {
            font-size: 13.5px;
          }
          button {
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .attachments-card {
    .attachments-card-content {
      ul {
        li {
          padding: 12px;

          .icon {
            margin-right: 10px;

            i {
              line-height: 35px;
              font-size: 20px;
              height: 35px;
              width: 35px;
            }
          }
          h6 {
            font-size: 13.5px;
          }
          button {
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
