/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                black: '#000000',
                primary: 'var(--color-primary)',
                text: 'var(--color-text)',
                base: 'var(--color-base)',
                detail: 'var(--color-detail)',
            },
            fontSize: {
                s: 'var(--text-s)',
                m: 'var(--text-m)',
                l: 'var(--text-l)',
                '2xl': 'var(--text-2xl)',
                '3xl': 'var(--text-3xl)',
            },
            spacing: {
                basic: 'var(--space-basic)',
                menu: 'var(--space-menu)',
                special: 'var(--space-special)',
            },
            fontFamily: {
                title: 'var(--font-title)',
                body: 'var(--font-body)',
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease',
                pushPull: 'push-pull 1.5s ease-in-out infinite',
                swipeDown: 'swipe-down 1.5s ease-in-out infinite',
                pivotArrow: 'pivot-arrow 1s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'push-pull': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                'swipe-down': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(10px)' },
                },
                'pivot-arrow': {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(5deg)' },
                },
            },
        },
    },
    plugins: [],
};
