import { useState } from 'react';
import { UiContextInterface } from './UiProvider';

export const useUiProviderState = (initialUiContext: UiContextInterface) => {
	const [appMenuIsOpened, setAppMenuIsOpened] = useState(
		initialUiContext.appMenuIsOpened
	);
	const [appSidebarIsWide, setAppSidebarIsWide] = useState(
		initialUiContext.appSidebarIsWide
	);

	const triggerAppMenuVisible = () => {
		setAppMenuIsOpened(!appMenuIsOpened);
	};
	const triggerAppSidebarWidth = () => {
		setAppSidebarIsWide(!appSidebarIsWide);
	};

	return {
		appMenuIsOpened,
		appSidebarIsWide,
		triggerAppMenuVisible,
		triggerAppSidebarWidth,
	};
};
