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
					label: 'Mitglieder',
					collapsed: true,
					autogenerate: { directory: 'mitglieder',  collapsed: true, },
	
				},
				{
					label: 'Rechnungen',
										collapsed: true,
					autogenerate: { directory: 'rechnungen' },

				},
				{
					label: 'Zahlungen',
										collapsed: true,
					autogenerate: { directory: 'zahlungen' },

				},
				{
					label: 'Berichte',
										collapsed: true,
					autogenerate: { directory: 'berichte' },

				},
			],
		}),
	],
});
