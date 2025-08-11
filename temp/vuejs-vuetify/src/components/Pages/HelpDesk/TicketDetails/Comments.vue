<template>
  <v-card
    class="comments-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="comments-card-content">
      <ul class="comments mt-0 mb-0 pl-0 list-unstyled">
        <li>
          <div class="info d-flex align-items-center">
            <div class="d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user6.jpg"
                width="30"
                height="30"
                class="rounded-circle"
                alt="user-image"
              />
              <span class="d-block fw-medium text-primary"> Ponsiano </span>
            </div>
            <span class="d-block"> a day ago </span>
            <span class="trezo-status-badge bg-primary text-white">
              #BD0JL0G6
            </span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <h6>Screenshots</h6>
          <div class="screenshots">
            <v-img
              src="@/assets/images/courses/course1.jpg"
              class="border-radius"
              alt="screenshot-image"
            />
          </div>
        </li>
        <li>
          <div class="info d-flex align-items-center">
            <div class="d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user7.jpg"
                width="30"
                height="30"
                class="rounded-circle"
                alt="user-image"
              />
              <span class="d-block fw-medium text-danger"> Zelxa </span>
            </div>
            <span class="d-block"> 18 hours ago </span>
            <span class="trezo-status-badge bg-secondary text-white">
              Support Staff
            </span>
          </div>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <h6>Screenshots</h6>
          <div class="screenshots">
            <v-img
              src="@/assets/images/products/product1.jpg"
              class="border-radius"
              alt="screenshot-image"
            />
            <v-img
              src="@/assets/images/products/product2.jpg"
              class="border-radius"
              alt="screenshot-image"
            />
          </div>
        </li>
        <li>
          <div class="info d-flex align-items-center">
            <div class="d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user6.jpg"
                width="30"
                height="30"
                class="rounded-circle"
                alt="user-image"
              />
              <span class="d-block fw-medium text-primary"> Ponsiano </span>
            </div>
            <span class="d-block"> 12 hours ago </span>
          </div>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </li>
        <li>
          <div class="info d-flex align-items-center">
            <div class="d-flex align-items-center">
              <v-img
                src="@/assets/images/users/user7.jpg"
                width="30"
                height="30"
                class="rounded-circle"
                alt="user-image"
              />
              <span class="d-block fw-medium text-danger"> Zelxa </span>
            </div>
            <span class="d-block"> 05 hours ago </span>
            <span class="trezo-status-badge bg-secondary text-white">
              Support Staff
            </span>
          </div>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation.
          </p>
        </li>
      </ul>
      <form>
        <div class="trezo-form-group">
          <v-label class="d-block fw-medium text-black"> Post A Reply </v-label>
          <TextEditor />
        </div>
        <div class="form-btn-box">
          <button type="button" class="warn">Save As Draft</button>
          <button type="button" class="primary">
            <i class="material-symbols-outlined"> send </i>
            Submit Now
          </button>
        </div>
      </form>
    </div>
  </v-card>
</template>

<script>
import TextEditor from "@/components/Common/TextEditor.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Comments",
  components: {
    TextEditor,
  },
};
</script>

<style lang="scss" scoped>
.comments-card {
  .comments-card-content {
    .comments {
      li {
        border-bottom: 1px solid #eceef2;
        margin-bottom: 25px;
        padding: {
          left: 25px;
          bottom: 25px;
        }
        .info {
          gap: 15px;
          margin-bottom: 12px;

          .v-img {
            margin-right: 10px;
          }
          .trezo-status-badge {
            margin-top: 3px;
          }
        }
        h6 {
          margin-bottom: 12px;
        }
        .screenshots {
          margin-bottom: -15px;

          .v-img {
            display: inline-block;
            width: 80px;
            height: 80px;
            margin: {
              right: 15px;
              bottom: 15px;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
        &:first-child {
          padding-left: 0;
          border-color: var(--primaryColor);
        }
        &:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: 0;
        }
      }
    }
    form {
      margin-top: 25px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .comments-card {
    .comments-card-content {
      .comments {
        li {
          margin-bottom: 17px;
          padding: {
            left: 17px;
            bottom: 17px;
          }
          .info {
            gap: 12px;
            margin-bottom: 10px;

            img {
              margin-right: 8px;
            }
          }
          h6 {
            margin-bottom: 12px;
          }
          .screenshots {
            img {
              width: 70px;
            }
          }
        }
      }
      form {
        margin-top: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .comments-card {
    .comments-card-content {
      .comments {
        li {
          margin-bottom: 20px;
          padding: {
            left: 20px;
            bottom: 20px;
          }
        }
      }
      form {
        margin-top: 20px;
      }
    }
  }
}
</style>
