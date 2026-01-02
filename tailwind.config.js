/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-brown': '#5C4033',
        'leather': '#8B4513',
        'cream': '#F5DEB3',
      },
    },
  },
  plugins: [],
}