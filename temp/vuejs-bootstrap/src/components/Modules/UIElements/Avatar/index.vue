<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-xxl-4">
      <SingleUserExample />
    </div>
    <div class="col-lg-6 col-xxl-4">
      <GroupUserExample />
    </div>
    <div class="col-lg-6 col-xxl-4">
      <SingleUserWithBadgeExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <AvatarSizeRoundedCircleExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <AvatarSizeSimpleRoundedExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <TextAvatarSizeRoundedCircleExample />
    </div>
    <div class="col-lg-6 overflow-hidden">
      <TextAvatarSizeSimpleRoundedExample />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleUserExample from "./SingleUserExample.vue";
import GroupUserExample from "./GroupUserExample.vue";
import SingleUserWithBadgeExample from "./SingleUserWithBadgeExample.vue";
import AvatarSizeRoundedCircleExample from "./AvatarSizeRoundedCircleExample.vue";
import AvatarSizeSimpleRoundedExample from "./AvatarSizeSimpleRoundedExample.vue";
import TextAvatarSizeRoundedCircleExample from "./TextAvatarSizeRoundedCircleExample.vue";
import TextAvatarSizeSimpleRoundedExample from "./TextAvatarSizeSimpleRoundedExample.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Avatar",
  components: {
    SingleUserExample,
    GroupUserExample,
    SingleUserWithBadgeExample,
    AvatarSizeRoundedCircleExample,
    AvatarSizeSimpleRoundedExample,
    TextAvatarSizeRoundedCircleExample,
    TextAvatarSizeSimpleRoundedExample,
  },
});
</script>
