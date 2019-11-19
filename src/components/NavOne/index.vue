<template>
    <div class="v_nav_one">
        <MySearchForm></MySearchForm>
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from '@/assets/mockData/table.ts';
import MySearchForm from '../common/SearchForm/index.vue';

@Component({
    // 原components属性
    components: {
        MySearchForm
    }
})
export default class NavOne extends Vue {
    
    // 原data数据
    data1: Object[] = [];
    // computed 
    private get columns1(): Object[]  {
        return [
                    {
                        title: `${this.$i18n.t('table.name')}`,
                        key: 'name'
                    },
                    {
                        title: `${this.$i18n.t('table.age')}`,
                        key: 'age'
                    },
                    {
                        title: `${this.$i18n.t('table.address')}`,
                        key: 'address'
                    },
                    {
                        title: `${this.$i18n.t('table.ip')}`,
                        key: 'ip'
                    },
                    {
                        title: `${this.$i18n.t('table.date')}`,
                        key: 'date'
                    }
                ]
    }

    // 生命周期
    private created(): void{
        this.data1 = data.tableData;        
    }

}
</script>
<style lang="scss">
.v_nav_one {}
</style>