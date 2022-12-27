<template>
  <header>
    <HeaderLogo />
    <HeaderEditorToggle />
  </header>
</template>

<script setup>
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderEditorToggle from "@/components/HeaderEditorToggle.vue";

</script>

<style scoped>
header {
  align-items: center;
  background: var(--vcpl-primary);
  display: flex;
  height: 4rem;
  justify-content: space-between;
}
</style>