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
			sans: ['"Manrope Variable"', ...defaultConfig.theme.fontFamily.sans]
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				'light-cyan': 'hsl(174, 77%, 80%)',
				'soft-cyan': '#7AEADF',
				'strong-cyan': 'hsl(174, 86%, 45%)',
				'very-strong-cyan': '#24AEA1',
				'light-grayish-red': 'hsl(14, 92%, 95%)',
				'light-red': 'hsl(15, 100%, 70%)',
				'pale-blue': 'hsl(226, 100%, 87%)',
				'very-pale-blue': 'hsl(230, 100%, 99%)',
				'light-grayish-blue': 'hsl(224, 65%, 95%)',
				'soft-grayish-blue': 'hsl(223, 50%, 87%)',
				'grayish-blue': 'hsl(225, 20%, 60%)',
				'dark-desaturated-blue': 'hsl(227, 35%, 25%)',
				divider: '#EEF1FA'
			},
			backgroundImage: {
				circles: 'url("/img/circles.svg")',
				background: 'url("/img/background.svg")'
			},
			boxShadow: {
				card: '0 20px 30px -5px rgba(127, 137, 185, 0.15)',
				'slider-thumb': '0 15px 30px hsla(174, 86%, 50%, 0.6)'
			},
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
