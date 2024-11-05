/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#499649",
        secondary: "#A3A3A3",
        hijaumuda: "#D9FCD9",
        kuning: "#FFE173",
        kuningmuda: "#FFF7DB",
        ungumuda: "#E4DFFB",
        ungu: "#8E62E5",
        biru: "#A8DBFF",
        birumuda: "#D8EFFF",
        hitam: "#222222"
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        lora: "Lora, serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

