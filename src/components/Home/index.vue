<template>
  <div class="module_home">
    <div class="layout">
      <Layout class="ivu-layout-has-sider">        
          <layout-menu ref="sideMenu"></layout-menu>
        <Layout>          
          <layout-header :super_this="super_this"></layout-header>
          <Content
            :style="{margin: '20px', minHeight: '450px', height: 'calc(100vh - 110px)'}"
            >
            <MyBreadCrumbs></MyBreadCrumbs>
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import MyBreadCrumbs from "@/components/common/BreadCrumbs/index.vue";
import LayoutHeader from '@/components/common/Layout/Header.vue';
import LayoutMenu from '@/components/common/Layout/SiderMenu.vue';
import { Action, Getter } from "vuex-class";

@Component({
  name: 'MyHome',
  // 原components属性
  components: {
    MyBreadCrumbs,
    LayoutHeader,
    LayoutMenu
  }
})
export default class MyHome extends Vue {
  // 原data数据
  super_this: Object = this;

  // 原methods的...mapActions
  @Action("initStateData") public initStateData!: Function;  

  // 生命周期
  private beforeDestroy(): void {
    this.initStateData();
    console.log("beforeDestroy----------");
    console.log(this.$store.state);
  }  

  // // 父组件 需要传递给子组件的值
  // @Provide('refMenu') $refs: Object;
}
</script>
<style lang="scss">
.module_home {
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
}
</style>