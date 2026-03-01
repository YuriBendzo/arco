<template>
  <section class="hero">
    <div class="hero__video-wrap">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster=""
      >
        <source src="/videos/hero-bg.webm" type="video/webm" />
      </video>
      <div class="hero__overlay"></div>
    </div>

    <div class="hero__content container">
      <div class="hero__text" ref="heroText">
        <span class="hero__label text--label"
          >Architecture & Interior Design</span
        >
        <h1 class="hero__title heading--hero">
          <span class="hero__title-line" ref="titleLine1">Designing</span>
          <span class="hero__title-line" ref="titleLine2">Spaces That</span>
          <span
            class="hero__title-line hero__title-line--accent"
            ref="titleLine3"
            >Inspire.</span
          >
        </h1>
        <p class="hero__subtitle" ref="subtitle">
          We craft minimalist architecture and interiors that balance form,
          function, and timeless beauty.
        </p>
        <router-link to="/projects" class="hero__cta" ref="cta">
          <span>View Our Work</span>
          <svg
            class="hero__cta-arrow"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="hero__scroll" ref="scrollIndicator">
      <span class="hero__scroll-text">Scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const heroText = ref(null);
const titleLine1 = ref(null);
const titleLine2 = ref(null);
const titleLine3 = ref(null);
const subtitle = ref(null);
const cta = ref(null);
const scrollIndicator = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.3,
  });

  gsap.set([titleLine1.value, titleLine2.value, titleLine3.value], {
    y: 80,
    opacity: 0,
  });
  gsap.set(subtitle.value, { y: 30, opacity: 0 });
  gsap.set(cta.value?.$el || cta.value, { y: 20, opacity: 0 });
  gsap.set(scrollIndicator.value, { opacity: 0 });

  tl.to(titleLine1.value, { y: 0, opacity: 1, duration: 1 })
    .to(titleLine2.value, { y: 0, opacity: 1, duration: 1 }, "-=0.7")
    .to(titleLine3.value, { y: 0, opacity: 1, duration: 1 }, "-=0.7")
    .to(subtitle.value, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
    .to(
      cta.value?.$el || cta.value,
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3",
    )
    .to(scrollIndicator.value, { opacity: 1, duration: 0.6 }, "-=0.2");
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &__video-wrap {
    position: absolute;
    inset: 0;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    @include overlay;
    background: linear-gradient(
      180deg,
      rgba(10, 10, 10, 0.3) 0%,
      rgba(10, 10, 10, 0.5) 20%,
      rgba(10, 10, 10, 0.75) 40%
    );
  }

  &__content {
    position: relative;
    z-index: 2;
    padding-bottom: clamp(4rem, 8vh, 8rem);
    width: 100%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: $space-md;
    max-width: 800px;
  }

  &__title {
    display: flex;
    flex-direction: column;

    &-line {
      display: block;
      will-change: transform, opacity;

      &--accent {
        color: $color-accent;
      }
    }
  }

  &__subtitle {
    font-size: $fs-md;
    font-weight: $fw-light;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.65);
    max-width: 500px;
    margin-top: $space-xs;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $space-xs;
    margin-top: $space-sm;
    padding: 0.875rem 2rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
    font-size: $fs-sm;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    transition: all $transition-base;
    will-change: transform, opacity;
    width: fit-content;

    &:hover {
      background: white;
      color: $color-text;
      border-color: white;
    }

    &-arrow {
      transition: transform $transition-fast;
    }

    &:hover &-arrow {
      transform: translate(3px, -3px);
    }
  }

  &__scroll {
    position: absolute;
    bottom: $space-lg;
    right: $gutter;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-xs;
    z-index: 2;

    @media (max-width: $bp-md) {
      display: none;
    }
  }

  &__scroll-text {
    font-size: $fs-xs;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    writing-mode: vertical-rl;
  }

  &__scroll-line {
    width: 1px;
    height: 60px;
    background: rgba(255, 255, 255, 0.25);
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: $color-accent;
      animation: scrollLine 2s ease-in-out infinite;
    }
  }
}

@keyframes scrollLine {
  0% {
    top: -100%;
  }
  50% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
</style>
