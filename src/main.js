import { createApp } from "vue";
import App from "./App.vue";

import initSvgIcon from "@/assets/icons/index";
import "virtual:svg-icons-register";

import router from "./router";
import "@/assets/css/style.css";

const app = createApp(App);
app.use(initSvgIcon);
app.use(router);
router.isReady().then(() => app.mount("#app"));
