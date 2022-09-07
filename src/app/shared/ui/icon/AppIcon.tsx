// Core
import { FC, ReactElement } from 'react';
import * as ReactAntDesignIcons from 'react-icons/ai';
import * as MaterialIcons from 'react-icons/md';

// Types
import {
	AppIconProps,
	MaterialIconType,
	ReactAntDesignIconType,
} from './icon.types';

export const AppIcon: FC<AppIconProps> = ({
	icon,
	...iconProps
}): ReactElement | null => {
	if (!icon) return null;
	const type = icon.slice(0, 2);
	let IconComponent = null;
	if (type === 'Md') IconComponent = MaterialIcons[icon as MaterialIconType];
	if (type === 'Ai')
		IconComponent = ReactAntDesignIcons[icon as ReactAntDesignIconType];
	if (!IconComponent) {
		return null;
	}
	return <IconComponent {...iconProps} />;
};
