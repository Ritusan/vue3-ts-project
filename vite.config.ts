import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // npm i -D @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3030,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 为实际的后端 URL，它会追加到属性名配置的 /api 这个片段的前面
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')  // 使用 rewrite去掉 /api
      }
    }
  }
})
