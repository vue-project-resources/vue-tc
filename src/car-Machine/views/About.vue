<template>
  <div>
    <xc-table
      :tableConfig="tableConfig"
      :page-bean="pageBean"
      :dataSet="tableData">
    </xc-table>
  </div>

</template>

<script>
  import {PageBean} from "../../common/components/table/pageBean";

  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        tableConfig: {aa: 11},
        pageBean: {}
      }
    },
    created() {
      this.tableConfig = {
        columnConfig: [
          {type: 'selection', fixed: 'left', width: 65},
          {title: '姓名', width: 100, sortable: 'custom', configurable: true, key: 'name'},
          {title: '省', width: 150, sortable: 'custom', configurable: true, key: 'province'},
          {title: '市', width: 150, sortable: 'custom', configurable: true, key: 'city'},
          {title: '区', width: 150, sortable: 'custom', configurable: true, key: 'address'},
          {title: '日期',  sortable: 'custom', configurable: true, key: 'date'},
        ]
      };
      this.pageBean = new PageBean(10, 1, this.tableData.length)
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>
