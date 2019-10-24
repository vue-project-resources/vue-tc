<template>
    <div>
        <div>
            <el-button type="primary" @click="dialogEditVisible = true">打开嵌套表格的 Dialog</el-button>
            <el-dialog title="营销单详情" width="920px" @close="isEdit = false" class="dialog dialogAdd" custom-class="custom-dialog"
                :visible.sync="dialogEditVisible" :close-on-click-modal='false'>
                <el-form ref="editForm" style="margin-right: 20px;" :model="editForm" :inline="true" label-position="right" label-width="110px" size="mini">
                <el-form-item label="工单号" prop="no">
                    <el-input v-model="editForm.no" disabled></el-input>
                </el-form-item>
                <el-form-item label="客户姓名" prop="khxm">
                    <el-input v-model="editForm.khxm" :disabled="!isEdit || editForm.openId"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="khdh">
                    <el-input v-model="editForm.khdh" :disabled="!isEdit || editForm.openId"></el-input>
                </el-form-item>
                <el-form-item label="客户地址">
                    <el-input v-model="editForm.address" disabled></el-input>
                </el-form-item>
                <el-form-item label="营销人员-工号">
                    <el-input v-model="editForm.yxry" disabled></el-input>
                </el-form-item>
                <el-form-item label="网格区域">
                    <el-input v-model="editForm.qywg" disabled></el-input>
                </el-form-item>
                <el-form-item label="业务类型" prop="ywlx">
                    <el-select v-model="editForm.ywlx" :disabled="!isEdit" placeholder="">
                    <el-option v-for="item in ywlxList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="报装宽带兆数(M)" prop="kdzs" class="long-label">
                    <el-select v-model="editForm.kdzs" :disabled="!isEdit" placeholder="">
                    <el-option v-for="item in kdzsList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机基础套餐(最低消费)" class="long-label" prop="sjjctc" >
                    <el-select v-model="editForm.sjjctc" :disabled="!isEdit" placeholder="">
                    <el-option v-for="item in sjtcList" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="业务受理单截屏">
                    <p><a class="text-base" @click="show">查看图片</a></p>
                </el-form-item>
                <el-form-item label="下单时间" prop="createTime" >
                    <el-input v-model="editForm.createTime" disabled></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="editForm.remark" :disabled="!isEdit"></el-input>
                </el-form-item>
                </el-form>
            
                <div slot="footer" class="dialog-footer" v-if="editForm.state != 3">
                    <el-button v-if="!isEdit" @click="isEdit = true" size="mini">编 辑</el-button>
                    <el-button v-else @click="cancelEdit" size="mini">取消编辑</el-button>
                    <el-button type="primary" @click="saveEdit" size="mini">保 存</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editForm: {},        // 新增表单
            isEdit: false,   // 是否编辑
            dialogEditVisible: false,  // 新增模态框
            images: [], // 图片信息
            ywlxList: [],    // 业务类型列表
            kdzsList: ['50', '100', '200', '300'],    // 报装宽带兆数列表
            sjtcList: ['38', '58', '88', '98', '128', '138', '188'],    // 手机基础套餐列表
        };
    },
    methods: {
        viewDetail(row){
            console.log(row)
            this.editForm = this.deepClone(row)
            this.dialogEditVisible = true
            this.$post("/anapi/YxdController/getById", {id: row.id}, (data) => {
                this.editForm = data.yxd
                this.editForm.qywg = row.name1 + row.name2 + row.name3 + row.gridName
                this.editForm.address = row.name1 + row.name2 + row.name3 + row.gridName + row.xxdz
                this.editForm.yxry = row.yxCname + '-' + row.yxId
                this.currentItem = this.deepClone(this.editForm)
            
                let imgs = data.yxd.imgs || []
                this.images = []
                imgs.map(item => {
                this.images.push(this.config.httpHeadUrl + item)
                })
            })
        },
        // 保存编辑
        saveEdit(){
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                this.startLoading()
                this.$post("/api/YxdController/editYxd", this.editForm, (data) => {
                    this.$message.success("修改成功！")
                    this.dialogEditVisible = false
                    this.getTableData(1)
                })
                }
            })
        },
        // 取消编辑
        cancelEdit(){
            this.isEdit = false
            this.editForm = this.deepClone(this.currentItem)
        },
        
        // 查看图片
        inited (viewer) {
            this.$viewer = viewer
        },
        show () {
            if(!this.images.length){
                this.$message.error("暂无图片")
                return
            }
            this.$viewer.show()
        },
    },
}
</script>

<style lang="scss" scoped>
    .model-title {
        width: 100%;
        height: 40px;
        background:#409EFF;
    }
</style>