import Blockly from "blockly";
import options from "@/services/blockly/options"

class BlocklyService {
  constructor() {
    this.workspace = {};
  }

    inject(injectionDiv, injectionArea) {
        this.injectionDiv = injectionDiv;
        this.injectionArea = injectionArea;
        this.workspace = Blockly.inject(this.injectionArea, options);

        document.querySelectorAll('[class$="CategoryLabel"]').forEach((element) => {
            element.classList.add("categoryLabel");
        });

        document.querySelectorAll('[class$="CategoryIcon"]').forEach((element) => {
            element.classList.add("categoryIcon");
        });

        window.addEventListener(
            "resize",
            () => {
                let element = this.injectionDiv;
                let x = 0;
                let y = 0;
                while (element) {
                    x += element.offsetLeft;
                    y += element.offsetTop;
                    element = element.offsetParent;
                }
                this.injectionArea.style.left = x + "px";
                this.injectionArea.style.top = y + "px";
                this.injectionArea.style.width = this.injectionDiv.offsetWidth + "px";
                this.injectionArea.style.height = this.injectionDiv.offsetHeight + "px";
                Blockly.svgResize(this.workspace);
            },
            false
        );
    }
}
export const blocklyService = new BlocklyService();
