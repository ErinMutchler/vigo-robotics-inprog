<template>
  <TheHeader />
  <RouterView />
  <div style="height: calc(100vh - 8rem)"></div>
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

<style scoped></style>
