// Core
import { ReactElement } from 'react';
import { FC, PropsWithChildren } from 'react';

export const HeadProvider: FC<PropsWithChildren> = ({
	children,
}): ReactElement => {
	return <>{children}</>;
};
