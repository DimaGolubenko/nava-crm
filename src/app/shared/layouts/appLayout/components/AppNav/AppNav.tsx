// Core
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './AppNav.module.scss';

// UI
import { AppIcon } from '@/shared/ui/icon/AppIcon';

// Contexts
import { useUiContext } from '@/shared/providers/UiProvider/UiProvider';

// Routes
import { appRoutes } from '@/shared/routes/routes';

export const AppNav = () => {
	const { appSidebarIsWide, triggerAppMenuVisible } = useUiContext();

	const titleStyles = cn(styles.title, {
		[styles.titleHidden]: !appSidebarIsWide,
	});

	return (
		<nav className={styles.appNav}>
			<ul>
				{appRoutes.map((route) => (
					<li>
						<Link to={route.path} onClick={triggerAppMenuVisible}>
							<a className={styles.item}>
								<AppIcon className={styles.icon} icon={route.icon} size="24" />
								<span className={titleStyles}>{route.title}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
