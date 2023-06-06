/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "540px",
            sm: "720px",
            md: "1040px",
            lg: "1440px",
        },
        extend: {
            backgroundImage: {
                corner: "url('/Corner.png')",
                "hover-gradient": "url('/GradientBorder.png')",
                "hover-gradient-narrow": "url('/GradientBorderNarrow2.png')",
                "paper-pattern":
                    "url('https://www.transparenttextures.com/patterns/exclusive-paper.png')",
                "decor-pattern":
                    "url('https://www.transparenttextures.com/patterns/black-mamba.png')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            colors: {
                // paper: "#EBDEBB",
                paper: "#FAFAEF",
                "paper-hover": "#DFDFFE",
                field: "#FFFAFA",
                adornment: "#BDB193",
            },
            fontFamily: {
                serif: ["playfair", "serif"],
            },
            rotate: {
                270: "270deg",
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        }),
    ],
};
