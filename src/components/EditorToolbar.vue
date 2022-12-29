<template>
  <v-toolbar
    density="compact"
    class="rounded-lg"
    style="border: 2px solid #e1523d"
  >
    <v-text-field
      v-if="authStore.uid"
      placeholder="Project name"
      variant="solo"
      single-line
      hide-details
      style="width: 200px"
      color="primary"
    ></v-text-field>

    <EditorToolbarButton
      v-if="authStore.uid"
      icon="mdi-content-save"
      tooltip="Save Project"
    />
    <EditorToolbarButton
      v-if="authStore.uid"
      icon="mdi-plus-circle"
      tooltip="Create Project"
      :on-click="createProject"
    />
    <EditorToolbarButton
      v-if="authStore.uid"
      icon="mdi-folder-open"
      tooltip="Load Project"
    />
    <EditorToolbarButton
      v-if="authStore.uid"
      icon="mdi-delete"
      tooltip="Delete Project"
    />
    <EditorToolbarButton icon="mdi-download" tooltip="Download Project" />
  </v-toolbar>
</template>

<script setup>
import EditorToolbarButton from "@/components/EditorToolbarButton.vue";
import { useAuthStore } from "@/stores/AuthStore";
import {useProjectStore} from "@/stores/ProjectStore";
import {onMounted} from "vue";

const authStore = useAuthStore();
const projectStore = useProjectStore();

onMounted(() => {
  projectStore.reset();
});

const createProject = () => {
  if (projectStore.unsavedChangesExist && !confirm("Unsaved Changes Exist. Are you sure you want to start a new project?")) {
    return;
  }

  projectStore.reset();
};
</script>

<style scoped></style>
