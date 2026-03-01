<template>
  <div class="projects-page">
    <section class="projects-page__header section">
      <div class="container">
        <span class="text--label" ref="labelRef">Our Work</span>
        <h1 class="heading--section projects-page__title" ref="titleRef">
          All Projects
        </h1>
        <p class="text--lead projects-page__subtitle" ref="subtitleRef">
          A curated selection of architectural and interior design projects that
          define our approach to space-making.
        </p>
      </div>
    </section>

    <WorksGrid :projects="projects" :showAction="false" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import WorksGrid from "@/components/WorksGrid.vue";
import { projects } from "@/data/projects.js";

const labelRef = ref(null);
const titleRef = ref(null);
const subtitleRef = ref(null);

onMounted(async () => {
  await nextTick();

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.2,
  });

  tl.from(labelRef.value, { y: 20, opacity: 0, duration: 0.5 })
    .from(titleRef.value, { y: 40, opacity: 0, duration: 0.7 }, "-=0.3")
    .from(subtitleRef.value, { y: 20, opacity: 0, duration: 0.6 }, "-=0.3");
});
</script>

<style lang="scss" scoped>
.projects-page {
  padding-top: 100px;

  &__header {
    padding-bottom: $space-xl;

    .container {
      display: flex;
      flex-direction: column;
      gap: $space-sm;
    }
  }

  &__title {
    margin-top: $space-xs;
  }

  &__subtitle {
    max-width: 560px;
  }
}
</style>
