<template>
  <div>
    <xc-table
      :tableConfig="tableConfig"
      :page-bean="pageBean"
      :dataSet="tableData"
      @pageChange="pageChange">
      <template slot-scope="{ row }" slot="aaa">
        <div>{{row.name}}</div>
      </template>
      <template slot-scope="{ row ,index}" slot="bbb">
        <div @click="click">{{row.id}}</div>
        <el-badge :value="index" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </template>
    </xc-table>
  </div>
</template>

<script>
  import {PageBean} from "../../common/components/table/pageBean";

  export default {
    data() {
      return {
        tableData: [],
        totalData: [],
        tableConfig: {},
        pageBean: {},
        editName: ''
      }
    },
    created() {
      this.tableConfig = {
        bordered: false,
        columnConfig: [
          {type: 'selection', fixed: 'left', width: 65},
          {title: '姓名', width: 100, sortable: 'custom', configurable: true, key: 'name'},
          {title: '省', width: 150, sortable: 'custom', configurable: true, key: 'province'},
          {title: '市', width: 150, sortable: 'custom', configurable: true, key: 'city'},
          {title: '区', width: 150, sortable: 'custom', configurable: true, key: 'address'},
          {
            title: '自定义',
            type: 'render',
            slotName: 'aaa',
            width: 150,
            sortable: 'custom',
            configurable: true,
            key: 'address'
          },
          {
            title: '自定义模版',
            type: 'render',
            slotName: 'bbb',
            width: 150,
            sortable: 'custom',
            configurable: true,
            key: 'address'
          },
          {title: '日期', sortable: 'custom', configurable: true, key: 'date'},
        ],
        topButtons: [
          {
            text: '新增',
            permissionCode: '03-1-2',
            handle: () => {
              console.log(this.$refs.render);
            }
          },
          {
            text: '删除',
            btnType: 'danger',
            className: 'table-top-delete-btn',
            iconClassName: 'fiLink-delete',
            permissionCode: '03-1-4',
            needConfirm: true,
            canDisabled: true,
            confirmContent: '确认删除吗？',
            handle: (data) => {
              console.log(data);
            }
          }
        ],
        sort: (column) => {
          console.log(column);
        }
      };
      this.pageBean = new PageBean(10, 1, this.tableData.length);
      this.mockData();
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      aaa() {
        console.log(111);
      },
      click() {
        console.log(11212);
      },
      pageChange(pageBean) {
        this.tableData = this.totalData.slice((pageBean.pageIndex - 1) * pageBean.pageSize, (pageBean.pageIndex) * pageBean.pageSize)
      },
      mockData() {
        const data = [];
        setTimeout(() => {
          for (let i = 1; i <= 100; i++) {
            data.push({id: 'ooxx' + i, name: 'zhangsan' + i, province: '上海', address: '上海市普陀区金沙江路 1516 弄',})
          }
          this.totalData = data;
          this.pageBean.Total = data.length;
          this.tableData = this.totalData.slice((this.pageBean.pageIndex - 1) * this.pageBean.pageSize, (this.pageBean.pageIndex) * this.pageBean.pageSize)

        }, 3000)
      }
    }
  }
</script>
