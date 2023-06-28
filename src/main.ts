import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Button } from "vant";


const app = createApp(App);
app.use(router).use(Button).mount('#app');
