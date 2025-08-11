<template>
  <v-card
    class="faq-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="faq-card-content">
      <div class="title text-center ml-auto mr-auto">
        <h3>Frequently Asked Questions</h3>
        <p>
          Trezo offers customization options to tailor the platform to your
          team's unique requirements. You can customize workflows, templates,
          and dashboards to align with your processes.
        </p>
      </div>
      <v-expansion-panels v-model="panel" class="d-block ml-auto mr-auto">
        <v-expansion-panel>
          <v-expansion-panel-title> What is Trezo? </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            What features does Trezo offer?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
            <ul>
              <li class="position-relative">
                Pellentesque viverra lorem malesuada nunc tristique sapien.
              </li>
              <li class="position-relative">
                Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
              </li>
              <li class="position-relative">
                Tellus non morbi nascetur cursus etiam facilisis mi.
              </li>
              <li class="position-relative">
                Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            How can Trezo benefit my team?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Is Trezo suitable for small businesses?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Can I customize Trezo to fit my team's specific needs?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Is Trezo cloud-based or on-premises?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Does Trezo integrate with other tools?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            How secure is Trezo?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Can I try Trezo before purchasing?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            What type of customer support does Trezo provide?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            How do I get started with Trezo?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Does Trezo offer training for new users?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Is Trezo GDPR compliant?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Does Trezo offer a mobile app?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            How does billing work for Trezo?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Can I cancel my Trezo subscription at any time?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Can I track time spent on tasks with Trezo?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Does Trezo offer recurring task capabilities?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Does Trezo offer Gantt chart functionality?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Can I generate custom reports in Trezo?
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p>
              Trezo is a comprehensive project management software designed to
              help teams streamline their workflow, collaborate effectively, and
              achieve project success.
            </p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FAQ",
  data: () => ({
    panel: [0],
  }),
};
</script>

<style lang="scss" scoped>
.faq-card {
  padding: {
    top: 50px;
    bottom: 50px;
  }
  .faq-card-content {
    .title {
      margin-bottom: 35px;
      max-width: 550px;

      h3 {
        margin-bottom: 12px;
      }
      p {
        line-height: 1.7;
      }
    }
  }
}
.v-expansion-panel--active
  > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
  min-height: initial !important;
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .faq-card {
    padding: {
      top: 25px;
      bottom: 25px;
    }
    .faq-card-content {
      .title {
        margin-bottom: 20px;
        max-width: 100%;

        h3 {
          margin-bottom: 10px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .faq-card {
    padding: {
      top: 40px;
      bottom: 40px;
    }
    .faq-card-content {
      .title {
        margin-bottom: 25px;
        max-width: 550px;
      }
    }
  }
}
</style>
