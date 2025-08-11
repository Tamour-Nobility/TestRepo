<template>
  <v-row>
    <v-col cols="12" lg="4" md="12">
      <Sidebar />
    </v-col>
    <v-col cols="12" lg="8" md="12">
      <v-card
        class="email-read-card trezo-card border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0 fw-semibold">Sales Review Meeting</h5>
          <div class="buttons-list d-flex align-items-center">
            <button type="button">
              <i class="material-symbols-outlined"> archive </i>
            </button>
            <button type="button">
              <i class="material-symbols-outlined"> help_clinic </i>
            </button>
            <button type="button">
              <i class="material-symbols-outlined"> delete </i>
            </button>
            <v-menu>
              <template v-slot:activator="{ props }">
                <button v-bind="props" title="More">
                  <i class="material-symbols-outlined"> more_vert </i>
                </button>
              </template>
              <v-list class="menu-content">
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> reply </i>
                  Reply
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> redo </i>
                  Forward
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> print </i>
                  Print
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> download </i>
                  Download
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> mark_email_unread </i>
                  Mark as unread
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> info </i>
                  Report Spam
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> delete </i>
                  Delete
                </button>
                <button type="button" class="bg-transparent border-none">
                  <i class="material-symbols-outlined"> block </i>
                  Block Sarah
                </button>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="read-card-content">
          <div class="info d-md-flex align-items-center justify-space-between">
            <div class="user d-flex align-items-center">
              <div class="img">
                <v-img
                  src="@/assets/images/users/user31.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
              </div>
              <div class="title">
                <span class="d-block fw-semibold text-black">
                  Sarah Smith
                </span>
                <span class="d-block"> sarah&#64;trezo.com </span>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <button type="button">
                <i class="material-symbols-outlined"> grade </i>
              </button>
              <span class="d-block"> 26 March 2024 </span>
            </div>
          </div>
          <div class="content">
            <span class="d-block title text-black fw-semibold">
              Subject: Re: Quarterly Sales Review Meeting
            </span>
            <span class="d-block sub-title text-black fw-medium">
              Hi Smith,
            </span>
            <p>
              Great, I'll go ahead and send out the calendar invite shortly.
            </p>
            <p>
              Regarding the agenda, I think your suggestions are spot on. I'll
              add them to the agenda and circulate it to everyone before the
              meeting so they can come prepared.
            </p>
            <p>
              Additionally, I think it would be beneficial to have a brief
              update on any new products or promotions that are launching in the
              next quarter. This will give us a comprehensive view of our sales
              strategy moving forward.
            </p>
            <p>
              Let me know if you think that's a valuable addition to the agenda.
            </p>
            <div class="regards">
              <span class="d-block text-black fw-medium"> Best regards, </span>
              <span class="d-block text-black fw-medium"> Olivia Parker </span>
            </div>
          </div>
          <div class="btn-box">
            <button type="button" class="primary">Reply</button>
            <button type="button">Forward</button>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../Sidebar.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Read",
  components: {
    Sidebar,
  },
});
</script>

<style lang="scss" scoped>
.email-read-card {
  .v-card-header {
    padding-bottom: 20px !important;
    border-bottom: 1px solid #eceef2;
    h5 {
      font-size: 16px;
    }
  }
  .read-card-content {
    .info {
      margin-bottom: 25px;

      .user {
        .img {
          margin-right: 12px;

          .v-img {
            width: 45px;
            margin-bottom: -3px;
          }
        }
        .title {
          span {
            &:not(:first-child) {
              font-size: 12px;
            }
          }
        }
      }
      button {
        top: 1px;
        padding: 0;
        height: auto;
        min-width: auto;
        margin-right: 10px;
        position: relative;
        display: inline-block;
        color: var(--bodyColor);

        i {
          font-size: 20px;
        }
      }
    }
    .content {
      padding-left: 57px;

      .title {
        margin-bottom: 26px;
      }
      .sub-title {
        margin-bottom: 26px;
      }
      p {
        margin-bottom: 21px;
        line-height: 1.6;

        &:last-child {
          margin-bottom: 0;
        }
      }
      .regards {
        margin-top: 51px;

        span {
          margin-bottom: 5px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .btn-box {
      border-top: 1px solid #eceef2;
      margin-top: 26px;
      padding: {
        top: 26px;
        left: 57px;
      }
      button {
        height: auto;
        min-width: auto;
        padding: 9px 25px;
        border-radius: 7px;
        margin-right: 16px;
        color: var(--primaryColor);
        background-color: transparent;
        border: 1px solid var(--primaryColor);
        font: {
          size: 16px;
          weight: 600;
        }
        &.primary {
          color: var(--whiteColor);
          border-color: var(--primaryColor);
          background-color: var(--primaryColor);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
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
    transition: var(--transition);

    i {
      font-size: 20px;
      font-weight: 700;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .email-read-card {
    .v-card-header {
      padding-bottom: 15px;

      h5 {
        font-size: 15px;
      }
    }
    .read-card-content {
      .info {
        margin-bottom: 15px;

        .user {
          margin-bottom: 15px;
        }
        button {
          margin-right: 8px;

          i {
            font-size: 18px;
          }
        }
      }
      .content {
        padding-left: 0;

        .title {
          margin-bottom: 15px;
        }
        .sub-title {
          margin-bottom: 15px;
        }
        p {
          margin-bottom: 15px;
        }
        .regards {
          margin-top: 15px;
        }
      }
      .btn-box {
        margin-top: 20px;
        padding: {
          top: 20px;
          left: 0;
        }
        button {
          margin-right: 15px;
          font-size: 13px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .email-read-card {
    .v-card-header {
      padding-bottom: 18px;
    }
    .read-card-content {
      .btn-box {
        button {
          font-size: 14px;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .email-read-card {
    .read-card-content {
      .btn-box {
        button {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
