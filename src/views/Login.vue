<template>
    <div class="v_login">
        <my-login></my-login>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyLogin from '@/components/Login/index.vue'; // @ is an alias to /src

@Component({
    // 原components属性
    components: {
        MyLogin
    }
})
export default class Login extends Vue{

}
</script>