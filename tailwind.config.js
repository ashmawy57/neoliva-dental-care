/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'almarai': ['Almarai', 'sans-serif'],
                'cairo': ['Cairo', 'sans-serif'],
                'tajawal': ['Tajawal', 'sans-serif'],
                'playfair': ['Playfair Display', 'serif'],
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                dental: {
                    blue: '#0ea5e9',
                    teal: '#14b8a6',
                    mint: '#6ee7b7',
                    cream: '#FAF9F6',
                }
            },
        },
    },
    plugins: [],
}
