<template>
  <table id="blocklyTable">
    <tr>
      <td id="blocklyArea"></td>
    </tr>
  </table>
  <div id="blocklyDiv"></div>
</template>

<script setup>
import { blocklyService } from "@/services/BlocklyService";
import {onMounted} from "vue";

onMounted(() => {
  const div = document.getElementById("blocklyDiv");
  const area = document.getElementById("blocklyArea");
  blocklyService.inject(div, area);
});

</script>

<style scoped>
#blocklyDiv {
  position: absolute;
}

#blocklyTable {
  height: calc(100vh - 8rem);
  width: 100%;
}

#blocklyArea {
  height: 99%;
}
</style>
