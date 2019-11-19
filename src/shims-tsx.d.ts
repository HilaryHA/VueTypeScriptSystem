import Vue, { VNode } from 'vue'

// 声明全局变量 global
declare global {
  // namespace 命名空间
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
