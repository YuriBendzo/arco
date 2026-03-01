<template>
  <section class="works section" ref="sectionRef">
    <div class="works__header container">
      <span class="text--label works__label" ref="labelRef">Portfolio</span>
      <h2 class="heading--section works__title" ref="titleRef">
        Selected Works
      </h2>
    </div>

    <div class="works__grid container" ref="gridRef">
      <div class="works__masonry">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          ref="cardRefs"
        />
      </div>
    </div>

    <div class="works__action container" ref="actionRef" v-if="showAction">
      <router-link to="/projects" class="works__btn">
        <span>View All Projects</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="M5 12H19M19 12L12 5M19 12L12 19" />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard.vue";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
  showAction: {
    type: Boolean,
    default: true,
  },
});

const sectionRef = ref(null);
const labelRef = ref(null);
const titleRef = ref(null);
const gridRef = ref(null);
const actionRef = ref(null);
const cardRefs = ref([]);

onMounted(async () => {
  await nextTick();

  gsap.from(labelRef.value, {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 85%",
    },
  });

  gsap.from(titleRef.value, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 80%",
    },
  });

  const cardElements = cardRefs.value
    ?.map((c) => c?.cardRef || c?.$el)
    .filter(Boolean);

  if (cardElements && cardElements.length) {
    gsap.from(cardElements, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.value,
        start: "top 80%",
      },
    });
  }

  if (actionRef.value) {
    gsap.from(actionRef.value, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: actionRef.value,
        start: "top 90%",
      },
    });
  }
});
</script>

<style lang="scss" scoped>
.works {
  background: $color-bg;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $space-sm;
    margin-bottom: $space-xl;

    @include respond-to("md") {
      margin-bottom: $space-2xl;
    }
  }

  &__masonry {
    columns: 1;
    column-gap: $space-md;

    @include respond-to("sm") {
      columns: 2;
    }

    @include respond-to("lg") {
      columns: 3;
      column-gap: $space-lg;
    }
  }

  &__action {
    display: flex;
    justify-content: center;
    margin-top: $space-xl;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: $space-xs;
    padding: 1rem 2.5rem;
    border: 1px solid $color-border;
    color: $color-text;
    font-size: $fs-sm;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    transition: all $transition-base;

    &:hover {
      background: $color-text;
      color: $color-surface;
      border-color: $color-text;

      svg {
        transform: translateX(4px);
      }
    }

    svg {
      transition: transform $transition-fast;
    }
  }
}
</style>
