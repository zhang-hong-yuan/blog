


// 为了引入 Prime 中的 OrganizationChart 组件
import PrimeVueStyled from 'primevue/styled';




// 引入、创建 pinia，并挂载 pinia-plugin-persistedstate 插件
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)




export default app => {
	app.use(PrimeVueStyled);
	app.use(pinia)
}




// 尽量不要全局引入，会相互影响
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'