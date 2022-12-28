<template>
  <v-btn-toggle rounded="xl" style="position: absolute; top: 2rem; left: 50%; transform: translate(-50%, -50%)">
    <v-btn
      @click="router.push('/blockly')"
      :class="[
        route.path === '/blockly' ? 'bg-vcpl-secondary' : 'bg-vcpl-accent',
        'text-white',
      ]"
    >
      <img
        src="@/assets/icons/blockly.svg"
        alt="blockly"
        class="languageIcon"
      />
      <span class="mx-2" v-if="lgAndUp">Blockly</span>
    </v-btn>
    <v-btn
      @click="router.push('/python')"
      :class="[
        route.path === '/python' ? 'bg-vcpl-secondary' : 'bg-vcpl-accent',
        'text-white',
      ]"
    >
      <span class="mx-2" v-if="lgAndUp">Python</span>
      <img src="@/assets/icons/python.svg" alt="python" class="languageIcon" />
    </v-btn>
  </v-btn-toggle>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { useRoute, useRouter } from "vue-router";

const { lgAndUp } = useDisplay();
const router = useRouter();
const route = useRoute();
</script>

<style scoped>
.languageIcon {
  height: 2rem;
}
</style>
