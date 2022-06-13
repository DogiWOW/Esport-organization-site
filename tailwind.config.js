module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    fontFamily: {
      'kdam': 'Kdam Thmor Pro, sans-serif',
      'pepsi': 'pepsi_regular, sans-serif',
      'anton': 'Anton, sans-serif',
      'marker': 'Permanent Marker, cursive',
      'rightous': 'Righteous, cursive',
      'blaka': 'Blaka, cursive',
      'fascinate': 'Fascinate Inline, cursive',
      'nunito': 'Nunito, sans-serif',
    },
    extend: {
    },
  },
  plugins: [],
}