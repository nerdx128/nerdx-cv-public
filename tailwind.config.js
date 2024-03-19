const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            fontSize: {
                '2xs': ['0.675rem', { lineHeight: '1rem' }],
            },
            colors: {
                gold: '#CD9F29',
                fire: '#F73718',
                khaki: '#f2ebc0',
                billBlue: '#252d66',
            },
            fontFamily: {
                barlow: ['Barlow'],
                abuget: ['Abuget'],
                alexBrush: ['Alex Brush'],
            },
            spacing: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            maxWidth: {
                1920: '1920px',
            },
            screens: {
                '3xs': '360px',
                '2xs': '390px',
                xs: '413px',
                '3xl': { raw: '(min-width: 1920px)' },
                short: { raw: '(max-height: 669px)' },
                tall: { raw: '(min-height: 670px)' },
                giant: { raw: '(min-height: 852px)' },
                iphonex: {
                    min: '375px',
                    max: '812px',
                    raw: '(-webkit-min-device-pixel-ratio: 3)',
                },
            },
            zIndex: {
                1: '1',
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                fadeIn30: {
                    '0%': { opacity: 0 },
                    '30%': { opacity: 0.3 },
                },
                enterFromRight: {
                    from: { opacity: 0, transform: 'translateX(200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                enterFromLeft: {
                    from: { opacity: 0, transform: 'translateX(-200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                exitToRight: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(200px)' },
                },
                exitToLeft: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(-200px)' },
                },
                scaleIn: {
                    from: {
                        opacity: 0,
                        transform: 'rotateX(-10deg) scale(0.9)',
                    },
                    to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                },
                scaleOut: {
                    from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                    to: {
                        opacity: 0,
                        transform: 'rotateX(-10deg) scale(0.95)',
                    },
                },
                slideDown: {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                slideUp: {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                fadeIn30: 'fadeIn30 5s ease-in-out',
                scaleIn: 'scaleIn 200ms ease',
                scaleOut: 'scaleOut 200ms ease',
                fadeIn: 'fadeIn 200ms ease',
                fadeOut: 'fadeOut 200ms ease',
                enterFromLeft: 'enterFromLeft 250ms ease',
                enterFromRight: 'enterFromRight 250ms ease',
                exitToLeft: 'exitToLeft 250ms ease',
                exitToRight: 'exitToRight 250ms ease',
                spinSlow: 'spin 5s linear infinite',
                slideDown: 'slideDown 500ms cubic-bezier(0.87, 0, 0.13, 1)',
                slideUp: 'slideUp 500ms cubic-bezier(0.87, 0, 0.13, 1)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('flowbite/plugin'),
        plugin(({ matchUtilities }) => {
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        }),
    ],
};
