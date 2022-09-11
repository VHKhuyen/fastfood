import { Home, Menu, About, Contact, Upload, LoginForm, RegisterForm } from '@/pages/index'
import { HeaderOnly } from '@/components/Layout'

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/menu', component: Menu },
	{ path: '/about', component: About },
	{ path: '/shop', component: Contact },
	{ path: '/blog', component: Contact },
	{ path: '/contact', component: Contact },
	{ path: '/wishlist', component: Contact },
	{ path: '/cart', component: Contact },
	{ path: '/user', component: Contact },
	{ path: '/upload', component: Upload, layout: HeaderOnly },
	{ path: '/auth/register', component: RegisterForm, layout: null },
	{ path: '/auth/login', component: LoginForm, layout: null },
]

const privateRoutes = []
export { privateRoutes, publicRoutes }
