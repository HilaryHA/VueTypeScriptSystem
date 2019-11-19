<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App -- HA"/> -->
    <my-home></my-home>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator';
import MyHome from '@/components/Home/index.vue';

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }

@Component({
  components : {
    MyHome
  }
})
export default class Home extends Vue {

}

</script>
