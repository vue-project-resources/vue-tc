<template>
    <div class="scenes-model">
        <el-button type="primary" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
        <el-dialog :visible.sync="dialogTableVisible" width="50%">
            <div slot="title" class="dialog-title model-title">
                小场景创建
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="小场景名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="小场景简称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="小场景英文名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="小场景头像">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取消</el-button>
                <el-button type="primary">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogTableVisible: false
      }
    },
    methods: {
        onSubmit() {
            console.log(this.form);
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>