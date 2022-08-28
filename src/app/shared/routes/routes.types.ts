import { ReactElement } from 'react';

export interface IRoute {
	path: string;
	title: string;
	Component: () => ReactElement;
	icon?: string;
}
