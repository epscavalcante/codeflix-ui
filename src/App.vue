<template>
  <main class="flex min-h-screen flex-col items-center">
    <img class="h-8 w-8" src="./assets/vue.svg" alt="Your Company" />
    Hello my friend

    <section class="p-9">
      <Button :left-icon="EnvelopeIcon" disabled> Opaaa </Button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/20/solid";
import Button from "./components/Button.vue";
</script>
<style scoped></style>
