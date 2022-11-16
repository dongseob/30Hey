module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse2: 'pulse2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', //어쩐 이유에선지 기본 pulse는 정상적으로 사용할 수가 없었다.
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      }
    },
    fontFamily: {
      'NanumSquareNeo': ['NanumSquareNeo'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
}