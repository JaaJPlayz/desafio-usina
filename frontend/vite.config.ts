import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // Allows external access from outside the container
    port: 5173,           // Matches the port exposed in Docker
    watch: {
      usePolling: true,   // Enables polling to detect file changes in Docker
    }
  }
})
