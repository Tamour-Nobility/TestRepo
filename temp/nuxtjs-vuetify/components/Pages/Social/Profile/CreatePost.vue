<template>
  <v-card
    class="publish-post-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Create Post</h5>
    </div>
    <div class="publish-post-content">
      <div class="trezo-form-group">
        <v-textarea
          label="What's on your mind, Alice Johnson?"
          placeholder="E.g. It makes me feel..."
        >
        </v-textarea>
      </div>
      <div class="btn-box d-md-flex align-items-center">
        <button class="btn">
          <i class="material-symbols-outlined"> send </i>
          Publish Post
        </button>
        <div class="buttons-list d-flex align-items-center">
          <button>
            <i class="material-symbols-outlined"> sentiment_satisfied </i>
          </button>
          <button>
            <i class="material-symbols-outlined"> attach_file </i>
          </button>
          <button>
            <i class="material-symbols-outlined"> mic_none </i>
          </button>
          <button>
            <i class="material-symbols-outlined"> image </i>
          </button>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CreatePost",
};
</script>

<style lang="scss" scoped>
.publish-post-card {
  .publish-post-content {
    .btn-box {
      button {
        &.btn {
          height: auto;
          min-width: auto;
          padding: 13px 27px;
          border-radius: 7px;
          color: var(--whiteColor);
          border: 1px solid var(--primaryColor);
          background-color: var(--primaryColor);
          align-items: center;
          display: flex;
          font: {
            size: 16px;
            weight: 500;
          }

          i {
            font-size: 20px;
            margin-right: 8px;
          }
        }
      }
      .buttons-list {
        margin-left: 25px;

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
          }
          &:hover {
            color: var(--primaryColor);
          }
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .publish-post-card {
    .publish-post-content {
      .btn-box {
        button {
          &.btn {
            padding: 11px 25px;
            font-size: 13px;

            i {
              font-size: 18px;
              margin-right: 5px;
            }
          }
        }
        .buttons-list {
          margin: {
            left: 0;
            top: 17px;
          }
          button {
            margin-left: 12px;
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .publish-post-card {
    .publish-post-content {
      .btn-box {
        button {
          &.btn {
            padding: 12px 25px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
