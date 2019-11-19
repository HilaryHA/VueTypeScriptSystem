<template>
  <div class="v_layout_header">
    <Header :style="{padding: 0}" class="layout-header-bar">
      <Icon
        @click.native="collapsedSider"
        :class="rotateIcon"
        :style="{margin: '0 20px'}"
        type="md-menu"
        size="24"
      ></Icon>
      <Row :gutter="16" class="header-left">
        <Col span="8">
          <Dropdown trigger="click" style="margin-left: 20px" @on-click="switchLanguage">
            <a href="javascript:void(0)">
              <Icon type="md-planet" />
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="zh" :disabled="language === 'zh'">中文</DropdownItem>
              <DropdownItem name="en" :disabled="language === 'en'">英语</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col span="16">
          <Dropdown trigger="click" style="margin-left: 20px" @on-click="downClick">
            <a href="javascript:void(0)">
              用户 {{username}}
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="loginOut">退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { setLanguage } from '../../../utils/cookies';

@Component({
  name: "LayoutHeader"
})
export default class LayoutHeader extends Vue {
  // 原 props{ super_this: { type: Object } }
  @Prop(Object) super_this!: Object | undefined;

  // 原 computed的 ...mapGetters
  @Getter("username") public username!: string;
  @Getter("isCollapsed") public isCollapsed!: boolean;
  @Getter("language") public language!: string;

  // 原 methods的 ...mapActions
  @Action("setStateData") public setStateData!: Function

  // 原 computed计算属性
  private get rotateIcon(): string[] {
    return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
  }

  // // 子组件获取父组件的值
  // @Inject('refMenu') readonly refMenu!: string


  // 生命周期
  private created() {
    // console.log('===============language=====================');
    // console.log(this.language);
    // // console.log(this.refMenu);
    // console.log('====================================');
  }

  // 原 methods数据
  /**
   * 折叠按钮 点击事件
   */
  public collapsedSider(): void {
    // 该 UI组件提供的 toggleCollapse 回调， 参考 https://www.iviewui.com/components/layout
    (this.super_this as any).$refs.sideMenu.$refs.sideMenu.toggleCollapse();
  }

  /**
   * 顶部 用户下拉框操作
   */
  public downClick(name: string): void {
    if (name == "loginOut") {
      this.$router.push("/login");
    }
  }

  /**
   * 顶部 切换语言下拉框操作
   */
  public switchLanguage(lang: string): void {
    this.setStateData({
      key: 'language',
      value: lang,
      callback: setLanguage
    })
    this.$i18n.locale = lang
  }

}
</script>
<style lang="scss">
.v_layout_header {
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ivu-dropdown {
      .ivu-icon-md-planet {
        font-size: 20px;
        padding-right: 6px;
      }
    }
    .header-left {
      width: 228px;
    }
  }
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
}
</style>