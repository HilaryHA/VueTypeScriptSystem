// 声明 "*.vue"文件交给 Vue 模块处理
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

/**
 * 使用第三方库时，需要引用 declare 的声明文件，才能使用view-design国际化语言
 * declare var 声明全局变量
 * declare function 声明全局方法
 * declare class 声明全局类
 * declare enum 声明全局枚举类型
 * declare global 扩展全局变量
 * declare module 扩展模块
 */
declare module 'view-design/dist/locale/*' {
  export const viewLocale: any
}