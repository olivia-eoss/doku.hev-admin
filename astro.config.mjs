// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HEV Doku',
			logo: {
    			light: './src/assets/Logo.svg',
    			dark: './src/assets/Logo-dark.svg',
				replacesTitle: true,
			},
			customCss: [
        		'./src/styles/global.css',
      		],
			sidebar: [
				{
					label: 'Mitglider',
					autogenerate: { directory: 'mitglieder' },
				},
				{
					label: 'Rechnungen',
					autogenerate: { directory: 'rechnungen' },
				},
				{
					label: 'Zahlungen',
					autogenerate: { directory: 'zahlungen' },
				},
				{
					label: 'Berichte',
					autogenerate: { directory: 'berichte' },
				},
			],
		}),
	],
});
