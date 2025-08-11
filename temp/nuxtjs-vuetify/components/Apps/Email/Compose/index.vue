<template>
  <v-row>
    <v-col cols="12" lg="4" md="12">
      <AppsEmailSidebar />
    </v-col>
    <v-col cols="12" lg="8" md="12">
      <v-card
        class="email-compose-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0 fw-semibold">New Message</h5>
        </div>
        <div class="compose-card-content">
          <div class="row">
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> To </v-label>
                <v-select
                  label="To"
                  v-model="to"
                  multiple
                  :items="emailsTo"
                  class="custom-select"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Cc </v-label>
                <v-select label="Cc" v-model="cc" multiple :items="emailsCc">
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Bcc </v-label>
                <v-select label="Bcc" v-model="bcc" multiple :items="emailsBcc">
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Subject
                </v-label>
                <v-text-field label="Write your subject..."></v-text-field>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Your Email
                </v-label>
                <CommonTextEditor class="text-editor" />
              </div>
            </div>
          </div>
          <div
            class="buttons-list d-sm-flex align-items-center justify-space-between"
          >
            <div class="d-flex align-items-center">
              <button type="submit" class="primary">Send</button>
              <button type="button">
                <i class="material-symbols-outlined"> text_fields_alt </i>
              </button>
              <button type="button">
                <i class="material-symbols-outlined"> attach_file </i>
              </button>
              <button type="button">
                <i class="material-symbols-outlined"> link </i>
              </button>
              <button type="button">
                <i class="material-symbols-outlined"> mood </i>
              </button>
              <button type="button">
                <i class="material-symbols-outlined"> add_to_drive </i>
              </button>
              <button type="button">
                <i class="material-symbols-outlined"> add_photo_alternate </i>
              </button>
              <button type="button">
                <i class="material-symbols-outlined"> ink_pen </i>
              </button>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <button v-bind="props" title="More">
                    <i class="material-symbols-outlined"> more_vert </i>
                  </button>
                </template>
                <v-list class="menu-content">
                  <button type="button" class="bg-transparent border-none">
                    Print
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Plain text mode
                  </button>
                  <button type="button" class="bg-transparent border-none">
                    Check spelling
                  </button>
                </v-list>
              </v-menu>
            </div>
            <button type="button" class="warn">
              <i class="material-symbols-outlined"> delete </i>
            </button>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Compose",
  data() {
    return {
      to: [],
      emailsTo: [
        "james@trezo.com",
        "andy@trezo.com",
        "mateo@trezo.com",
        "luca@trezo.com",
        "tomato@trezo.com",
        "andy@trezo.com",
      ],
      cc: [],
      emailsCc: [
        "james@trezo.com",
        "andy@trezo.com",
        "mateo@trezo.com",
        "luca@trezo.com",
        "tomato@trezo.com",
        "andy@trezo.com",
      ],
      bcc: [],
      emailsBcc: [
        "james@trezo.com",
        "andy@trezo.com",
        "mateo@trezo.com",
        "luca@trezo.com",
        "tomato@trezo.com",
        "andy@trezo.com",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.email-compose-card {
  .compose-card-content {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--borderColor);

    .v-card-header {
      h5 {
        font-size: 16px;
      }
    }
    .text-editor {
      min-height: 206px;
    }
    .buttons-list {
      button {
        padding: 0;
        height: auto;
        min-width: auto;
        border-radius: 0;
        margin-left: 15px;
        display: inline-block;
        color: var(--bodyColor);

        i {
          font-size: 20px;
          font-weight: 700;
        }
        &:first-child {
          margin-left: 0;
        }
        &.primary {
          margin-right: 2px;
          padding: 10px 26px;
          border-radius: 7px;
          color: var(--whiteColor);
          background-color: var(--primaryColor);
          font: {
            size: 16px;
            weight: 600;
          }
        }
        &.warn {
          color: var(--dangerColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .email-compose-card {
    .v-card-header {
      padding-bottom: 15px;
      h5 {
        font-size: 15px;
      }
    }
    .compose-card-content {
      .text-editor {
        min-height: 190px;
      }
      .buttons-list {
        button {
          margin-left: 12px;

          i {
            font-size: 16px;
          }
          &.primary {
            padding: 10px 20px;
            margin-right: 0;
            font-size: 14px;
          }
          &.warn {
            margin: {
              left: 0;
              top: 12px;
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .email-compose-card {
    .compose-card-content {
      .buttons-list {
        button {
          margin-left: 15px;

          &.warn {
            margin-top: 0;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .email-compose-card {
    .v-card-header {
      padding-bottom: 18px;
    }
    .compose-card-content {
      .text-editor {
        min-height: 200px;
      }
      .buttons-list {
        button {
          i {
            font-size: 18px;
          }
          &.primary {
            font-size: 14px;
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .email-compose-card {
    .compose-card-content {
      .text-editor {
        min-height: 176px;
      }
      .buttons-list {
        button {
          &.primary {
            font-size: 15px;
          }
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .email-compose-card {
    .compose-card-content {
      .text-editor {
        min-height: 176px;
      }
    }
  }
}
</style>
