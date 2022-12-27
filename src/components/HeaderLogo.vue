<template>
  <img src="@/assets/icons/vcpl.svg" alt="logo" v-if="mdAndUp" />
  <img src="@/assets/icons/vcpl-min.svg" alt="logo" v-else />
</template>

<script setup>
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();
</script>

<style scoped>
img {
  pointer-events: none;
  user-select: none;
  height: 3rem;
  margin: 0 2rem;
}
</style>
