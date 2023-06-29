import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import "@/utils/rem";
import { Button, Popup, Icon, } from "vant";


const app = createApp(App);
app.use(router)
.use(Button).use(Popup).use(Icon)
.mount('#app');
