<template>
  <div>
    <!--顶部按钮-->
    <div style="padding: 12px 0;text-align: left">
      <el-button v-for="(button,index) in tableConfig.topButtons" :key="index"
                 @click="topHandle(button)">{{button.text}}
      </el-button>
    </div>
    <!--table主体-->
    <el-table ref="elTable"
              :data="dataSet"
              :max-height="tableConfig.maxHeight"
              :border="tableConfig.bordered" style="width: 100%"
              @selection-change="handleSelectionChange"
              @sort-change="sortChange">
      <template v-for="(config,index) in tableConfig.columnConfig">
        <el-table-column v-if="!config.slotName"
                         :key="index"
                         :fixed="config.fixed"
                         :sortable="config.sortable"
                         :type="config.type"
                         :prop="config.key"
                         :label="config.title"
                         :width="config.width">
        </el-table-column>
        <el-table-column v-if="config.type==='render'&&config.slotName"
                         :key="index"
                         :fixed="config.fixed"
                         :sortable="config.sortable"
                         :type="config.type"
                         :prop="config.key"
                         :label="config.title"
                         :width="config.width">
          <template v-if="config.slotName" slot-scope="scope">
            <slot :name="config.slotName" :row="scope.row" :index="scope.$index"></slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div style="text-align:left;padding: 20px 0">
      <el-pagination
        background
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
  import {Table, TableColumn, MessageBox} from 'element-ui'
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
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      sortChange(column) {
        this.tableConfig.sort(column)
      },
      handleSizeChange(event) {
        this.pageBean.pageSize = event;
        this.$emit('pageChange', this.pageBean)
      },
      handleCurrentChange(event) {
        this.pageBean.pageIndex = event;
        this.$emit('pageChange', this.pageBean)
      },
      handleSelectionChange(data) {
        console.log(data);
      },
      topHandle(operation) {
        if (this.tableConfig.isLoading) {
          return;
        }
        if (operation.needConfirm) {
          MessageBox.confirm(operation.confirmContent, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            const data = this.$refs.elTable.selection;
            operation.handle(data);
          }).catch(() => {
          });
        } else {
          const data = this.$refs.elTable.selection;
          operation.handle(data);
        }
      }
    }
  }
</script>

<style scoped>

</style>
