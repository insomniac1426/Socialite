import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for assets during the build
  build: {
    outDir: 'dist', // Output directory for build files
    emptyOutDir: true, // Clears the output directory before building
  },
});
