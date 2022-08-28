//Types
import { IRoute } from './routes.types';

// Components
import { Dashboard } from '@/dashboard/components/Dashboard/Dashboard';
import { Products } from '@/products/components/Products/Products';

export const appRoutes: IRoute[] = [
	{
		path: '/',
		title: 'Панель',
		Component: Dashboard,
	},
	{
		path: '/products',
		title: 'Товари',
		Component: Products,
	},
];
