import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Turbo_Catch/',
  plugins: [
    react(),
    {
      name: 'unity-fix',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Проверяем, запрашивает ли браузер .gz файл
          if (req.url?.endsWith('.gz')) {
            res.setHeader('Content-Encoding', 'gzip');
            
            // Важно: помогаем браузеру понять тип файла внутри архива
            if (req.url.endsWith('.js.gz')) {
              res.setHeader('Content-Type', 'application/javascript');
            } else if (req.url.endsWith('.wasm.gz')) {
              res.setHeader('Content-Type', 'application/wasm');
            }
          }
          next();
        });
      },
    },
  ],
})
