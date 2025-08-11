<template>
  <div class="avatar-upload">
    <div class="avatar-edit">
      <input
        type="file"
        id="imageUpload"
        accept=".png, .jpg, .jpeg"
        @change="handleFileChange"
      />
      <label for="imageUpload"></label>
    </div>
    <div class="avatar-preview">
      <div
        id="imagePreview"
        :style="{ backgroundImage: `url(${previewImage})` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AvatarPreview",
  setup() {
    const previewImage = ref<string>(
      "https://angular.envytheme.com/trezo-mt/images/admin.png"
    );

    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            previewImage.value = e.target.result as string;
          }
        };
        reader.readAsDataURL(input.files[0]);
      }
    };

    return {
      previewImage,
      handleFileChange,
    };
  },
});
</script>
