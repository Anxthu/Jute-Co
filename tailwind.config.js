/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lv-dark': '#1C1C1C',
                'lv-brown': '#5D4037',
            },
            fontFamily: {
                sans: ['Jost', 'sans-serif'],
                serif: ['Jost', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
