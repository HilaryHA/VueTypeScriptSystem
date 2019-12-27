<template>
  <div class="v_search_form">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="date">
        <DatePicker
          type="daterange"
          :value="formInline.date"
          format="yyyy-MM-dd"
          placement="top-start"
          :placeholder="$t('table.serDate')"
          :options="setDateOptions"
          @on-change="dateChange"
        ></DatePicker>
      </FormItem>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" :placeholder="$t('table.serName')" @on-change="inputChange" clearable>
          <Icon type="ios-person-outline" slot="suffix"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSearch('formInline')"> {{ $t('table.search') }} </Button>
      </FormItem>
    </Form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

// 定义接口类型
interface SearchForm {
  date: Array<Date>,
  user: string,
  startDate?: string | Date,
  endDate?: string | Date
}

@Component
export default class MySearchForm extends Vue {  

  // 默认data数据
  formInline: SearchForm = {
    date: [],
    user: "",
    startDate: "",
    endDate: ""
  };
  ruleInline: Object = {
    user: [
      { 
        required: true,
        message: "Please fill in the user name",
        trigger: "blur"
      }
    ]
  };
  setDateOptions = {
    disabledDate(date: Date) {
      return date && date.valueOf() > Date.now();
    }
  };

  // 原computed中的...mapGetters ; @Getter 和 @Action 对应的值都需要非空
  @Getter("date") public date!: Date[];
  @Getter("name") public name!: string;
  // 原methods中的...mapActions
  @Action("setStateData") public setStateData!: Function;

  // // 原watch
  // @Watch('date', { immediate: true, deep: true })
  // watchDateChange(newVal, oldVal): void {
  //   console.log('==============watchDateChange======================');
  //   console.log(newVal, oldVal);
  //   console.log('====================================');
  // }

  // 默认生命周期
  private created(): void{
    this.initDateAndOther();
  }

  // 默认methods
  /**
   * [formName] '?' 表示非必填参数
   * void 表示该函数返回数据
   */
  public handleSearch(formName?: string): void {   
    // 父组件需要定义此函数 
    (this.$parent as any).initData()
  }

  /**
   * 修改input输入框user时
   */
  public inputChange($val: any): void{
    this.setStateData({
      key: 'name',
      value: this.formInline.user
    })
  }

  /**
   * 修改日期数据时
   */
  public dateChange($val: Date[]): void{
    this.formInline.date = [...$val]
    this.formInline.startDate = $val[0]
    this.formInline.endDate = $val[1]
    this.setStateData({
      key: 'date',
      value: $val
    })
  }

  /**
   * 初始化数据，根据store的state数据变化
   */
  public initDateAndOther(): void{
    if(this.name) {
      this.formInline.user = this.name;
    } 
    if(this.date && this.date.length) {
      this.formInline.date = this.date;
      this.formInline.startDate = this.date[0]
      this.formInline.endDate = this.date[1]
    }
  }

}
</script>
<style lang="scss">
.v_search_form {
  padding-left: 10px;
  margin-bottom: 5px;
  .ivu-date-picker-editor {
    width: 206px;
  }
}
</style>