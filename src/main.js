import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/style.css";
import initSvgIcon from "@/assets/icons/index";
import "virtual:svg-icons-register";

createApp(App).use(initSvgIcon).mount("#app");
