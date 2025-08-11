<template>
  <v-card
    class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Text Editor</h5>
    </div>
    <TextEditor />
  </v-card>
</template>

<script>
import TextEditor from "@/components/Common/TextEditor.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Editors",
  components: {
    TextEditor,
  },
};
</script>
