import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEnvCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
    react(),
    viteEnvCompatible(),
  ],
});
