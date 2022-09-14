import { Home, Menu, About, Contact, Upload, LoginForm, RegisterForm } from '@/pages/index'
import { HeaderOnly } from '@/components/Layout'
import routeConfig from '@/config/routes'

const publicRoutes = [
	{ path: routeConfig.home, component: Home },
	{ path: routeConfig.menu, component: Menu },
	{ path: routeConfig.about, component: About },
	{ path: routeConfig.shop, component: Contact },
	{ path: routeConfig.blog, component: Contact },
	{ path: routeConfig.contact, component: Contact },
	{ path: routeConfig.wishlist, component: Contact },
	{ path: routeConfig.cart, component: Contact },
	{ path: routeConfig.user, component: Contact },
	{ path: routeConfig.upload, component: Upload, layout: HeaderOnly },
	{ path: routeConfig.register, component: RegisterForm, layout: null },
	{ path: routeConfig.login, component: LoginForm, layout: null },
]

const privateRoutes = []
export { privateRoutes, publicRoutes }
