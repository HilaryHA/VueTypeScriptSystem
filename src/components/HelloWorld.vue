<template>
  <div class="hello">
    <h3> {{ msg }} </h3>
     <i-switch v-model="switch1" />
     <i-circle :percent="80" dashboard>
        <span class="demo-circle-inner" style="font-size:24px">80%</span>
    </i-circle>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  // 原props下的属性值
  @Prop() private msg!: string; // '!'表示必填属性值 '?'表示可选属性值
  
  // 原data数据
  switch1: boolean = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
