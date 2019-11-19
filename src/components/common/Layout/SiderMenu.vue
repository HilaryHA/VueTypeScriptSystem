<template>
  <div class="v_layout_menu">
    <Sider ref="sideMenu" hide-trigger collapsible :collapsed-width="78" v-model="menuIsCollapsed">
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
              :title="$t(`route.${menu.meta.title}`)"
            >
              <Icon v-if="menu.meta.type" :type="menu.meta.type"></Icon>
              <!-- <span>{{ menu.name }}</span> -->
              <span>{{ $t(`route.${menu.meta.title}`) }}</span>
            </MenuItem>
            <Submenu v-else :name="menu.path" :title="$t(`route.${menu.meta.title}`)">
              <template slot="title">
                <Icon v-if="menu.meta.type" :type="menu.meta.type" />
                <span>{{ $t(`route.${menu.meta.title}`) }}</span>
              </template>

              <template v-for="muSub in menu.children">
                <div v-if="!muSub.children" :key="muSub.path">
                  <MenuItem :name="muSub.path" :title="$t(`route.${muSub.meta.title}`)">
                    <span>{{ $t(`route.${muSub.meta.title}`) }}</span>
                    <!-- <span>{{ muSub.name }}</span> -->
                  </MenuItem>
                </div>
                <div v-else :key="muSub.path">
                  <Submenu :name="muSub.path" :title="$t(`route.${muSub.meta.title}`)">
                    <template slot="title">
                      <span>{{ $t(`route.${muSub.meta.title}`) }}</span>
                    </template>
                    <template v-for="muSbSub in muSub.children">
                      <MenuItem :name="muSbSub.path" :key="muSbSub.path" :title="$t(`route.${muSbSub.meta.title}`)">
                        <!-- <span>{{ muSbSub.name }}</span> -->
                        <span>{{ $t(`route.${muSbSub.meta.title}`) }}</span>
                      </MenuItem>
                    </template>
                  </Submenu>
                </div>
              </template>
            </Submenu>
          </div>
        </template>
      </Menu>
    </Sider>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "LayoutMenu"
})
export default class LayoutMenu extends Vue {
  // 原 data 数据
  public siderMenuList: Object[] = [];
  public activeName: string = "";
  public openNames: string[] = [];

  // 获取计算属性; 原 computed 的get()
  private get menuitemClasses(): string[] {
    return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
  }

  private get siderHeaderTitle(): string | object {
    return this.isCollapsed ? this.$i18n.t('navbar.logoMin') : this.$i18n.t('navbar.logoMax');
  }

  private get siderHeaderClasses(): string[] {
    return ["sider_hader", this.isCollapsed ? "collapsed-menu" : ""];
  }

  // 原 computed的 ...mapGetters
  @Getter("isCollapsed") public isCollapsed!: boolean;

  // get 得到计算属性
  get menuIsCollapsed(): boolean {
    return this.isCollapsed
  }
 
  // set 设置计算属性
  set menuIsCollapsed(newIsColl: boolean) {
    console.log('----set--------newIsColl----------', newIsColl, arguments)
    this.setStateData({
        key: 'isCollapsed',
        value: newIsColl
    })
    console.log('----set--------isCollapsed----------', this.isCollapsed)
  }

  // 生命周期
  private created(): void {
    this.initMenusAndActive();
  }
  
  // 原methods的...mapActions
  @Action("setStateData") public setStateData!: Function;  
  
  // methods 方法
  /**
   * 菜单改变时，跳转到对应路由
   */
  public menuOnSelect(val: any): void {
    // console.log("val", val, arguments);
    if (this.$route.path !== val) {
      this.$router.push(val);
    }
  }

  /**
   * 初始化菜单数据、高亮菜单栏、打开子菜单等
   */
  public initMenusAndActive(): void {
    this.siderMenuList = [...(this.$router as any).options.routes];
    this.activeName = this.$route.path;
    if (this.siderMenuList.length) {
      this.openNames = [];
      this.siderMenuList.forEach((item: any) => {
        if (item.children && item.children[0].name) {
          this.openNames.push(item.path);
          item.children.forEach((chItem: any) => {
            if (chItem.children) {
              this.openNames.push(chItem.path);
            }
          });
        }
      });
    }
  }
}
</script>
<style lang="scss">
.v_layout_menu {
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .ivu-menu-vertical {
    .ivu-icon-ios-arrow-down {
      transform: translateY(-50%);
    }
  }
  // 菜单收缩后
  .collapsed-menu {
    span {
      width: 0px;
      transition: width 0.2s ease;
    }
    i {
      transform: translateX(5px);
      transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
      vertical-align: middle;
      font-size: 22px;
      &.ivu-icon-ios-arrow-down {
        opacity: 0;
      }
    }
    &.sider_hader {
      transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
      p {
        font-size: 20px;
      }
    }
    &.ivu-menu-dark.ivu-menu-vertical {
      .ivu-menu-submenu {
        background: transparent;
        .ivu-menu-item {
          background: transparent !important;
        }
      }
    }
  }
  .ivu-layout-sider {
    height: 100%;
    .sider_hader {
      height: 64px;
      border-bottom: 1px solid #dcdddf;
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
  }
}
</style>