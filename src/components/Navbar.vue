<template>
  <nav
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMobileOpen }"
  >
    <div class="navbar__inner container--wide">
      <router-link to="/" class="navbar__logo" @click="closeMobile">
        <span class="navbar__logo-text">ARCO</span>
        <span class="navbar__logo-dot"></span>
      </router-link>

      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--active': isMobileOpen }"
        @click="toggleMobile"
        aria-label="Toggle navigation"
      >
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
      </button>

      <div class="navbar__menu" :class="{ 'navbar__menu--open': isMobileOpen }">
        <ul class="navbar__list">
          <li class="navbar__item" v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="navbar__link"
              active-class="navbar__link--active"
              @click="closeMobile"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMobileOpen = ref(false);

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value;
  document.body.style.overflow = isMobileOpen.value ? "hidden" : "";
};

const closeMobile = () => {
  isMobileOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $z-nav;
  padding: $space-md $space-xs;
  transition:
    background $transition-base,
    padding $transition-base,
    backdrop-filter $transition-base;

  &--scrolled {
    background: rgba($color-bg, 0.92);
    backdrop-filter: blur(20px);
    padding: $space-sm $space-xs;
    border-bottom: 1px solid rgba($color-border, 0.5);
  }

  &__inner {
    @include flex-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0;
    z-index: $z-nav + 1;
  }

  &__logo-text {
    font-family: $font-display;
    font-size: $fs-xl;
    font-weight: $fw-bold;
    letter-spacing: $letter-spacing-tight;
    color: $color-text;
    transition: color $transition-base;

    .navbar--scrolled & {
      color: $color-text;
    }

    .navbar--open:not(.navbar--scrolled) & {
      color: $color-text;
    }
  }

  &__logo-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $color-accent;
    margin-left: 2px;
    margin-bottom: 2px;
    align-self: flex-end;
  }

  &__toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 32px;
    height: 32px;
    z-index: $z-nav + 1;

    @include respond-to("md") {
      display: none;
    }

    &-line {
      display: block;
      width: 100%;
      height: 2px;
      background: $color-text;
      transition:
        transform $transition-base,
        opacity $transition-fast;
    }

    &--active {
      .navbar__toggle-line {
        &:first-child {
          transform: translateY(3.75px) rotate(45deg);
        }
        &:last-child {
          transform: translateY(-3.75px) rotate(-45deg);
        }
      }
    }
  }

  &__menu {
    display: none;

    @include respond-to("md") {
      display: block;
    }

    &--open {
      display: flex;
      position: fixed;
      inset: 0;
      width: 100dvw;
      height: 100dvh;
      background: $color-bg;
      align-items: center;
      justify-content: center;
      z-index: $z-nav;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: $space-lg;

    .navbar__menu--open & {
      flex-direction: column;
      gap: $space-xl;
    }
  }

  &__link {
    font-size: $fs-sm;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    color: $color-text-secondary;
    transition: color $transition-fast;
    @include hover-line;

    .navbar__menu--open & {
      font-size: $fs-2xl;
      font-weight: $fw-light;
      letter-spacing: $letter-spacing-tight;
      text-transform: none;
      color: $color-text;

      &::after {
        display: none;
      }
    }

    &:hover {
      color: $color-text;
    }

    &--active {
      color: $color-text;
    }
  }
}
</style>
