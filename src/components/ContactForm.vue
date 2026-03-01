<template>
  <form class="contact-form" @submit.prevent="handleSubmit" ref="formRef">
    <div
      class="contact-form__group"
      v-for="(field, i) in fields"
      :key="field.name"
      ref="fieldRefs"
    >
      <div class="contact-form__field">
        <input
          v-if="field.type !== 'textarea'"
          :type="field.type"
          :id="field.name"
          :name="field.name"
          class="contact-form__input"
          :class="{ 'contact-form__input--filled': formData[field.name] }"
          v-model="formData[field.name]"
          required
        />
        <textarea
          v-else
          :id="field.name"
          :name="field.name"
          class="contact-form__input contact-form__input--textarea"
          :class="{ 'contact-form__input--filled': formData[field.name] }"
          v-model="formData[field.name]"
          required
        ></textarea>
        <label :for="field.name" class="contact-form__label">{{
          field.label
        }}</label>
        <span
          class="contact-form__line"
          :class="{ 'contact-form__line--textarea': field.type === 'textarea' }"
        ></span>
      </div>
    </div>

    <button type="submit" class="contact-form__submit" ref="submitRef">
      <span>Send Message</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </button>
  </form>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fields = [
  { name: "name", type: "text", label: "Your Name" },
  { name: "email", type: "email", label: "Email Address" },
  { name: "subject", type: "text", label: "Subject" },
  { name: "message", type: "textarea", label: "Your Message" },
];

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formRef = ref(null);
const fieldRefs = ref([]);
const submitRef = ref(null);

const handleSubmit = () => {
  alert("Thank you for your message! We will get back to you soon.");
  Object.keys(formData).forEach((key) => (formData[key] = ""));
};

onMounted(async () => {
  await nextTick();

  const elements = [...(fieldRefs.value || []), submitRef.value].filter(
    Boolean,
  );

  gsap.from(elements, {
    y: 30,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: formRef.value,
      start: "top 80%",
    },
  });
});
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: $space-lg;
  max-width: 600px;

  &__group {
    will-change: transform, opacity;
  }

  &__field {
    position: relative;
  }

  &__input {
    width: 100%;
    padding: $space-sm 0;
    border: none;
    border-bottom: 1px solid $color-border;
    background: transparent;
    font-size: $fs-md;
    font-weight: $fw-light;
    color: $color-text;
    transition: border-color $transition-base;
    outline: none;
    resize: none;

    &:focus {
      border-color: $color-text;
    }

    &:focus ~ .contact-form__label,
    &--filled ~ .contact-form__label {
      transform: translateY(-1.75rem);
      font-size: $fs-xs;
      color: $color-accent;
    }

    &:focus ~ .contact-form__line {
      transform: scaleX(1);
    }

    &--textarea {
      min-height: 120px;
    }
  }

  &__label {
    position: absolute;
    left: 0;
    top: $space-sm;
    font-size: $fs-base;
    font-weight: $fw-light;
    color: $color-text-muted;
    pointer-events: none;
    transition: all $transition-base;
  }

  &__line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: $color-text;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $transition-base;
    &--textarea {
      bottom: 8px;
    }
  }

  &__submit {
    display: inline-flex;
    align-items: center;
    gap: $space-xs;
    align-self: flex-start;
    margin-top: $space-sm;
    padding: 1rem 2.5rem;
    background: $color-text;
    color: $color-surface;
    font-size: $fs-sm;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    transition: all $transition-base;
    will-change: transform, opacity;
    opacity: 1;

    &:hover {
      background: $color-accent;

      svg {
        transform: translate(3px, -3px);
      }
    }

    svg {
      transition: transform $transition-fast;
    }
  }
}
</style>
