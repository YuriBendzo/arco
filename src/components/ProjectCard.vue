<template>
  <div class="project-card" ref="cardRef">
    <div class="project-card__image-wrap">
      <img
        :src="project.image"
        :alt="project.title"
        class="project-card__image"
        loading="lazy"
      />
      <div class="project-card__overlay">
        <div class="project-card__info">
          <span class="project-card__category text--label">{{
            project.category
          }}</span>
          <h3 class="project-card__title heading--card">{{ project.title }}</h3>
          <span class="project-card__year">{{ project.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const cardRef = ref(null);

defineExpose({ cardRef });
</script>

<style lang="scss" scoped>
.project-card {
  break-inside: avoid;
  margin-bottom: $space-md;
  cursor: pointer;

  @include respond-to("md") {
    margin-bottom: $space-lg;
  }

  &__image-wrap {
    position: relative;
    overflow: hidden;
    border-radius: $radius-sm;
  }

  &__image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform $transition-slow;
  }

  &__overlay {
    @include overlay(rgba(10, 10, 10, 0));
    display: flex;
    align-items: flex-end;
    padding: $space-md;
    transition: background $transition-base;

    @include respond-to("md") {
      padding: $space-lg;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    transform: translateY(10px);
    opacity: 0;
    transition:
      transform $transition-base,
      opacity $transition-base;
  }

  &__year {
    font-size: $fs-xs;
    color: rgba(255, 255, 255, 0.5);
    font-weight: $fw-light;
  }

  &__image-wrap:hover {
    .project-card__image {
      transform: scale(1.05);
    }

    .project-card__overlay {
      background: rgba(10, 10, 10, 0.55);
    }

    .project-card__info {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
