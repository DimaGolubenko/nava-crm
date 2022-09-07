// Core
import cn from 'classnames';
import styles from './AppSidebar.module.scss';

// UI
import { AppIcon } from '@/shared/ui/icon/AppIcon';

// Contexts
import { useUiContext } from '@/shared/providers/UiProvider/UiProvider';
import { AppNav } from '../AppNav/AppNav';

export const AppSidebar = () => {
	const { appMenuIsOpened, triggerAppMenuVisible, appSidebarIsWide } =
		useUiContext();

	const rootStyles = cn(styles.sidebar, {
		[styles.closed]: !appMenuIsOpened,
		[styles.wide]: appSidebarIsWide,
	});

	return (
		<aside className={rootStyles}>
			<button onClick={triggerAppMenuVisible}>
				<AppIcon className={styles.close} icon="AiOutlineCloseSquare" />
			</button>
			<AppNav />
		</aside>
	);
};
