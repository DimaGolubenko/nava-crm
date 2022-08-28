import { AppHeader } from '../AppHeader';
import styles from './AppLayout.module.scss';

export const AppLayout = () => {
	return (
		<div className={styles.appLayout}>
			<AppHeader />
			AppLayout
		</div>
	);
};
