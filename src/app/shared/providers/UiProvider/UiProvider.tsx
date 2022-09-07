import {
	createContext,
	FC,
	PropsWithChildren,
	ReactElement,
	useContext,
} from 'react';
import { useUiProviderState } from './useUiProviderState';

export interface UiContextInterface {
	appMenuIsOpened: boolean;
	appSidebarIsWide: boolean;
	triggerAppMenuVisible: () => void;
	triggerAppSidebarWidth: () => void;
}

const initialUiContext: UiContextInterface = {
	appMenuIsOpened: false,
	appSidebarIsWide: true,
	triggerAppMenuVisible: () => {},
	triggerAppSidebarWidth: () => {},
};

export const UiContext = createContext<UiContextInterface>(initialUiContext);

export const UiProvider: FC<PropsWithChildren> = ({
	children,
}): ReactElement => {
	const {
		appMenuIsOpened,
		appSidebarIsWide,
		triggerAppMenuVisible,
		triggerAppSidebarWidth,
	} = useUiProviderState(initialUiContext);

	return (
		<UiContext.Provider
			value={{
				appMenuIsOpened,
				appSidebarIsWide,
				triggerAppMenuVisible,
				triggerAppSidebarWidth,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};

export const useUiContext = () => useContext(UiContext);
