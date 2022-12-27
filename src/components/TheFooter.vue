<template>
  <footer>
    <EditorToolbar />
  </footer>
</template>

<script setup>
import EditorToolbar from "@/components/EditorToolbar.vue";
</script>

<style scoped>
footer {
  align-items: center;
  background: var(--vcpl-primary);
  display: flex;
  height: 4rem;
  justify-content: center;
}
</style>