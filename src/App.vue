<template>
  <TheHeader />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import { authService } from "@/services/FirebaseConfig";
import { onMounted } from "vue";

onMounted(() => {
  authService.startChangeListener();
});
</script>

<style scoped></style>
