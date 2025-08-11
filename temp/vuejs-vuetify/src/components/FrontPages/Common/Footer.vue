<template>
  <footer class="pt-150">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="single-footer-widget">
            <RouterLink to="/" class="logo d-inline-block">
              <v-img src="@/assets/images/logo-big.svg" alt="logo" />
              <v-img
                src="@/assets/images/white-logo-big.svg"
                class="d-none"
                alt="logo"
              />
            </RouterLink>
            <p>
              With customizable dashboards tailored to your needs, collaborate
              effortlessly with your team and stay ahead with real-time updates.
            </p>
            <div class="socials">
              <a href="#" class="d-inline-block lh-1" target="_blank">
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="#" class="d-inline-block lh-1" target="_blank">
                <i class="ri-twitter-x-fill"></i>
              </a>
              <a href="#" class="d-inline-block lh-1" target="_blank">
                <i class="ri-linkedin-fill"></i>
              </a>
              <a href="#" class="d-inline-block lh-1" target="_blank">
                <i class="ri-dribbble-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-footer-widget">
            <h3 class="fw-semibold">Our Products</h3>
            <ul class="p-0 custom-links m-0 list-unstyled">
              <li>
                <RouterLink to="/dashboard" class="d-inline-block">
                  Trezo Dashboard
                </RouterLink>
              </li>
              <li>
                <a href="#" class="d-inline-block"> Tagus Admin </a>
              </li>
              <li>
                <a href="#" class="d-inline-block"> eCademy LMS </a>
              </li>
              <li>
                <a href="#" class="d-inline-block"> Admash Template </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-footer-widget">
            <h3 class="fw-semibold">Quick Links</h3>
            <ul class="p-0 custom-links m-0 list-unstyled">
              <li>
                <RouterLink to="/" class="d-inline-block"> Home </RouterLink>
              </li>
              <li>
                <RouterLink to="/features" class="d-inline-block">
                  Features
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="d-inline-block">
                  Contact Us
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/team" class="d-inline-block">
                  Our Team
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="single-footer-widget">
            <h3 class="fw-semibold">Privacy Policy</h3>
            <ul class="p-0 custom-links m-0 list-unstyled">
              <li>
                <RouterLink
                  to="/settings/terms-conditions"
                  class="d-inline-block"
                >
                  Terms & Conditions
                </RouterLink>
              </li>
              <li>
                <a href="#" class="d-inline-block"> Cookie Policy </a>
              </li>
              <li>
                <a href="#" class="d-inline-block"> Notice at Collection </a>
              </li>
              <li>
                <RouterLink
                  to="/settings/privacy-policy"
                  class="d-inline-block"
                >
                  Privacy Policy
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-area bg-white text-center">
      <div class="container">
        <p>
          © <span>Trezo</span> is Proudly Owned by
          <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid var(--borderColor);
  .single-footer-widget {
    margin-bottom: 30px;
    padding-left: 80px;

    .logo {
      margin-bottom: 20px;
      max-width: 132px;
    }
    .socials {
      margin-top: 35px;

      a {
        font-size: 20px;
        margin-right: 8px;
        color: var(--primaryColor);

        &:hover {
          color: var(--purpleColor);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .custom-links {
      li {
        margin-bottom: 14px;

        a {
          font-size: 16px;
          color: var(--bodyColor);

          &:hover {
            color: var(--primaryColor);
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .col-lg-3 {
    &:nth-child(1) {
      .single-footer-widget {
        padding-left: 0;
        margin-right: -35px;
      }
    }
    &:nth-child(2) {
      .single-footer-widget {
        padding-left: 142px;
      }
    }
    &:nth-child(3) {
      .single-footer-widget {
        padding-left: 130px;
      }
    }
  }
}
.copyright-area {
  margin-top: 70px;
  padding: {
    top: 20px;
    bottom: 20px;
  }
  span {
    color: var(--purpleColor);
  }
  a {
    color: var(--primaryColor);

    &:hover {
      text-decoration: underline;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  footer {
    .single-footer-widget {
      padding-left: 0;

      .logo {
        margin-bottom: 13px;
      }
      .socials {
        margin-top: 18px;

        a {
          font-size: 18px;
          margin-right: 6px;
        }
      }
      h3 {
        font-size: 16px;
        margin-bottom: 18px;
      }
      .custom-links {
        li {
          margin-bottom: 12px;

          a {
            font-size: 13px;
          }
        }
      }
    }
    .col-lg-3 {
      &:nth-child(1) {
        .single-footer-widget {
          margin-right: 0;
        }
      }
      &:nth-child(2) {
        .single-footer-widget {
          padding-left: 0;
        }
      }
      &:nth-child(3) {
        .single-footer-widget {
          padding-left: 0;
        }
      }
    }
  }
  .copyright-area {
    margin-top: 30px;
    padding: {
      top: 15px;
      bottom: 15px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  footer {
    .single-footer-widget {
      padding-left: 0;

      .logo {
        margin-bottom: 15px;
      }
      .socials {
        margin-top: 20px;
      }
      h3 {
        font-size: 17px;
        margin-bottom: 18px;
      }
      .custom-links {
        li {
          margin-bottom: 12px;

          a {
            font-size: 14px;
          }
        }
      }
    }
    .col-lg-3 {
      &:nth-child(1) {
        .single-footer-widget {
          margin-right: 0;
        }
      }
      &:nth-child(2) {
        .single-footer-widget {
          padding-left: 0;
        }
      }
      &:nth-child(3) {
        .single-footer-widget {
          padding-left: 0;
        }
      }
    }
  }
  .copyright-area {
    padding: {
      top: 17px;
      bottom: 17px;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  footer {
    .single-footer-widget {
      padding-left: 0;

      .socials {
        margin-top: 28px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .custom-links {
        li {
          a {
            font-size: 15px;
          }
        }
      }
    }
    .col-lg-3 {
      &:nth-child(2) {
        .single-footer-widget {
          padding-left: 45px;
        }
      }
      &:nth-child(3) {
        .single-footer-widget {
          padding-left: 35px;
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  footer {
    .single-footer-widget {
      padding-left: 50px;
    }
    .col-lg-3 {
      &:nth-child(2) {
        .single-footer-widget {
          padding-left: 100px;
        }
      }
      &:nth-child(3) {
        .single-footer-widget {
          padding-left: 100px;
        }
      }
    }
  }
}
</style>
