<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn
        @click="buttonProps.onClick"
      v-bind="props"
      icon
      :class="
        isHovering
          ? ['bg-vcpl-white', 'color-vcpl-secondary']
          : ['bg-vcpl-secondary', 'color-vcpl-white']
      "
      style="border-radius: 0; margin: 0"
    >
      <v-tooltip activator="parent" location="top">{{
        buttonProps.tooltip
      }}</v-tooltip>
      <v-icon :icon="buttonProps.icon" />
    </v-btn>
  </v-hover>
</template>

<script setup>
const buttonProps = defineProps({
  tooltip: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: false,
  }
});
</script>

<style scoped></style>
