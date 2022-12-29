<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import { authService } from "@/services/FirebaseConfig";
import { onMounted } from "vue";
import TheFooter from "@/components/TheFooter.vue";

onMounted(() => {
  authService.startChangeListener();
});
</script>

<style scoped>
</style>
