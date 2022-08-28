// Core
import React from 'react';
import ReactDOM from 'react-dom/client';

// Providers
import { HeadProvider } from './app/shared/providers/HeadProvider';

// Components
import { App } from './app/App';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<HeadProvider>
			<App />
		</HeadProvider>
	</React.StrictMode>
);
