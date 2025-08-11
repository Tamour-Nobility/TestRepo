<template>
  <div class="account-settings-card">
    <h5>Profile</h5>
    <p>Update your photo and personal details here.</p>
    <div class="row">
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            First Name
          </v-label>
          <v-text-field
            label="Enter first name"
            v-model="profile.firstName"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Last Name
          </v-label>
          <v-text-field
            label="Enter last name"
            v-model="profile.lastName"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Email Address
          </v-label>
          <v-text-field
            label="Enter email address"
            v-model="profile.email"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Phone Number
          </v-label>
          <v-text-field
            label="Enter phone number"
            v-model="profile.phone"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Address
          </v-label>
          <v-text-field
            label="Enter address"
            v-model="profile.address"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Country
          </v-label>
          <v-select
            label="Select"
            :items="countries"
            v-model="profile.country"
          ></v-select>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Date Of Birth
          </v-label>
          <v-text-field
            type="date"
            class="date-input"
            v-model="profile.dob"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Gender
          </v-label>
          <v-select
            label="Select"
            :items="genders"
            v-model="profile.gender"
          ></v-select>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Your Skills
          </v-label>
          <v-select
            label="Select"
            :items="skills"
            v-model="profile.skills"
          ></v-select>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Your Profession
          </v-label>
          <v-select
            label="Select"
            :items="professions"
            v-model="profile.profession"
          ></v-select>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Company Name
          </v-label>
          <v-text-field
            label="Enter company name"
            v-model="profile.companyName"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Company Website
          </v-label>
          <v-text-field
            label="Enter company website"
            v-model="profile.companyWebsite"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Add Your Bio
          </v-label>
          <v-text-field
            label="Type here...."
            v-model="profile.bio"
          ></v-text-field>
        </div>
      </div>
    </div>
    <h4>Your Photo</h4>
    <p>This will be displayed on your profile.</p>
    <div class="trezo-form-group">
      <CommonFileUploader />
    </div>
    <h4>Socials Profile</h4>
    <p></p>
    <div class="row">
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Facebook
          </v-label>
          <v-text-field
            label="Enter facebook link"
            v-model="profile.facebook"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black"> X </v-label>
          <v-text-field label="Enter x link" v-model="profile.x"></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            Linkedin
          </v-label>
          <v-text-field
            label="Enter linkedin link"
            v-model="profile.linkedin"
          ></v-text-field>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="trezo-form-group">
          <v-label class="main-label d-block fw-medium text-black">
            YouTube
          </v-label>
          <v-text-field
            label="YouTube"
            v-model="profile.youtube"
          ></v-text-field>
        </div>
      </div>
    </div>
    <div class="form-btn-box">
      <button type="button" class="warn">Cancel</button>
      <button type="button" class="primary">
        <i class="material-symbols-outlined"> check </i>
        Update Profile
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AccountDetails",
  setup() {
    const profile = ref({
      firstName: "Olivia",
      lastName: "John",
      email: "olivia@trezo.com",
      phone: "+1 444 555 6699",
      address: "84 S. Arrowhead Court Branford",
      country: "United States",
      dob: "1985-10-15",
      gender: "Female",
      skills: ["Leadership"],
      profession: "Software Developer",
      companyName: "Trezo Admin",
      companyWebsite: "http://website.com",
      bio: "It makes me feel...",
      facebook: "https://www.facebook.com/",
      x: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/",
    });

    const countries = ref([
      "Switzerland",
      "New Zealand",
      "Germany",
      "United States",
      "Japan",
      "Netherlands",
      "Sweden",
      "Canada",
      "United Kingdom",
      "Australia",
    ]);

    const genders = ref(["Male", "Female", "Custom"]);
    const skills = ref([
      "Leadership",
      "Project Management",
      "Data Analysis",
      "Teamwork",
      "Web Development",
    ]);
    const professions = ref([
      "Financial Manager",
      "IT Manager",
      "Software Developer",
      "Physician Assistant",
      "Data Scientist",
    ]);

    return {
      profile,
      countries,
      genders,
      skills,
      professions,
    };
  },
});
</script>

<style lang="scss" scoped>
.account-settings-card {
  h5 {
    margin-bottom: 7px;
  }
  p {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .account-settings-card {
    p {
      margin-bottom: 17px;
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .account-settings-card {
    p {
      margin-bottom: 20px;
    }
  }
}
</style>
