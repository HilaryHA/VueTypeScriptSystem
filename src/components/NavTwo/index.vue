<template>
    <div class="v_nav_two">
        <MySearchForm></MySearchForm>
        <Table stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from '@/assets/mockData/table2.ts';
import MySearchForm from '../common/SearchForm/index.vue';

@Component({
    // 原components属性
    components: {
        MySearchForm
    }
})
export default class NavTwo extends Vue {

    // 原data数据
    // columns1: Object[] = [
    //                 {
    //                     title: 'Name',
    //                     key: 'name'
    //                 },
    //                 {
    //                     title: 'Age',
    //                     key: 'age'
    //                 },
    //                 {
    //                     title: 'Address',
    //                     key: 'address'
    //                 },
    //                 {
    //                     title: 'IP',
    //                     key: 'ip'
    //                 },
    //                 {
    //                     title: 'Date',
    //                     key: 'date'
    //                 }
    //             ];

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
        // console.log('data-----', data.tableData)
        this.data1 = data.tableData;
    }

}
</script>
<style lang="scss">
.v_nav_two {}
</style>