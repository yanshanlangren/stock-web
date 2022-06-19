import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')



// cli4 直接在createApp后面使用user方法
createApp(App).use(router).mount('#app')