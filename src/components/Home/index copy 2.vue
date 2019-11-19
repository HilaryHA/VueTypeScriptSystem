<template>
  <div class="module_home">
    <div class="layout">
      <Layout class="ivu-layout-has-sider">        
        <!-- <Sider ref="sideMenu" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
          <Row type="flex" justify="center" align="middle" :class="siderHeaderClasses">
            <Col span="20">
              <p>{{ siderHeaderTitle }}</p>
            </Col>
          </Row>
          <Menu
            :active-name="activeName"
            :open-names="openNames"
            theme="dark"
            width="auto"
            router
            :class="menuitemClasses"
            @on-select="menuOnSelect"
            >
            <template v-for="menu in siderMenuList">
              <div v-if="!menu.hidden && menu.children" :key="menu.path">
                <MenuItem
                  v-if="menu.children[0].meta && menu.children[0].meta.isSiderTitle"
                  :name="menu['children'][0].path"
                  :title="menu.name"
                >
                  <Icon v-if="menu.meta.type" :type="menu.meta.type"></Icon>
                  <span>{{ menu.name }}</span>
                </MenuItem>
                <Submenu v-else :name="menu.path" :title="menu.name">
                  <template slot="title">
                    <Icon v-if="menu.meta.type" :type="menu.meta.type" />
                    <span>{{ menu.name }}</span>
                  </template>

                  <template v-for="muSub in menu.children">
                    <div v-if="!muSub.children" :key="muSub.path">
                      <MenuItem :name="muSub.path">
                        <span>{{ muSub.name }}</span>
                      </MenuItem>
                    </div>
                    <div v-else :key="muSub.path">
                      <Submenu :name="muSub.path">
                        <template slot="title">
                          <span>{{ muSub.name }}</span>
                        </template>
                        <template v-for="muSbSub in muSub.children">
                          <MenuItem :name="muSbSub.path" :key="muSbSub.path">
                            <span>{{ muSbSub.name }}</span>
                          </MenuItem>
                        </template>
                      </Submenu>
                    </div>
                  </template>
                </Submenu>
              </div>
            </template>
          </Menu>
        </Sider> -->
          <layout-menu ref="sideMenu"></layout-menu>
        <Layout>
          <!-- <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon
              @click.native="collapsedSider"
              :class="rotateIcon"
              :style="{margin: '0 20px'}"
              type="md-menu"
              size="24"
            ></Icon>
            <Dropdown trigger="click" style="margin-left: 20px" @on-click="downClick">
              <a href="javascript:void(0)">
                用户{{username}}
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem name="loginOut">退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Header> -->
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
  // public isCollapsed: boolean = false;
  // public siderMenuList: Object[] = [];
  // activeName: string = "";
  // openNames: string[] = [];
  super_this: Object = this;
  test: string = 'hahha';

  // computed计算属性
  // private get rotateIcon(): string[] {
  //   return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
  // }

  // private get menuitemClasses(): string[] {
  //   return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
  // }

  // private get siderHeaderTitle(): string {
  //   return this.isCollapsed ? "HA" : "This is Ha";
  // }

  // private get siderHeaderClasses(): string[] {
  //   return ["sider_hader", this.isCollapsed ? "collapsed-menu" : ""];
  // }
  
  // // 原 computed的 ...mapGetters
  // @Getter('username') public username!: string;

  // 原methods的...mapActions
  @Action("initStateData") public initStateData!: Function;  

  // // 父组件 需要传递给子组件的值
  // @Provide('refMenu') $refs: Object;

  // methods数据
  // public collapsedSider(): void {
  //   this.$refs.sideMenu.toggleCollapse();
  // }

  // /**
  //  * 菜单改变时，跳转到对应路由
  //  */
  // public menuOnSelect(val: any): void {
  //   console.log("val", val, arguments);
  //   if (this.$route.path !== val) {
  //     this.$router.push(val);
  //   }
  // }

  // /**
  //  * 初始化菜单数据、高亮菜单栏、打开子菜单等
  //  */
  // public initMenusAndActive(): void {
  //   this.siderMenuList = [...this.$router.options.routes];
  //   this.activeName = this.$route.path;
  //   if (this.siderMenuList.length) {
  //     this.openNames = [];
  //     this.siderMenuList.forEach((item: Object) => {
  //       if (item.children && item.children[0].name) {
  //         this.openNames.push(item.path);
  //         item.children.forEach((chItem: Object) => {
  //           if (chItem.children) {
  //             this.openNames.push(chItem.path);
  //           }
  //         });
  //       }
  //     });
  //   }
  // }

  // /**
  //  * 顶部下拉框操作
  //  */
  // public downClick(name: string): void {
  //   console.log("name========", name);
  //   if (name == "loginOut") {
  //     this.$router.push("/login");
  //   }
  // }

  // 生命周期
  private created(): void {
    // this.initMenusAndActive();
  }

  private beforeDestroy(): void {
    this.initStateData();
    console.log("beforeDestroy----------");
    console.log(this.$store.state);
  }
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
  // .layout-header-bar {
  //   background: #fff;
  //   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   .ivu-dropdown {
  //     margin-right: 20px;
  //   }
  // }
  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  // .menu-icon {
  //   transition: all 0.3s;
  // }
  // .rotate-icon {
  //   transform: rotate(-90deg);
  // }
  
  // .menu-item span {
  //   display: inline-block;
  //   overflow: hidden;
  //   width: 69px;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   vertical-align: bottom;
  //   transition: width 0.2s ease 0.2s;
  // }
  // .menu-item i {
  //   transform: translateX(0px);
  //   transition: font-size 0.2s ease, transform 0.2s ease;
  //   vertical-align: middle;
  //   font-size: 16px;
  // }
  // .ivu-menu-vertical {
  //   .ivu-icon-ios-arrow-down {
  //     transform: translateY(-50%);
  //   }
  // }

  // // 菜单收缩后
  // .collapsed-menu {
  //   span {
  //     width: 0px;
  //     transition: width 0.2s ease;
  //   }
  //   i {
  //     transform: translateX(5px);
  //     transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  //     vertical-align: middle;
  //     font-size: 22px;
  //     &.ivu-icon-ios-arrow-down {
  //       opacity: 0;
  //     }
  //   }
  //   &.sider_hader {
  //     transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  //     p {
  //       font-size: 20px;
  //     }
  //   }
  //   &.ivu-menu-dark.ivu-menu-vertical {
  //     .ivu-menu-submenu {
  //       background: transparent;
  //       .ivu-menu-item {
  //         background: transparent !important;
  //       }
  //     }
  //   }
  // }
  // .ivu-layout-sider {
  //   .sider_hader {
  //     height: 64px;
  //     border-bottom: 1px solid #dcdddf;
  //     color: #fff;
  //     font-size: 18px;
  //     text-align: center;
  //   }
  // }
}
</style>