import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(__dirname, __filename)

export default {
  input: resolve(__dirname, 'src/index.ts'),
  output: {
    file: resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    ts({
      tsconfig: resolve(__dirname, 'tsconfig.json'),
    }),
    serve({
      port: 3000,
      openPage: 'public/index.html',
      open: true,
    }),
  ],
}
