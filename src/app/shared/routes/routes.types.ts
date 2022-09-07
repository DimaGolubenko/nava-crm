import { ReactElement } from 'react';

import { AppIconType } from '@/shared/ui/icon/icon.types';

export interface IRoute {
	path: string;
	title: string;
	Component: () => ReactElement;
	icon?: AppIconType;
}
