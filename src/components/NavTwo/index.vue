<template>
    <div class="v_nav_two">
        <MySearchForm ref='searchForm'></MySearchForm>
        <Table stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import data from '@/assets/mockData/table2.ts';
import MySearchForm from '../common/SearchForm/index.vue';
import { getLists } from '@/api/table';

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
        this.initData()
        
        // console.log('data-----', data.tableData)
        // this.data1 = data.tableData;
    }

    // methods
    /**
     * 初始化表格数据
     */
    private async initData() {
        let from = {}
        if(Object.keys(this.$refs).length && this.$refs.searchForm) {
            let tempFrom = (this.$refs.searchForm as any).formInline
            from = {
                startDate: tempFrom.startDate,
                endDate: tempFrom.endDate,
                user: tempFrom.user
            }
        }
        const { data } = await getLists(from);
        this.data1 = data.items;
    }

}
</script>
<style lang="scss">
.v_nav_two {}
</style>