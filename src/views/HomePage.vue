<template>
  <div class="home">
    <HeroSection />

    <WorksGrid :projects="featuredProjects" :showAction="true" />

    <section class="about section" ref="aboutSection">
      <div class="about__inner container">
        <div class="about__content" ref="aboutContent">
          <span class="text--label">About ARCO</span>
          <h2 class="heading--subsection about__title">
            We believe in the power of space to shape experience.
          </h2>
          <p class="text--body about__text">
            ARCO Studio is an architecture and interior design practice founded
            on the principle that great design should feel effortless. We create
            spaces that are minimal yet warm, bold yet restrained — always in
            service of the people who inhabit them.
          </p>
          <router-link to="/contact" class="about__link">
            <span>Get in Touch</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </router-link>
        </div>
        <div class="about__visual" ref="aboutVisual">
          <div class="about__stat">
            <span class="about__stat-number">15+</span>
            <span class="about__stat-label">Years of Experience</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number">80+</span>
            <span class="about__stat-label">Projects Completed</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number">12</span>
            <span class="about__stat-label">Design Awards</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/HeroSection.vue";
import WorksGrid from "@/components/WorksGrid.vue";
import { projects } from "@/data/projects.js";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = projects.slice(0, 4);

const aboutSection = ref(null);
const aboutContent = ref(null);
const aboutVisual = ref(null);

onMounted(async () => {
  await nextTick();

  if (aboutContent.value) {
    gsap.from(aboutContent.value.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutSection.value,
        start: "top 75%",
      },
    });
  }

  if (aboutVisual.value) {
    gsap.from(aboutVisual.value.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutVisual.value,
        start: "top 80%",
      },
    });
  }
});
</script>

<style lang="scss" scoped>
.about {
  background: $color-bg-alt;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: $space-2xl;

    @include respond-to("md") {
      flex-direction: row;
      align-items: center;
      gap: $space-3xl;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $space-md;
    flex: 1.2;
  }

  &__title {
    margin-top: $space-xs;
  }

  &__text {
    max-width: 520px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: $space-xs;
    margin-top: $space-sm;
    font-size: $fs-sm;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    color: $color-text;
    transition: color $transition-fast;
    @include hover-line;

    &:hover {
      color: $color-accent;
    }

    svg {
      transition: transform $transition-fast;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }

  &__visual {
    display: flex;
    flex-direction: column;
    gap: $space-lg;
    flex: 0.8;

    @include respond-to("md") {
      align-items: flex-end;
      text-align: right;
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &-number {
      font-family: $font-display;
      font-size: $fs-3xl;
      font-weight: $fw-bold;
      letter-spacing: $letter-spacing-tight;
      color: $color-text;
      line-height: 1;
    }

    &-label {
      font-size: $fs-sm;
      color: $color-text-muted;
      letter-spacing: $letter-spacing-wide;
      text-transform: uppercase;
    }
  }
}
</style>
