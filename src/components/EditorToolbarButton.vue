<template>
  <v-btn
    :icon="props.icon"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
    :class="
      isHovering
        ? ['bg-vcpl-white', 'color-vcpl-secondary']
        : ['bg-vcpl-secondary', 'color-vcpl-white']
    "
  >
    <slot></slot>
    <v-tooltip activator="parent" location="top" :contained="true">{{
      props.tooltip
    }}</v-tooltip>
  </v-btn>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tooltip: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const isHovering = ref(false);
</script>

<style scoped></style>
