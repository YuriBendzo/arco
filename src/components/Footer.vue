<template>
  <footer class="footer">
    <div class="footer__inner container--wide">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__logo"
            >ARCO<span class="footer__logo-dot"></span
          ></span>
          <p class="footer__tagline">Architecture & Interior Design</p>
        </div>

        <div class="footer__columns">
          <div class="footer__column">
            <h4 class="footer__column-title">Studio</h4>
            <ul class="footer__column-list">
              <li>
                <router-link to="/" class="footer__column-link"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link to="/projects" class="footer__column-link"
                  >Projects</router-link
                >
              </li>
              <li>
                <router-link to="/contact" class="footer__column-link"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__column-title">Connect</h4>
            <ul class="footer__column-list">
              <li><a href="#" class="footer__column-link">Instagram</a></li>
              <li><a href="#" class="footer__column-link">Pinterest</a></li>
              <li><a href="#" class="footer__column-link">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">
          &copy; {{ year }} ARCO Studio. All rights reserved.
        </p>
        <p class="footer__credit">Crafted with precision</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer {
  background: $color-text;
  color: rgba(255, 255, 255, 0.65);
  padding: $space-2xl 0 $space-lg;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: $space-2xl;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: $space-xl;

    @include respond-to("md") {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: $space-xs;
  }

  &__logo {
    font-family: $font-display;
    font-size: $fs-xl;
    font-weight: $fw-bold;
    color: white;
    letter-spacing: $letter-spacing-tight;
  }

  &__logo-dot {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: $color-accent;
    margin-left: 1px;
    vertical-align: baseline;
  }

  &__tagline {
    font-size: $fs-sm;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
  }

  &__columns {
    display: flex;
    gap: $space-2xl;
  }

  &__column-title {
    font-size: $fs-xs;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: $space-sm;
  }

  &__column-list {
    display: flex;
    flex-direction: column;
    gap: $space-xs;
  }

  &__column-link {
    font-size: $fs-sm;
    color: rgba(255, 255, 255, 0.65);
    transition: color $transition-fast;

    &:hover {
      color: white;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: $space-lg;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    @include respond-to("md") {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copy,
  &__credit {
    font-size: $fs-xs;
    color: rgba(255, 255, 255, 0.3);
  }
}
</style>
