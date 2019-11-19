<template>
    <div class="v_bread_crumbs">
        <Breadcrumb separator=">">
            <BreadcrumbItem v-for="bdItem in breadList" :key="bdItem.path">
                <Icon :type="bdItem.meta && bdItem.meta.type"></Icon>
                {{ $t(`route.${bdItem.meta.title}`) }}
                <!-- {{ bdItem.name }} -->
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class MyBreadCrumbs extends Vue {

    // 默认data数据
    breadList: Object[] = [];
    
    // 监听watch
    @Watch('$route', { immediate: true })
    onRouteChange(newVal: string, oldVal: string): void {
        this.breadList = [...newVal.matched]
        // console.log('onRouteChange--------')
        // console.log(newVal, oldVal)
    }
    
}

// // VueCli2数据格式如下 ， 参考官网https://github.com/kaorun343/vue-property-decorator#Watch 、其他大佬的解释https://juejin.im/post/5ae91fa76fb9a07aa7677543
// export default {
//     watch: {
//         $route: [{
//             handler: 'onRouteChange',
//             immediate: true, // 默认是$route变化时监听才生效，immediate表示组件一加载就监听
//             deep: false // 深度监听，如监听的一个对象，当对象的属性值变化时都会监听，但是消耗内存，所以可以选择对象.属性名监听，如监听'obj.a'
//         }]
//     },
//     methods: {
//         onRouteChange(newVal, oldVal) {
//             console.log('onRouteChange--------')
//             console.log(newVal, oldVal)
//         }
//     }
// }

</script>
<style lang="scss">
.v_bread_crumbs {
    padding: 10px 0 20px 12px;
    &+ div {
       background: #FFF;
       padding-top: 20px; 
    }
}
</style>