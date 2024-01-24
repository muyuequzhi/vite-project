import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/style/element/index.scss" as *;
        @use "@/style/common/var.scss" as *;
        `,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    viteMockServe({
      // default
      mockPath: './src/mock/',
      localEnabled: true,
      prodEnabled: false,
      // 监视文件更改
      watchFiles: true,
      // 动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包
      // 该代码会被注入到injectFile对应的文件的底部。默认injectFile为main.{ts,js}
      injectCode: `
                    import { setupProdMockServer } from './mock/mockProdServer';
                    setupProdMockServer();
                `,
    }),
  ],
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
    },
    sourcemap: 'hidden',
  },
})
