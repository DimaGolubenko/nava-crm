import { IconBaseProps } from 'react-icons/lib';
import * as ReactAntDesignIcons from 'react-icons/ai';
import * as MaterialIcons from 'react-icons/md';

export type AppIconProps = {
	icon: AppIconType;
} & IconBaseProps;

export type MaterialIconType = keyof typeof MaterialIcons;
export type ReactAntDesignIconType = keyof typeof ReactAntDesignIcons;

export type AppIconType = MaterialIconType | ReactAntDesignIconType | void;
