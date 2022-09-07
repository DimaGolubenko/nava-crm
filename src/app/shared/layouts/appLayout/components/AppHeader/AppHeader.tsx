// Core
import { Link } from 'react-router-dom';
import styles from './AppHeader.module.scss';

// Contexts
import { useUiContext } from '@/shared/providers/UiProvider/UiProvider';

// Ui
import { AppIcon } from '@/shared/ui/icon/AppIcon';

export const AppHeader = () => {
	const { triggerAppMenuVisible, appSidebarIsWide, triggerAppSidebarWidth } =
		useUiContext();
	const sidebarBurgerIconType = appSidebarIsWide
		? 'AiOutlineMenuUnfold'
		: 'AiOutlineMenuFold';

	return (
		<div className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.sidebarBurger}>
						<AppIcon
							icon={sidebarBurgerIconType}
							size="30"
							onClick={triggerAppSidebarWidth}
						/>
					</div>
					<AppIcon
						className={styles.burger}
						icon="AiOutlineMenu"
						size="30"
						onClick={triggerAppMenuVisible}
					/>
					<Link to="/">
						<a className={styles.logo}>NAVA</a>
					</Link>
					<div className={styles.avatar}>
						<AppIcon icon="AiOutlineUser" size="30" />
					</div>
				</div>
			</div>
		</div>
	);
};
