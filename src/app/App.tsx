// Core
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Routes
import { appRoutes } from '@/shared/routes/routes';

export const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					{appRoutes.map(({ path, Component }) => {
						return <Route path={path} element={<Component />} />;
					})}
				</Routes>
			</BrowserRouter>
		</div>
	);
};
