import vue from 'rollup-plugin-vue'; //
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import image from 'rollup-plugin-image';
// import cleanup from 'rollup-plugin-cleanup';
export default {
  input: './src/index.js',
  output: {
    file: './dist/index.cjs.js',
    format: 'cjs'
  },
  plugins: [
    vue(),
    commonjs(),
    // terser({
    //   compress: {
    //     // pure_funcs: ['console.log'] // 去掉console.log函数,压缩js
    //   }
    // }),
    image(),
    // cleanup() ,//清除注释
  ]
};
