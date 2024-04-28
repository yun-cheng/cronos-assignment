const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')
const animatePlugin = require('tailwindcss-animate')

/** @type {import('tailwindcss/types').Config} */
const config = {
	important: true,
	darkMode: ['class'],
	content: ['index.html', 'src/**/*.tsx'],
	prefix: '',
	theme: {
		fontFamily: {
			sans: [...defaultConfig.theme.fontFamily.sans]
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin, animatePlugin]
}
module.exports = config
