<template>
  <div class="contact-page">
    <section class="contact-page__header section">
      <div class="container">
        <span class="text--label" ref="labelRef">Get in Touch</span>
        <h1 class="heading--section contact-page__title" ref="titleRef">
          Let's Create Together
        </h1>
        <p class="text--lead contact-page__subtitle" ref="subtitleRef">
          Have a project in mind? We'd love to hear from you. Reach out and
          let's start a conversation about your vision.
        </p>
      </div>
    </section>

    <section class="contact-page__body">
      <div class="container">
        <div class="contact-page__layout">
          <div class="contact-page__form-wrap">
            <ContactForm />
          </div>

          <aside class="contact-page__info" ref="infoRef">
            <div class="contact-page__info-block">
              <h3 class="contact-page__info-title">Studio</h3>
              <p class="contact-page__info-text">
                123 Design Avenue<br />
                Creative Quarter<br />
                London, EC1V 9NR
              </p>
            </div>

            <div class="contact-page__info-block">
              <h3 class="contact-page__info-title">Contact</h3>
              <p class="contact-page__info-text">
                <a href="mailto:hello@arcostudio.com">hello@arcostudio.com</a
                ><br />
                <a href="tel:+442012345678">+44 (0) 20 1234 5678</a>
              </p>
            </div>

            <div class="contact-page__info-block">
              <h3 class="contact-page__info-title">Hours</h3>
              <p class="contact-page__info-text">
                Monday — Friday<br />
                9:00 AM — 6:00 PM
              </p>
            </div>

            <div class="contact-page__info-block">
              <h3 class="contact-page__info-title">Follow</h3>
              <div class="contact-page__social">
                <a href="#" class="contact-page__social-link">Instagram</a>
                <a href="#" class="contact-page__social-link">Pinterest</a>
                <a href="#" class="contact-page__social-link">LinkedIn</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "@/components/ContactForm.vue";

gsap.registerPlugin(ScrollTrigger);

const labelRef = ref(null);
const titleRef = ref(null);
const subtitleRef = ref(null);
const infoRef = ref(null);

onMounted(async () => {
  await nextTick();

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    delay: 0.2,
  });

  tl.from(labelRef.value, { y: 20, opacity: 0, duration: 0.5 })
    .from(titleRef.value, { y: 40, opacity: 0, duration: 0.7 }, "-=0.3")
    .from(subtitleRef.value, { y: 20, opacity: 0, duration: 0.6 }, "-=0.3");

  if (infoRef.value) {
    gsap.from(infoRef.value.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: infoRef.value,
        start: "top 85%",
      },
    });
  }
});
</script>

<style lang="scss" scoped>
.contact-page {
  padding-top: 100px;

  &__header {
    padding-bottom: $space-lg;

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
    max-width: 520px;
  }

  &__body {
    padding-bottom: $space-section;
  }

  &__layout {
    display: flex;
    flex-direction: column;
    gap: $space-2xl;

    @include respond-to("md") {
      flex-direction: row;
      gap: $space-3xl;
    }
  }

  &__form-wrap {
    flex: 1.3;
  }

  &__info {
    flex: 0.7;
    display: flex;
    flex-direction: column;
    gap: $space-xl;

    @include respond-to("md") {
      padding-top: $space-sm;
    }
  }

  &__info-block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__info-title {
    font-size: $fs-xs;
    font-weight: $fw-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    color: $color-text-muted;
  }

  &__info-text {
    font-size: $fs-base;
    font-weight: $fw-light;
    line-height: 1.7;
    color: $color-text;

    a {
      transition: color $transition-fast;

      &:hover {
        color: $color-accent;
      }
    }
  }

  &__social {
    display: flex;
    gap: $space-md;
  }

  &__social-link {
    font-size: $fs-sm;
    font-weight: $fw-medium;
    color: $color-text;
    transition: color $transition-fast;
    @include hover-line;

    &:hover {
      color: $color-accent;
    }
  }
}
</style>
