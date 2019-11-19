<template>
  <div class="module_login">
    <div class="layout">
      <Layout>
        <Header></Header>
        <Content>
          <Row type="flex" justify="center" align="middle" class="mu_login_form">
            <Col span="6">
              <Form
                ref="formValidate"
                :model="formValidate"
                :rules="ruleValidate"
                :label-width="labelWidthContent"
              >
                <FormItem :label="$t('login.name')" prop="name">
                  <Input v-model="formValidate.name" :placeholder="$t('login.name_placeholder')"></Input>
                </FormItem>
                <FormItem :label="$t('login.password')" prop="password">
                  <Input v-model="formValidate.password" type="password" :placeholder="$t('login.pass_placeholder')"></Input>
                </FormItem>
                <FormItem :label="$t('login.city')" prop="city">
                  <Select v-model="formValidate.city" placeholder="Select your city">
                    <Option value="beijing">{{ $t('login.city_one') }}</Option>
                    <Option value="chengdu">{{ $t('login.city_two') }}</Option>
                    <Option value="shenzhen">{{ $t('login.city_three') }}</Option>
                  </Select>
                </FormItem>
                <FormItem :label="$t('login.gender')" prop="gender" class="mu_radio_left">
                  <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">{{ $t('login.gender_one') }}</Radio>
                    <Radio label="female">{{ $t('login.gender_two') }}</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem :label="$t('login.interest')" prop="interest"  class="mu_radio_left">
                  <CheckboxGroup v-model="formValidate.interest">
                    <Checkbox label="Eat">{{ $t('login.interest_one') }}</Checkbox>
                    <Checkbox label="Sleep">{{ $t('login.interest_two') }}</Checkbox>
                    <Checkbox label="Run">{{ $t('login.interest_three') }}</Checkbox>
                    <Checkbox label="Movie">{{ $t('login.interest_Four') }}</Checkbox>
                  </CheckboxGroup>
                </FormItem>
                <FormItem :label="$t('login.desc')" prop="desc">
                  <Input
                    v-model="formValidate.desc"
                    type="textarea"
                    :autosize="{minRows: 2,maxRows: 5}"
                    :placeholder="$t('login.desc_placeholder')"
                  ></Input>
                </FormItem>
                <FormItem class="mu_btn_footer">
                  <Button type="primary" @click="handleSubmit('formValidate')"> {{ $t('login.submit') }} </Button>
                  <Button @click="handleReset('formValidate')" style="margin-left: 8px"> {{ $t('login.reset') }} </Button>                  
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';

@Component
export default class MyLogin extends Vue {
  // 原始data数据
  formValidate = {
    name: "Tom",
    password: "123456",
    city: "chengdu",
    gender: "female",
    interest: ['Sleep', 'Movie'],
    desc: "This is Vue + TypeScript Demo..."
  };
  ruleValidate = {
    name: [
      { required: true, message: "The name cannot be empty", trigger: "blur" }
    ],
    password: [
      { required: true, message: "Mailbox cannot be empty", trigger: "blur" }
    ],
    city: [
      { required: true, message: "Please select the city", trigger: "change" }
    ],
    gender: [
      { required: true, message: "Please select gender", trigger: "change" }
    ],
    interest: [
      {
        required: true,
        type: "array",
        min: 1,
        message: "Choose at least one hobby",
        trigger: "change"
      },
      {
        type: "array",
        max: 2,
        message: "Choose two hobbies at best",
        trigger: "change"
      }
    ],
    desc: [
      {
        required: true,
        message: "Please enter a personal introduction",
        trigger: "blur"
      },
      {
        type: "string",
        min: 20,
        message: "Introduce no less than 20 words",
        trigger: "blur"
      }
    ]
  };
  labelWidthContent = 80;

  // 原 mothods 对应的 ...mapAction
  @Action('setStateData') public setStateData!: Function;

  // mothods数据
  public handleSubmit(name: string): void {
    (this.$refs[name] as any).validate((valid: boolean) => {
      if (valid) {
        this.$Message.success("Login Success!");
        // console.log('this.$refs[name]-----', this.$refs[name])
        this.setStateData({
          key: 'username',
          value: (this.$refs[name] as any).model.name
        })
        this.$router.push('/option2/first')
      } else {
        this.$Message.error("信息没填完啦!");
      }
    });
  }

  public handleReset(name: string): void {
    // this.$refs[name].resetFields();
    // 防止报错，将前半部分数据，定义类型为any
    (this.$refs[name] as any).resetFields();
  }
}
</script>
<style lang="scss">
.module_login {
  text-align: center;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: #007eff52;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .ivu-layout {
    height: 100vh;
    .ivu-layout-header {
      background: transparent;
    }
    .mu_login_form {
      height: 100%;
      > .ivu-col {
        background: #FFF;
        border-radius: 5px;
        box-shadow: 3px 2px 7px 5px #93ccff;
        min-height: 482px;
        padding: 42px 20px 0 10px;
        min-width: 482px;
      }
      .mu_radio_left {
        .ivu-form-item-content {
          text-align: left;
        }
      }
      .mu_btn_footer {
        .ivu-form-item-content {
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>