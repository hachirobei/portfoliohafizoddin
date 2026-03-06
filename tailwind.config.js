/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode manually
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Deep slate blue
        surface: '#1e293b',    // Slightly lighter slate
        primary: '#fbbf24',    // Amber-400 (Gold)
        secondary: '#06b6d4',  // Cyan-500 (Teal/Cyan)
        accent: '#f43f5e',     // Rose-500 (Pink/Red)
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(251, 191, 36, 0.3)', // Amber glow
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.3)', // Cyan glow
      }
    },
  },
  plugins: [],
}
