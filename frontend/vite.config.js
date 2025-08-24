import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = dir => resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  pluginOption:{
    'style-resource-loader':'scss',
    preProcessor:'scss',
    patterns:[]
  },
  server:{
    port:3008,
    open:true,
    cors:true,
  },
  resolve: {
		alias: {
			'@': pathResolve('./src') // 设置 `@` 指向 `src` 目录
		}
	},
})
