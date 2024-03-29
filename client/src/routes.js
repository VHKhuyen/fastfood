import {
	Home,
	Menu,
	About,
	Contact,
	LoginForm,
	RegisterForm,
	Detail,
	Discount,
} from '@/pages/index'
import config from '@/config'

const publicRoutes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.menu, component: Menu },
	{ path: config.routes.discount, component: Discount },
	{ path: config.routes.about, component: About },
	{ path: config.routes.shop, component: Contact },
	{ path: config.routes.blog, component: Contact },
	{ path: config.routes.contact, component: Contact },
	{ path: config.routes.wishlist, component: Contact },
	{ path: config.routes.cart, component: Contact },
	{ path: config.routes.user, component: Contact },
	{ path: config.routes.product, component: Detail },
	{ path: config.routes.register, component: RegisterForm, layout: null },
	{ path: config.routes.login, component: LoginForm, layout: null },
]

const privateRoutes = []
export { privateRoutes, publicRoutes }
