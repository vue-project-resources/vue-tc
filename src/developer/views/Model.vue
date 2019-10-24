<template>
    <div>
        <loading></loading>
        <div class="pd">
            <!-- <el-button type="primary" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button> -->
            <el-dialog :visible.sync="dialogTableVisible" width="50%">
                <div slot="title" class="dialog-title model-title">
                      收货地址
                </div>
                <From :foo="foo" :boo="boo"></From>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="changeDialogTableVisible">取消</el-button>
                    <el-button type="primary">保 存</el-button>
                </div>
            </el-dialog>
            {{address | capitalize(address)}}
            <!-- <button @click="saveEdit">提交</button> -->
            <button @click="sayHello" ref="target" v-throttle>提交</button>
        </div>
    </div>
</template>
<script>
  import Table from './Table.vue'
  import From from './From.vue'
  import debounce from '../menu/tools.js'
  import { Cookies,LocalStorage } from "../menu/cookie.js";
  export default {
    props:{
      dialogTableVisible: {
        type: Boolean,
        default: () => false
      }
    },
    data() {
      return {
        address: '收货地址',
        foo: "Javascript",
        boo: "Html",
        gridData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        // dialogTableVisible: false
      };
    },
    components: {
        Table,
        From
    },
    // filters: {
    //     capitalize: function(value){
    //       console.log(value)
    //         return value + '$';
    //     }
    // },
    methods: {
      changeDialogTableVisible () {
          this.$emit('changeDialogTableVisible',false);
      },
      saveEdit () {
         console.log('防抖!')
      },
      sayHello() {
        if (!this.$refs.target.isDisableClick) {
          console.log('Hello!')
        }
      }
    },
    created() {
      this.$bus.$on('todoSth', (params) => {
        console.log(params);
      })
    },
    mounted() {
        
    },
  }
</script>

<style lang="scss" scoped>
    .model-title{
      //color: red;
    }
</style>