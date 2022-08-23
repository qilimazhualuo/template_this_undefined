# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

默认新增项目

新增文件
1. src/constant.js

报错方式
然后再main.js中引用

app.vue中template 通过this引用该变量

开发服务中正常显示
但是打包后报错 Cannot read properties of undefined (reading '_ymdhms') ( _ymdhms 是我的全局变量 )
打包文件已上传