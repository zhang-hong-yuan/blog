
import { navs } from '../globConfig/navs'
import { catalogConvert } from '../globConfig/catalogConvert/Index'


export default app => {
	app.config.globalProperties.navs = navs
	app.config.globalProperties.catalogConvert = catalogConvert

}