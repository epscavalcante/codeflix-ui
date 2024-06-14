import { DefineComponent } from "vue";
import type { Props } from "./Button.vue";

declare module "Button" {
  export const Button: DefineComponent<Props>;
}
