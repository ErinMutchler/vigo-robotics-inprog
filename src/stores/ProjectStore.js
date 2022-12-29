import { defineStore } from "pinia";
import { useRoute } from "vue-router";


export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    name: "",
    type: "",
    firestoreID: "",
    author: "",
    workspace: "",
    code: "",
    unsavedChangesExist: false,
  }),
  actions: {
    reset() {
      const route = useRoute();
      this.name = "";
      this.type = route.path == "/pyton" ? "python" : "blockly";
      this.firestoreID = "";
      this.workspace = "";
      this.code = "";
      this.unsavedChangesExist = false;
    },
  },
});
