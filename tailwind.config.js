/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 15s linear infinite',
        fade: 'fadeIn .2s ease-in-out',
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },  
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        }
      }    
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night"],
  },
  darkMode: ['class', '[data-theme="night"]']
}

