<template>
  <v-card
    class="about-me-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">About Me</h5>
    </div>
    <div class="about-me-content">
      <h6>Introduction</h6>
      <p>
        Alice Johnson, a visionary UX/UI designer, blends creativity with
        user-centric design principles to craft seamless digital experiences.
        With a passion for innovation and a knack for understanding user needs,
        [Your Name] has become a driving force in the ever-evolving landscape of
        digital design. This 5000-word biography aims to delve into Alice's
        journey, from humble beginnings to becoming a recognized name in the
        realm of user experience and interface design.
      </p>
      <h6>Professional Beginnings</h6>
      <p>
        Upon graduating, Alice embarked on their professional journey, eager to
        make an impact in the world of design. They initially gained experience
        working at VivoTech, where they collaborated with cross-functional teams
        to deliver user-centric solutions for various clients. This early
        exposure provided invaluable insights into the complexities of design
        processes and solidified Alice's commitment to enhancing user
        experiences.
      </p>
      <h6>Expertise in UX/UI Design</h6>
      <p>
        Driven by a desire for continuous growth, Alice delved deeper into the
        nuances of UX/UI design, staying abreast of emerging trends,
        technologies, and methodologies. They immersed themselves in user
        research, wireframing, prototyping, and usability testing, refining
        their craft with each project undertaken.
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.about-me-card {
  .about-me-content {
    border-top: 1px solid var(--borderColor);
    padding-top: 25px;

    h6 {
      font-size: 16px;
      margin-bottom: 10px;

      &:not(:first-child) {
        margin-top: 25px;
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .about-me-card {
    .about-me-content {
      padding-top: 17px;

      h6 {
        font-size: 14px;

        &:not(:first-child) {
          margin-top: 17px;
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .about-me-card {
    .about-me-content {
      padding-top: 20px;

      h6 {
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-me-card {
    .about-me-content {
      h6 {
        font-size: 15px;
      }
    }
  }
}
</style>
