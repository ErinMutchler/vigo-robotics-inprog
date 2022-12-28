<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-btn v-bind="props" icon :class="isHovering ? ['bg-vcpl-white', 'color-vcpl-secondary'] : ['bg-vcpl-secondary', 'color-vcpl-white'] " style="border-radius: 0; margin: 0;">
      <v-tooltip activator="parent" >{{buttonProps.tooltip}}</v-tooltip>
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
});
</script>

<style scoped></style>



