/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Đảm bảo Tailwind quét các file trong src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
