<template>
  <button :class="buttonClasses" :disabled="true">
    <svg
      v-if="props.loading"
      class="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <component
      v-if="!props.loading"
      :is="props.leftIcon as any"
      class="h-5 w-5 mr-2"
    />
    <slot v-if="!props.loading" />

    <component
      v-if="!props.loading"
      :is="props.rightIcon as any"
      class="h-5 w-5 ml-2"
    />
  </button>
</template>

<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";

interface Props {
  leftIcon?: Object;
  rightIcon?: Object;
  loading?: boolean;
  disabled?: boolean;
  intent?: "primary" | "secondary" | "danger" | "text";
  size?: "small" | "normal" | "large" | "extra-large";
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  intent: "primary",
  disabled: false,
  size: "normal",
});

const buttonClasses = computed(() => {
  return cva(
    "inline-flex items-center border-2-bottom justify-center text-base rounded",
    {
      variants: {
        intent: {
          primary: "bg-black hover:bg-black/80 text-white hover:text-gray-100",
          secondary:
            "bg-black/5 hover:bg-black/10 text-black hover:text-gray-700",
          text: "bg-transparent hover:bg-gray-100/10 text-black hover:text-gray-700",
          danger: "bg-red-600 hover:bg-red-700 text-white hover:text-gray-100",
        },
        disabled: {
          true: "!bg-gray-200 !text-gray-500 !cursor-not-allowed",
          false: "cursor-pointer",
        },
        size: {
          small: "min-h-[32px] px-3 py-0.5",
          normal: "min-h-[36px] px-3 py-2",
          large: "min-h-[40px] px-6 py-3",
          "extra-large": "min-h-[46px] px-8 py-4",
        },
      },
    }
  )({
    intent: props.intent,
    disabled: props.disabled,
    size: props.size,
  });
});
</script>

<style scoped></style>
