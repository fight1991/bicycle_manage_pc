<template>
  <div class="check-area">
    <el-form :model="checkForm" :rules="rules" label-width="80px" label-position="left">
      <el-row :gutter="10">
        <div class="form-item">
          <el-form-item label="审核结果">
            <el-radio-group v-model="checkForm.status">
              <el-radio :label="1">通过</el-radio>
              <el-radio :label="2">不通过</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-row>
      <el-row :gutter="10">
        <div class="form-item">
          <el-form-item label="审核结果">
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="checkForm.reason">
            </el-input>
          </el-form-item>
        </div>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'my-check',
  data () {
    return {
      checkForm: {
        status: 1,
        reason: ''
      },
      rules: {
        reason: [{ required: true, message: '原因必填', trigger: 'blur' }]
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.check-area {
  border-top: 1px solid #ccc;
  padding: 20px 0;
}
.form-item {
  width: 450px;
}
</style>
