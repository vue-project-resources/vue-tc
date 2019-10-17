<template>
  <div>
    <el-table :data="dataSet" border style="width: 100%"
              @sort-change="sortChange"
    >
      <el-table-column v-for="(config,index) in tableConfig.columnConfig"
                       :key="index"
                       :fixed="config.fixed"
                       :sortable="config.sortable"
                       :type="config.type"
                       :prop="config.key"
                       :label="config.title"
                       :width="config.width">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align:left">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageBean.pageIndex"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageBean.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageBean.Total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {Table, TableColumn} from 'element-ui'
  import {PageBean} from "./pageBean";

  export default {
    name: "xc-table",
    components: {
      'el-table': Table,
      'el-table-column': TableColumn
    },
    props: {
      tableConfig: {
        type: Object,
        default: function () {
          return {}
        }
      },
      dataSet: Array,
      pageBean: {
        type: Object,
        default: function () {
          return new PageBean()
        }
      }
    },
    data() {
      return {}
    },
    created() {
      console.log(this.tableConfig);
      console.log(this.dataSet);
      console.log(this.pageBean);
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      sortChange(column) {
        console.log(column);
      },
      handleSizeChange() {

      },
      handleCurrentChange() {

      },
    }
  }
</script>

<style scoped>

</style>
