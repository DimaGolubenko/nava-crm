const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@/dashboard': path.resolve(__dirname, 'src/app/dashboard'),
			'@/products': path.resolve(__dirname, 'src/app/products'),
			'@/shared': path.resolve(__dirname, 'src/app/shared'),
			'@/app': path.resolve(__dirname, 'src/app'),
			'@/assets': path.resolve(__dirname, 'src/assets'),
		},
	},
	style: {
		sass: {
			loaderOptions: {
				additionalData: `
          @import '@/assets/styles/base/_variables.scss';
        `,
			},
		},
	},
};
