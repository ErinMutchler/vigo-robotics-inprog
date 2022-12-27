<template>
  <v-text-field></v-text-field>
  <EditorToolbarButton tooltip="Save Project"><v-icon icon="mdi-content-save" size="x-large" /></EditorToolbarButton>
  <EditorToolbarButton tooltip="Create Project"><v-icon icon="mdi-plus-circle" size="x-large" /></EditorToolbarButton>
  <EditorToolbarButton tooltip="Load Project"><v-icon icon="mdi-folder-open" size="x-large" /></EditorToolbarButton>
  <EditorToolbarButton tooltip="Delete Project"><v-icon icon="mdi-delete" size="x-large" /></EditorToolbarButton>
  <EditorToolbarButton tooltip="Download Project"><v-icon icon="mdi-download" size="x-large" /></EditorToolbarButton>
</template>

<script setup>
import EditorToolbarButton from "@/components/EditorToolbarButton.vue";
</script>

<style scoped>

</style>