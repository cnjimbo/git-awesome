import { defineConfig } from 'tsup';

export default defineConfig({
  // 代码分割 默认esm模式支持 如果cjs需要代码分割的话就需要配置为 true
  splitting: false,
  sourcemap: false,
  clean: true,
  entry: ['src/*.ts'],
  // 打包类型  支持以下几种 'cjs' | 'esm' | 'iife'
  format: ['cjs', 'esm', 'iife'],
  dts: true,


});
