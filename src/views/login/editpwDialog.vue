<template>
  <div>
    <el-dialog
      title="修改密码"
      width="600px"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :modal-append-to-body="false">
      <el-form :model="formData" :rules="rules" label-width="130px">
        <el-form-item label="原密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="passwordNew">
          <el-input v-model="formData.passwordNew" :placeholder="pwInputHolder"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="passwordNew2">
          <el-input v-model="formData.passwordNew2" :placeholder="pwInputHolder"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelBtn">取 消</el-button>
        <el-button type="primary" @click="confirmBtn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'edit-password',
  props: ['visible'],
  data () {
    return {
      pwInputHolder: '密码长度6~32位, 由数字和字母组成',
      dialogFormVisible: false,
      formData: {
        password: '',
        passwordNew: '',
        passwordNew2: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_]{6,32}$/, message: '密码长度6~32位', trigger: 'blur' }
        ],
        passwordNew: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_]{6,32}$/, message: '密码长度6~32位', trigger: 'blur' }
        ],
        passwordNew2: [
          { required: true, message: '请确认新密码', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9_]{6,32}$/, message: '密码长度6~32位', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    'visible': function (newData) {
      this.dialogFormVisible = newData
    }
  },
  methods: {
    cancelBtn () {
      this.dialogFormVisible = false
      this.$emit('update:vibible', false)
    },
    confirmBtn () {
      this.dialogFormVisible = false
      this.$emit('update:vibible', false)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
