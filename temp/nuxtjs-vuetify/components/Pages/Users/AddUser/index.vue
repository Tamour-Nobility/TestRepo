<template>
  <form>
    <v-row>
      <v-col cols="12" lg="8">
        <v-card
          class="add-user-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="add-user-content">
            <div class="row">
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    User ID
                  </v-label>
                  <v-text-field
                    label="Enter user id"
                    placeholder="E.g. #JAN-123"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    User Name
                  </v-label>
                  <v-text-field
                    label="Enter user name"
                    placeholder="E.g. Olivia John"
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
                    placeholder="E.g. olivia@trezo.com"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Location
                  </v-label>
                  <v-select
                    label="Select"
                    :items="[
                      'Washington D.C',
                      'Chicago',
                      'Oklahoma City',
                      'San Diego',
                      'Los Angeles',
                      'Las Vegas',
                      'San Francisco',
                      'Istanbul',
                      'London',
                      'Dubai',
                      'Antalya',
                    ]"
                  >
                  </v-select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Phone Number
                  </v-label>
                  <v-text-field
                    label="Enter phone number"
                    placeholder="E.g. +1 555-445-4455"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Projects
                  </v-label>
                  <v-text-field
                    label="Enter projects"
                    placeholder="E.g. 27"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Add Some Info
                  </v-label>
                  <v-textarea
                    label="Type here...."
                    placeholder="E.g. It makes me feel..."
                    required
                  ></v-textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Facebook
                  </v-label>
                  <v-text-field
                    label="Enter facebook profile link"
                    placeholder="E.g. https://www.facebook.com/"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black"> X </v-label>
                  <v-text-field
                    label="Enter x profile link"
                    placeholder="E.g. https://x.com/"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    Linkedin
                  </v-label>
                  <v-text-field
                    label="Enter linkedin profile link"
                    placeholder="E.g. https://www.linkedin.com/"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="trezo-form-group">
                  <v-label class="d-block fw-medium text-black">
                    GitHub
                  </v-label>
                  <v-text-field
                    label="Enter github profile link"
                    placeholder="E.g. https://github.com/"
                    required
                  ></v-text-field>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="trezo-form-group mb-0">
                  <v-label class="d-block fw-medium text-black">
                    Upload Product Images
                  </v-label>
                  <CommonFileUploader />
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card
          class="add-user-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="v-card-header">
            <h5 class="mb-0">Privacy Policy</h5>
          </div>
          <div class="add-user-content">
            <div class="boxes">
              <v-checkbox
                color="primary"
                label="Allow users to show your email"
              ></v-checkbox>
              <v-checkbox
                color="primary"
                label="Allow users to show your experiences"
              >
              </v-checkbox>
              <v-checkbox
                color="primary"
                label="Allow users to show your followers"
              ></v-checkbox>
            </div>
            <div class="trezo-form-group mb-0">
              <v-label class="d-block fw-medium text-black">
                Select Your Skills
              </v-label>
              <v-select
                label="Select"
                :items="[
                  'Leadership',
                  'Project Management',
                  'Teamwork',
                  'Web Development',
                ]"
              >
              </v-select>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-card
      class="mb-25 border-radius d-block bg-transparent p-0 border-0 shadow-none"
    >
      <div class="form-btn-box">
        <button type="button" class="warn">Cancel</button>
        <button type="button" class="primary">
          <i class="material-symbols-outlined"> add </i>
          Add User
        </button>
      </div>
    </v-card>
  </form>
</template>

<script>
export default {
  name: "AddUser",
};
</script>

<style lang="scss" scoped>
.add-user-card {
  .add-user-content {
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
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .add-user-card {
    .add-user-content {
      .boxes {
        margin-bottom: 17px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .add-user-card {
    .add-user-content {
      .boxes {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
