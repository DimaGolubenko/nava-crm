// Core
import { FC, PropsWithChildren, ReactElement } from 'react';
import styles from './AppLayout.module.scss';

// Components
import { AppHeader } from '../AppHeader';
import { AppSidebar } from '../AppSidebar/AppSidebar';

export const AppLayout: FC<{ children: PropsWithChildren<ReactElement> }> = ({
	children,
}) => {
	return (
		<div className={styles.layout}>
			<AppSidebar />
			<div className={styles.body}>
				<AppHeader />
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
};
