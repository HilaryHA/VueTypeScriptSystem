<template>
  <div id="app">
    <router-view :class="i18n_class"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({
  name: 'App'
})
export default class App extends Vue {
  @Getter("language") public language!: string

  private get i18n_class(): string {
    return this.language == 'en' ? 'app-en-lang' : ''
  }

}
</script>
<style lang="scss">
@import './styles/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
