/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#53C5EB', // Mulungs Blue
                    50: '#E6F8FC',
                    100: '#CCF0FA',
                    200: '#99E0F5',
                    300: '#66D1EF',
                    400: '#53C5EB',
                    500: '#2DB4E1',
                    600: '#1A95C0',
                    700: '#147496',
                    800: '#0F5670',
                    900: '#0B3B4D',
                },
                secondary: {
                    DEFAULT: '#ffffff',
                    dark: '#1e293b', // Slate 800
                    light: '#f8fafc', // Slate 50
                }
            },
            fontFamily: {
                sans: ['"Outfit"', 'sans-serif'], // Eco-friendly modern feel
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}
