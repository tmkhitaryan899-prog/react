export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                spinOnce: {
                    to: { transform: "rotate(1turn)" },
                },
            },
            animation: {
                loader: "spinOnce 1s linear infinite",
            },
        },
    },
    plugins: [],
}