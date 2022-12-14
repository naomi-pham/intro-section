module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "hsl(var(--color-light) / 1)",
        dark: "hsl(var(--color-dark) / 1)",
        neutral: "hsl(var(--color-neutral) / 1)",
      }
    },
  },
  plugins: [],
}
