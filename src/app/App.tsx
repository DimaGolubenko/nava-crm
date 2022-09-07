// Core
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Routes
import { appRoutes } from '@/shared/routes/routes';
import { AppLayout } from './shared/layouts/AppLayout/components/AppLayout';

export const App = () => {
	return (
		<div className="layout-boxed">
			<BrowserRouter>
				<AppLayout>
					<Routes>
						{appRoutes.map(({ path, Component }) => {
							return <Route path={path} element={<Component />} />;
						})}
					</Routes>
				</AppLayout>
			</BrowserRouter>
		</div>
	);
};
