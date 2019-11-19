<template>
  <div class="module_home">
    <!-- <div class="layout">
      <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Row type="flex" justify="center" align="middle" :class="siderHeaderClasses">
            <Col span="20">
              <p>{{ siderHeaderTitle }}</p>
            </Col>
          </Row>
          <Menu
            active-name="1-2"
            :open-names="['1-3', '1-4']"
            theme="dark"
            width="auto"
            :class="menuitemClasses"
            @on-select="menuOnSelect"
          >
            <MenuItem name="1-1" title="Option 1">
              <Icon type="ios-navigate"></Icon>
              <span>Option 1</span>
            </MenuItem>
            <MenuItem name="1-2" title="Option 2">
              <Icon type="ios-search"></Icon>
              <span>Option 2</span>
            </MenuItem>
            <Submenu name="1-3" title="Option 3">
              <template slot="title">
                <Icon type="ios-filing" />
                <span>Option 3</span>
              </template>
              <MenuItem name="3-1">
                <span>Option 5</span>
              </MenuItem>
              <MenuItem name="3-2">
                <span>Option 6</span>
              </MenuItem>
              <Submenu name="1-4">
                <template slot="title">
                  <span>Submenu</span>
                </template>
                <MenuItem name="4-1">
                  <span>Option 7</span>
                </MenuItem>
                <MenuItem name="4-2">
                  <span>Option 8</span>
                </MenuItem>
              </Submenu>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon
              @click.native="collapsedSider"
              :class="rotateIcon"
              :style="{margin: '0 20px'}"
              type="md-menu"
              size="24"
            ></Icon>
          </Header>
          <Content
            :style="{margin: '20px', background: '#fff', minHeight: '450px', height: 'calc(100vh - 110px)'}"
          >Content</Content>
        </Layout>
      </Layout>
    </div> -->
  </div>
</template>
<script lang="ts">
// // 原始静态菜单数据的Home组件，即不是路由菜单
// import { Component, Vue } from "vue-property-decorator";

// @Component
// export default class MyHome extends Vue {
//   // 默认data数据
//   isCollapsed: boolean = false;

//   // computed计算属性
//   private get rotateIcon(): string[] {
//     return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
//   }

//   private get menuitemClasses(): string[] {
//     return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
//   }
//   private get siderHeaderTitle(): string {
//     return this.isCollapsed ? "HA" : "This is Ha";
//   }

//   private get siderHeaderClasses(): string[] {
//     return ["sider_hader", this.isCollapsed ? "collapsed-menu" : ""];
//   }

//   // methods数据
//   public collapsedSider(): void {
//     this.$refs.side1.toggleCollapse();
//   }

//   public menuOnSelect(val: any): void {
//     console.log("val", val, arguments);
//   }

//   // 声明周期
//   private created(): void {
//     console.log(this.$router);
//     console.log(this.$route);
//   }
// }
</script>
<style lang="scss">
// .module_home {
//   .layout {
//     border: 1px solid #d7dde4;
//     background: #f5f7f9;
//     position: relative;
//     border-radius: 4px;
//     overflow: hidden;
//   }
//   .layout-header-bar {
//     background: #fff;
//     box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
//   }
//   .layout-logo-left {
//     width: 90%;
//     height: 30px;
//     background: #5b6270;
//     border-radius: 3px;
//     margin: 15px auto;
//   }
//   .menu-icon {
//     transition: all 0.3s;
//   }
//   .rotate-icon {
//     transform: rotate(-90deg);
//   }
//   .menu-item span {
//     display: inline-block;
//     overflow: hidden;
//     width: 69px;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//     vertical-align: bottom;
//     transition: width 0.2s ease 0.2s;
//   }
//   .menu-item i {
//     transform: translateX(0px);
//     transition: font-size 0.2s ease, transform 0.2s ease;
//     vertical-align: middle;
//     font-size: 16px;
//   }
//   .collapsed-menu {
//     span {
//       width: 0px;
//       transition: width 0.2s ease;
//     }
//     i {
//       transform: translateX(5px);
//       transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
//       vertical-align: middle;
//       font-size: 22px;
//       &.ivu-icon-ios-arrow-down {
//         opacity: 0;
//       }
//     }
//     &.sider_hader {
//       transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
//       p {
//         font-size: 20px;
//       }
//     }
//   }
//   .ivu-layout-sider {
//     .sider_hader {
//       height: 64px;
//       border-bottom: 1px solid #dcdddf;
//       color: #fff;
//       font-size: 18px;
//       text-align: center;
//     }
//   }
// }
</style>