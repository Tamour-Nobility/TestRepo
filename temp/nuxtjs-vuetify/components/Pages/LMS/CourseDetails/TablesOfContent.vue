<template>
  <v-card
    class="tables-of-content-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Tables Of Content</h5>
    </div>
    <div class="tables-card-content">
      <div class="row align-items-center">
        <div class="col-xxl-8">
          <div class="tables-of-content-list">
            <v-expansion-panels v-model="activePanel">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Introduction to Cybersecurity
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul class="p-0 m-0 list-unstyled">
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> info </i>
                        Course Introduction
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 24s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> play_circle </i>
                        Cyber Security Introduction
                      </NuxtLink>
                      <span class="d-block text-body"> 0m 46s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> list </i>
                        What is Cyber Security and the CIA Triad
                      </NuxtLink>
                      <span class="d-block text-body"> 3m 32s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> star </i>
                        Threat Actors: Who are They?
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 2s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> hotel_class </i>
                        Types of Threat Actors
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 13s </span>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Secure Networking
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul class="p-0 m-0 list-unstyled">
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> info </i>
                        Network Security Introduction
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 24s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> hotel_class </i>
                        Introduction to Wired and Wireless Networks
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 13s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> list </i>
                        Wired Network Vulnerabilities and How to Protect Wired
                        Networks
                      </NuxtLink>
                      <span class="d-block text-body"> 3m 32s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> star </i>
                        Wireless Network Vulnerabilities and How to Protect
                        Wireless Networks
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 2s </span>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Secure E-Mail
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul class="p-0 m-0 list-unstyled">
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> info </i>
                        E-Mail Security Introduction
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 24s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> play_circle </i>
                        E-Mail: Overview and Importance
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 13s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> list </i>
                        Phishing: Techniques, Implications and How to Spot
                      </NuxtLink>
                      <span class="d-block text-body"> 3m 32s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> star </i>
                        Understanding E-Mail Headers for Verification
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 2s </span>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Secure Internet Browsing
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul class="p-0 m-0 list-unstyled">
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> info </i>
                        Internet Security Introduction
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 24s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> play_circle </i>
                        Exploring Web-Based Threats
                      </NuxtLink>
                      <span class="d-block text-body"> 0m 46s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> list </i>
                        Typo Squatting: Risks and Mitigation
                      </NuxtLink>
                      <span class="d-block text-body"> 3m 32s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> star </i>
                        Watering Hole Attacks: Tactics and Countermeasures
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 2s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> hotel_class </i>
                        Secure Browsing Best Practices
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 13s </span>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  Device Security & Password Management
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul class="p-0 m-0 list-unstyled">
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> info </i>
                        Device Security Introduction
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 24s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> play_circle </i>
                        Securing Computers, Laptops, and Mobile Devices
                      </NuxtLink>
                      <span class="d-block text-body"> 0m 46s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> list </i>
                        Password Best Practices
                      </NuxtLink>
                      <span class="d-block text-body"> 3m 32s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> star </i>
                        Multi-Factor Authentication (MFA)
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 2s </span>
                    </li>
                    <li
                      class="d-sm-flex align-items-center justify-space-between"
                    >
                      <NuxtLink
                        to="/lms/lesson-preview"
                        class="position-relative d-inline-block"
                      >
                        <i class="material-symbols-outlined"> hotel_class </i>
                        Keeping Devices Up-to-Date
                      </NuxtLink>
                      <span class="d-block text-body"> 2m 13s </span>
                    </li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
        <div class="col-xxl-4">
          <div class="unlock-library-box text-center border-radius bg-primary">
            <h4 class="text-white">Unlock Library</h4>
            <p>Get access to all videos in the library</p>
            <NuxtLink class="btn" to="/lms/course-details">
              Sign Up - Only $120/mo
            </NuxtLink>
            <p>
              Have an account?
              <NuxtLink to="/dashboard" class="text-white">Login</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TablesOfContent",
  data() {
    return {
      activePanel: 0, // Set the default active panel index
    };
  },
};
</script>

<style lang="scss" scoped>
.tables-of-content-card {
  .tables-card-content {
    .unlock-library-box {
      padding: 50px 30px;

      h4 {
        margin-bottom: 10px;
      }
      p {
        color: #e3eaef;
        margin-bottom: 20px;
      }
      .btn {
        height: auto;
        min-width: auto;
        border-radius: 7px;
        padding: 15px 22px;
        margin-bottom: 15px;
        display: inline-block;
        color: var(--whiteColor);
        background: rgba(255, 255, 255, 0.08);
        font: {
          size: 16px;
          weight: 500;
        }
      }
    }
    .tables-of-content-list {
      .v-expansion-panels {
        .v-expansion-panel {
          border-radius: 3px;
          background: #f6f7f9;
          color: var(--blackColor);
          margin: {
            bottom: 10px;
            top: 0;
          }
          .v-expansion-panel-title {
            height: auto;
            padding: 20px 25px;
            line-height: initial;
            margin-right: 0;
            color: var(--blackColor);
            font: {
              size: 15px;
              weight: 600;
            }
          }
          .v-expansion-panel-text {
            .v-expansion-panel-text__wrapper {
              padding: 0 25px 18px;

              ul {
                li {
                  border-bottom: 1px solid #eceef2;
                  padding: {
                    top: 13px;
                    bottom: 13px;
                  }
                  a {
                    padding-left: 27px;
                    color: var(--bodyColor);

                    i {
                      left: 0;
                      top: 50%;
                      font-size: 20px;
                      margin-top: -0.5px;
                      position: absolute;
                      color: var(--primaryColor);
                      transform: translateY(-50%);
                    }
                    &:hover {
                      color: var(--primaryColor);
                    }
                  }
                  &:first-child {
                    padding-top: 0;
                  }
                  &:last-child {
                    padding-bottom: 0;
                    border-bottom-width: 0;
                  }
                }
              }
            }
          }
          &::after {
            display: none !important;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .tables-of-content-card {
    .tables-card-content {
      .unlock-library-box {
        padding: 30px 20px;
        margin-top: 17px;

        h4 {
          margin-bottom: 8px;
        }
        p {
          margin-bottom: 15px;
        }
        .btn {
          margin-bottom: 12px;
          padding: 15px 20px;
          font-size: 13px;
        }
      }
      .tables-of-content-list {
        .v-expansion-panels {
          .v-expansion-panel {
            .v-expansion-panel-title {
              padding: 15px 17px;
              font-size: 14px;
            }
            .v-expansion-panel-text {
              .v-expansion-panel-text__wrapper {
                padding: 0 17px 15px;

                ul {
                  li {
                    padding: {
                      top: 13px;
                      bottom: 13px;
                    }
                    a {
                      padding-left: 25px;
                      margin-bottom: 5px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .tables-of-content-card {
    .tables-card-content {
      .tables-of-content-list {
        .v-expansion-panels {
          .v-expansion-panel {
            .v-expansion-panel-title {
              padding: {
                left: 20px;
                right: 20px;
              }
            }
            .v-expansion-panel-text {
              .v-expansion-panel-text__wrapper {
                padding: {
                  left: 20px;
                  right: 20px;
                }
                ul {
                  li {
                    a {
                      margin-bottom: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .tables-of-content-card {
    .tables-card-content {
      .unlock-library-box {
        padding: 35px 30px;
        margin-top: 25px;

        .btn {
          padding: 16px 25px;
          font-size: 14px;
        }
      }
      .tables-of-content-list {
        .v-expansion-panels {
          .v-expansion-panel {
            .v-expansion-panel-title {
              padding: 16px 25px;
            }
            .v-expansion-panel-text {
              .v-expansion-panel-text__wrapper {
                padding: 0 25px 16px;
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .tables-of-content-card {
    .tables-card-content {
      .unlock-library-box {
        margin-top: 25px;
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .tables-of-content-card {
    .tables-card-content {
      .unlock-library-box {
        margin-top: 25px;
      }
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .tables-of-content-card {
    .tables-card-content {
      .tables-of-content-list {
        padding-right: 120px;
      }
      .unlock-library-box {
        margin: {
          right: 85px;
          left: -30px;
        }
      }
    }
  }
}
</style>
