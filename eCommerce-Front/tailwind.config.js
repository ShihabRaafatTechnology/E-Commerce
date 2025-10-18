/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      content: {
        'leaf': 'url("/img/logo-leaf-new.png")',
        "leaf-overlay": 'url("/img/overlay-leaf.png")',
      },
      colors: {
        "nav-primary": "#e5e5e5",
        "nav-secondary": "#000",
        "primary": "#b3b3a1",
        "secondary": "#fb8500",
        "frame": "#080a01",
        "btn-secondary": "#f05346",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}