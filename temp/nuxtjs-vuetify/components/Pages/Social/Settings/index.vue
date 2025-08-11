<template>
  <v-row>
    <v-col cols="12" xl="8">
      <v-card
        class="profile-settings-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Profile Settings</h5>
        </div>
        <div class="profile-settings-content">
          <div class="row">
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  First Name
                </v-label>
                <v-text-field
                  label="Enter first name"
                  value="Alice"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Last Name
                </v-label>
                <v-text-field
                  label="Enter last name"
                  value="Johnson"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Email Address
                </v-label>
                <v-text-field
                  label="Enter email address"
                  value="johnson@trezo.com"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Phone Number
                </v-label>
                <v-text-field
                  label="Enter phone number"
                  value="+1 444 555 6699"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Password
                </v-label>
                <v-text-field label="Enter password" required></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Confirm Password
                </v-label>
                <v-text-field
                  label="Enter confirm password"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Address
                </v-label>
                <v-text-field
                  label="Enter address"
                  value="84 S. Arrowhead Court Branford"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Country
                </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Switzerland',
                    'New Zealand',
                    'Germany',
                    'United States',
                    'Japan',
                    'Netherlands',
                    'Sweden',
                    'Canada',
                    'United Kingdom',
                    'Australia',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Your Skills
                </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Leadership',
                    'Project Management',
                    'Data Analysis',
                    'Teamwork',
                    'Web Development',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Your Profession
                </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Financial Manager',
                    'Software Developer',
                    'Physician Assistant',
                    'Data Scientist',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Company Name
                </v-label>
                <v-textarea
                  label="Enter company name"
                  value="Trezo Admin"
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Company Website
                </v-label>
                <v-textarea
                  label="Enter company website"
                  value="http://website.com"
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Facebook
                </v-label>
                <v-textarea
                  label="Enter facebook link"
                  value="https://www.facebook.com/"
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> X </v-label>
                <v-textarea
                  label="Enter x link"
                  value="https://x.com/"
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Linkedin
                </v-label>
                <v-textarea
                  label="Enter linkedin link"
                  value="https://www.linkedin.com/"
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  YouTube
                </v-label>
                <v-textarea
                  label="Enter youtube link"
                  value="https://www.youtube.com/"
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Add Your Bio
                </v-label>
                <v-textarea
                  label="Type here...."
                  value="It makes me feel..."
                  required
                ></v-textarea>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <v-label class="d-block fw-medium text-black">
                  Who will be able to see your profile?
                </v-label>
                <v-radio-group v-model="inline" inline>
                  <v-radio
                    color="primary"
                    label="Only me"
                    value="Only me"
                  ></v-radio>
                  <v-radio
                    color="primary"
                    label="My followers"
                    value="My followers"
                  ></v-radio>
                  <v-radio
                    color="primary"
                    label="Everyone"
                    value="Everyone"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Profile Picture
                </v-label>
                <CommonFileUploader />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Cover Photo
                </v-label>
                <CommonFileUploader />
              </div>
            </div>
          </div>
          <div class="form-btn-box">
            <button type="button" class="warn">Cancel</button>
            <button type="button" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Save Information
            </button>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" xl="4">
      <v-card
        class="profile-settings-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Privacy Policy</h5>
        </div>
        <div class="profile-settings-content">
          <div class="boxes">
            <v-checkbox color="primary" label="Allow users to show your email">
            </v-checkbox>
            <v-checkbox
              color="primary"
              label="Allow users to show your experiences"
            >
            </v-checkbox>
            <v-checkbox
              color="primary"
              label="Allow users to show your followers"
            >
            </v-checkbox>
          </div>
          <div class="form-group">
            <label class="d-block fw-medium text-black">
              Who can tag you?
            </label>
            <v-radio-group v-model="inline" inline>
              <v-radio
                color="primary"
                label="Everyone"
                value="Everyone"
              ></v-radio>
              <v-radio
                color="primary"
                label="Group Member"
                value="Group Member"
              ></v-radio>
            </v-radio-group>
          </div>
          <div class="trezo-form-group">
            <label class="d-block fw-medium text-black">
              Account Deletion Or Transfer
            </label>
            <p class="minus">
              Transfer this account to another person or to a company
              repositories.
            </p>
          </div>
          <div class="form-btn-box">
            <button type="button" class="warn">Delete Account</button>
            <button type="button" class="primary">
              <i class="material-symbols-outlined"> swap_horiz </i>
              Transfer Account
            </button>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      column: null,
      inline: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-settings-card {
  .profile-settings-content {
    .boxes {
      margin-bottom: 25px;

      .v-checkbox.v-input {
        margin: -18px -9px -40px -10px;
      }
      .v-input__details {
        display: none !important;
      }
      .v-selection-control__input {
        width: 0 !important;
        height: 0 !important;
      }
      .v-selection-control {
        .v-label {
          color: var(--bodyColor) !important;
          font-size: 14px !important;
        }
      }
      .v-checkbox-btn {
        .v-label {
          color: var(--bodyColor) !important;
          font-size: 14px !important;
        }
      }
    }
    .form-group {
      .v-radio-group {
        margin-top: 14px;
        display: block;

        .v-radio {
          margin-right: 17px;
          .v-label {
            color: var(--bodyColor) !important;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .minus {
        margin-top: -3px;
      }
      .v-input__details {
        display: none !important;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .profile-settings-card {
    .profile-settings-content {
      .boxes {
        margin-bottom: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .profile-settings-card {
    .profile-settings-content {
      .boxes {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
