<template>
  <div class="row">
    <div class="col-md-6">
      <v-card
        class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Basic</h5>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.94539481518!2d-74.26675559025065!3d40.69739290398433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678355274384!5m2!1sen!2sbd"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-card>
    </div>
    <div class="col-md-6">
      <v-card
        class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Markers</h5>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48374.312678948365!2d-74.21707476084916!3d40.73134319969024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2538cdf40ffff%3A0xdc3c46d2765f6a68!2sPerfect%20Near%20NYC!5e0!3m2!1sen!2sbd!4v1678355353682!5m2!1sen!2sbd"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-card>
    </div>
    <div class="col-md-6">
      <v-card
        class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Satellite</h5>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61412.70164319616!2d-74.21707476084921!3d40.73134319969024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2538cdf40ffff%3A0xdc3c46d2765f6a68!2sPerfect%20Near%20NYC!5e1!3m2!1sen!2sbd!4v1678355628170!5m2!1sen!2sbd"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-card>
    </div>
    <div class="col-md-6">
      <v-card
        class="trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="v-card-header">
          <h5 class="mb-0">Info Window</h5>
        </div>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1rQt1Hl5N5hmUTaW5Gei3gsAii1o&ehbc=2E312F"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Maps",
};
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  border: none;
  height: 400px;
}
</style>
