# vue-next-test

vue3.0

# create a project

1. npm install -g @vue/cli

2. vue create vue-next-test

3. 选择 Manually select features 进行项目配置

Vue CLI v4.3.1
? Please pick a preset:
default (babel, eslint)
❯ Manually select features

4.
Vue CLI v4.3.1
? Please pick a preset: Manually select features
? Check the features needed for your project:
◉ Babel
◯ TypeScript
◯ Progressive Web App (PWA) Support
◉ Router
◉ Vuex
◉ CSS Pre-processors
❯◉ Linter / Formatter
◯ Unit Testing
◯ E2E Testing

5. 运行项目 npm run serve
6. 打包项目 npm run build

# vue3.0 和 vue2.0 区别

1. vue2.0 组件模板只允许出现一个根元素,否则就会报错 vue3.0 支持组件模板同时有好几个根元素
   <template>
     <div class="test_content1">
       <h3>还好，头发都还在的</h3>
       <p>youyou</p>
     </div>
     <div class="test_content2">
       <h3>还好，头发都还在的</h3>
       <p>youyou</p>
     </div>
   </template>

# 使用 element-ui

1. npm install element-plus --save
2. main.js 中添加

   import { createApp } from 'vue'
   // ui 库
   import ElementPlus from 'element-plus';
   import 'element-plus/lib/theme-chalk/index.css';
   const app = createApp(App)
   app.use(ElementPlus)
   app.use(store).use(router).mount('#app')

3. 组件中按照文档使用
