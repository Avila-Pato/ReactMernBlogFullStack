import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // El directorio de salida para los archivos construidos
    rollupOptions: {
      input: 'index.html', // Asegúrate de que Vite sepa cuál es el archivo principal de entrada
      output: {
        manualChunks(id) {
          // Si el archivo se encuentra dentro de node_modules, lo agrupa en un "chunk" llamado 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      },
    },
    chunkSizeWarningLimit: 1000, // Aumenta el límite de tamaño de los chunks (por defecto es 500 kB)
  },
  server: {
    open: true, // Esto abrirá el navegador automáticamente en el puerto que uses
  },
});
