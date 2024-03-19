import { DefineComponent } from "vue";
import { Props } from "./Button.vue";

declare module "Button" {
  export const Button: DefineComponent<Props>;
}
