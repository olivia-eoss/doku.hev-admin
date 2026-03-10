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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
