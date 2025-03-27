import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#fdf2f4",
                    100: "#fce4e8",
                    200: "#f9ccd5",
                    300: "#f4a5b5",
                    400: "#ed7490",
                    500: "#e14a70",
                    600: "#cf2a56",
                    700: "#B80726",
                    800: "#970921",
                    900: "#800b20",
                },
                secondary: {
                    50: "#f1f3f9",
                    100: "#e2e6f2",
                    200: "#cbd1e6",
                    300: "#a9b2d3",
                    400: "#818cbb",
                    500: "#5e6aa3",
                    600: "#4c5588",
                    700: "#3f476f",
                    800: "#334059",
                    900: "#283364",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },

    plugins: [forms],
};
