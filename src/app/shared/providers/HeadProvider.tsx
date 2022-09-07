// Core
import { ReactElement } from 'react';
import { FC, PropsWithChildren } from 'react';

// Providers
import { UiProvider } from './UiProvider/UiProvider';

export const HeadProvider: FC<PropsWithChildren> = ({
	children,
}): ReactElement => {
	return (
		<>
			<UiProvider>{children}</UiProvider>
		</>
	);
};
