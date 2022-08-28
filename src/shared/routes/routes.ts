import { DashboardPage } from '@/pages/Dashboard';
import { ProductsPage } from '@/pages/Products';

import { IRoute } from './routes.types';

export const appRoutes: IRoute[] = [
	{
		path: '/',
		title: 'Панель',
		Component: DashboardPage,
	},
	{
		path: '/products',
		title: 'Товари',
		Component: ProductsPage,
	},
];
