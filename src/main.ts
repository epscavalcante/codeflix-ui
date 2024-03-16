import { App } from "vue";
import "./style.css";
import CodeflixButton from "./components/Button.vue";

export { CodeflixButton };

export default {
  install: (app: App) => {
    app.component("CodeflixButton", CodeflixButton);
  },
};
