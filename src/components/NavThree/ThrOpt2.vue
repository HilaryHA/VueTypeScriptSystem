<template>
  <div>
    <h1>ThrOpt2</h1>
    <RadioGroup v-model="button1" type="button">
      <Radio label="北京"></Radio>
      <Radio label="上海"></Radio>
      <Radio label="深圳"></Radio>
      <Radio label="杭州"></Radio>
    </RadioGroup>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ThrOpt2 extends Vue {
  button1: string = "北京";
  value1: number = 30;
  value2: number[] = [20, 60];
  value3: number[] = [20, 60];
}
</script>
<style lang="scss">
</style>