// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/ui'],
	runtimeConfig: {
		public: {
		  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001/api',
		},
	  },
});
