import type { Config } from 'tailwindcss'
import { shade, components, rounded, animations, palettes, palette } from '@tailus/themer'


module.exports = {
  content: [

    "./node_modules/@tailus/themer/dist/**/*.{js,ts}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: palettes.trust,
    },
  },
  plugins: [
    shade,
    rounded,
    components,
    animations,
    palette
  ]
} satisfies Config