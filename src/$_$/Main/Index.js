// 引入并创建应用 app
import { createApp } from 'vue'
import app from '../../App/Index'

const App = createApp(app)




// 引入自定义的 components directives provides globConfig
import components from './components'
import directives from './directives'
import globConfig from './globConfig'
import appProvide from './appProvide'

App.use(components)
App.use(directives)
App.use(globConfig)
App.use(appProvide)





// 引入第三方的库
import libraries from './libraries'
App.use(libraries)




// 引入并挂载路由
import router from './Router'
App.use(router)



// 挂载 app
App.mount('#app')