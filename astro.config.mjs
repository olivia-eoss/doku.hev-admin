// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HEV Dokumentation',
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
collapsed: true,
				},
				{
					label: 'Rechnungen',
					autogenerate: { directory: 'rechnungen' },
collapsed: true,
				},
				{
					label: 'Zahlungen',
					autogenerate: { directory: 'zahlungen' },
	collapsed: true,
				},
				{
					label: 'Berichte',
					autogenerate: { directory: 'berichte' },
					collapsed: true,
				},
			],
		}),
	],
});
