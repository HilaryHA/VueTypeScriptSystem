# VueTypeScriptSystem
> This is the background management system of Vue+TypeScript+Vuex+vue-i18n, which includes basic operations such as processing of store data, internationalization language, and value transmission of parent and child components.  
（这是Vue+TypeScript+Vuex+vue-i18n的后台管理系统，包含store数据的处理、国际化语言、父子组件传值等基本操作。）

****
	
|Author|窩窩头:panda_face:|
|---|---
|E-mail|hilaryha@qq.com

****
## 目录
* [项目环境](#项目环境)
* [版本说明](#版本说明)
* [文件及运行说明](#文件及运行说明)
* [备注说明](#备注说明)
* [项目展示图](#项目展示图)  

*****
### 项目环境
-----
1. 由 `Vue + TypeScript + VueCli4 + Vuex + vue-i18n` 等组成
  【前端】页面结合 `IviewUI` 组件库 和 `Vue` 组件库 进行展示
  【数据】选择 `Mock.js` 产生随机数据 

2. 项目说明
  此项目属于后台管理系统类型，具有的主要功能如下：  
  - [ ] 登录、退出（用户数据存储于 `store` 中，涉及 `Vuex`在`TypeScript`中的使用），参考 [这里](https://blog.csdn.net/weixin_42512937/article/details/103008382 "Vue + Vuex 存储本地数据 并 保证刷新不丢失")
  - [ ] 封装表格顶部的搜索组件（保证切换路由、刷新之后，数据保持不变），参考 [这里](https://blog.csdn.net/weixin_42512937/article/details/103008382 "Vue + Vuex 存储本地数据 并 保证刷新不丢失")
  - [ ] 国际化语言，涉及中间件 `vue-i18n`，参考 [这里](https://blog.csdn.net/weixin_42512937/article/details/103040311 "Vue + VueCli3 + TypeScript + IviewUI + Vuex， 实现国际化，即切换语言")
  - [ ] 根据 `IviewUI`组件库 集成面包屑组件，参考 [这里](https://blog.csdn.net/weixin_42512937/article/details/102971409 "Vue 之 VueCli3+TypeScript+IviewUI组件库，集成面包屑组件（根据路由菜单改变）")
  - [ ] 根据需求获取 `Mock.js`对应的随机数，参考 [这里](https://blog.csdn.net/weixin_42512937/article/details/102971496 "Vue 之 VueCli3 + TypeScript +IviewUI组件库，获取Mock.js随机数据（使用Mock.mock回调函数）")
  - [ ] `Vue` + `TypeScript`的计算属性写法，用set、get，而不是 `computed`（涉及父子组件传值），参考 [这里](https://blog.csdn.net/weixin_42512937/article/details/103051983 "Vue + TypeScript + VueCli3+ 通过set、get 获取计算属性，并用set修改Vuex中state属性值（区别于VueCli2 的computed属性，涉及父子组件传值）")  

*****
### 版本说明
-----
1. `Node.js` == v10.13.0
2. `npm` == 6.10.3
3. `Vue` == 2.6.10
4. `vue-router` == 3.1.3
5. `view-design` == 4.0.2
6. `vue/cli` == 4.0.0
7. `typescript` == 3.5.3
8. `vuex` == 3.0.1


*****
### 文件及运行说明
------
1. **主要文件说明**   
    1. `package.json` 文件  
        * 记录项目的配置信息、包括名称、版本、许可证等元数据，也会记录所需的各种模块，包括 执行依赖、开发依赖、scripts（定义脚本命令，参考[这里](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html "npm scripts 使用指南")）    
        * ```javascript  
                // 如 在本项目中执行 
                npm run serve
                // 相当于执行  
                vue-cli-service serve
          ```   

    2. `vue.config.js` 文件（手动建立）  
        * 设置项目运行后，自动打开浏览器，可修改主机名`host` 和 端口号`port`等  

    3. `public` 目录下有入口文件`index.html`  

    4. `declare` 关键字
        * `declare var` 声明全局变量  
        * `declare function` 声明全局方法  
        * `declare class` 声明全局类  
        * `declare enum` 声明全局枚举类型  
        * `declare global` 扩展全局变量  
        * `declare module` 扩展模块  
        * ```javascript  
                // 【 src/shims-vue.d.ts 】文件  

                declare module '*.vue';  // 表示声明 "*.vue"文件交给 Vue 模块处理
                declare module 'view-design/dist/locale/*';  // 表示声明 第三方 `view-design` 国际化 扩展模块

                // 【 src/shims-tsx.d.ts 】文件  

                declare global;  // 声明全局变量，[ namespace ] 命名空间
          ```  
    
    5. `src/assets/mockData` 目录： 存放 Mock.js 随机数据

    6. `src/components` 目录： 存放 *.vue组件
        * `src/components/common` 目录： 存放公共组件
    
    7. 自带文件说明  
        * `tsconfig.json`  typescript的配置文件，目前不需要关注里面的内容  
        * `tslint.json`  typescript语法检查的配置文件建议不做更改
        * `package.json`  工程配置文件，可以修改其中的工程名和版本
        * `package-lock.json`  解析后的工程配置文件，不要手动修改这个文件
        * `babel.config.js`  babel配置，babel是js编译的工具，用来将ts转换为js
        * `.gitignore`  git的忽略文件配置，vue cli体贴的直接给项目目录初始化了git


2. **运行说明**
    1. 在项目目录下执行以下命令
        *  ```Bash 
               npm install  
               npm run serve  
           ``` 

    2. 在 `mock-server` 目录下执行以下命令
        *  ```Bash 
               npm install  
               swagger project start  
               swagger project edit     
           ```

*****
### 备注说明
-----
1. **UI组件库：iviewUI标签的使用**  
    1. 注意 `<Switch>` 和 `<Circle>` 这两个标签的使用
        * 需要改成 `<i-switch>` 和 `<i-circle>` 才能正常使用，参考[这里](https://www.iviewui.com/docs/guide/start "快速上手 - iVeiw")  


*****
### 项目展示图
-----

|展示图|
|---
|![image](https://github.com/HilaryHA/VueTypeScriptSystem/blob/master/static/img/showGif/1_0.gif)
|![image](https://github.com/HilaryHA/VueTypeScriptSystem/blob/master/static/img/showGif/1_1.gif)
|![image](https://github.com/HilaryHA/VueTypeScriptSystem/blob/master/static/img/showGif/1_2.gif)
|![image](https://github.com/HilaryHA/VueTypeScriptSystem/blob/master/static/img/showGif/1_3.gif)




******