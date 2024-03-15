import { App } from "vue";
import "./style.css";
import Button from "./components/Button.vue";

export { Button };

export default {
  install: (app: App) => {
    app.component("CodeflixButton", Button);
  },
};
