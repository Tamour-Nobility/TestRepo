<template>
  <div class="faq-area pt-150">
    <div class="container">
      <div class="section-title text-center ml-auto mr-auto">
        <div class="sub-title d-inline-block position-relative">
          <span class="d-inline-block position-relative text-purple">
            FAQ's
          </span>
        </div>
        <h2 class="mb-0">
          Do You Have Questions? We Have Answers (Well, Most of the Time!)
        </h2>
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
      </v-expansion-panels>
    </div>
  </div>
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
.v-expansion-panel--active
  > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
  min-height: initial !important;
}
.faq-area {
  .v-expansion-panels {
    max-width: 738px;
    .v-expansion-panel {
      background-color: var(--whiteColor);

      .v-expansion-panel-title {
        &:hover {
          background-color: rgba(26, 27, 31, 0.08);
        }
      }
    }
  }
}
</style>
