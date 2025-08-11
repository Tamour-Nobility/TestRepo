<template>
  <div class="footer-area text-center mt-25 bg-white border-top-radius">
    <p>
      ©
      <span>Trezo</span>
      is Proudly Owned by
      <a href="https://envytheme.com/" class="fw-semibold" target="_blank">
        EnvyTheme
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.footer-area {
  padding: 19.5px 25px;

  span {
    color: #ad63f6;
  }
  a {
    color: var(--primaryColor);
  }
}

@media only screen and (max-width: 767px) {
  .footer-area {
    padding: 15px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .footer-area {
    padding: 20px;
  }
}
</style>
