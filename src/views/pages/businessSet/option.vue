<template>
  <section class="sys-main view-port-min bg-c">
    <div class="content">
      <el-form size="mini" ref="form" :rules="rules" label-width="120px" label-position="right" :model="dataForm">
        <el-row :gutter="30">
          <el-col :lg="8" :md="12">
            <el-form-item label="名称" prop="nickName">
              <el-input v-model="dataForm.nickName" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="所属行业" prop="industry">
              <el-select v-model="dataForm.industry" style="width:100%">
                <el-option
                  v-for="item in industryList"
                  :key="item.code"
                  :label="item.value"
                  :value="item.code">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="联系人" prop="contactName">
              <el-input v-model="dataForm.contactName" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="联系电话" prop="contactMobile">
              <el-input v-model="dataForm.contactMobile" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="门店地址" prop="address">
              <el-input v-model="dataForm.address" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="管理员账号" prop="adminMobile">
              <el-input v-model="dataForm.adminMobile" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="管理员身份证" prop="adminIdNo">
              <el-input v-model="dataForm.adminIdNo" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :lg="8" :md="12">
            <el-form-item label="是否分部">
              <el-radio-group v-model="dataForm.branch">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="统一社会信用代码" prop="socialCreditCode">
              <el-input v-model="dataForm.socialCreditCode" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" v-if="!dataForm.branch">
            <el-form-item label="总部名称" prop="headquarters">
              <el-input v-model="dataForm.headquarters" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :lg="8" :md="12">
            <el-form-item label="门店照">
              <!-- urlOrgImage -->
              <upload :src.sync="dataForm.urlOrgImage"></upload>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
              <!-- urlBusinessLicense -->
            <el-form-item label="营业执照">
              <upload :src.sync="dataForm.urlBusinessLicense"></upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row type="flex" justify="center" class="button-area">
        <el-button size="small" @click="cancelBtn">取消</el-button>
        <el-button size="small" type="primary" @click="saveBtn">保存</el-button>
      </el-row>
    </div>
  </section>
</template>
<script>
import { orgAdd, orgDetail, orgEdit } from '@/api/org'
const apiObj = {
  add: orgAdd,
  edit: orgEdit
}
export default {
  data () {
    return {
      opType: 'add', // 记录操作类型
      industryList: [],
      dataForm: {
        nickName: '',
        industry: '',
        contactName: '',
        contactMobile: '',
        address: '',
        adminMobile: '',
        adminIdNo: '',
        branch: true,
        socialCreditCode: '',
        headquarters: '',
        urlOrgImage: '',
        urlBusinessLicense: ''
      },
      copyForm: {},
      rules: {
        nickName: [{ required: true, message: '必填', trigger: 'blur' }],
        industry: [{ required: true, message: '必填', trigger: 'change' }],
        contactName: [{ required: true, message: '必填', trigger: 'blur' }],
        contactMobile: [{ required: true, message: '必填', trigger: 'blur' }],
        address: [{ required: true, message: '必填', trigger: 'blur' }],
        adminMobile: [{ required: true, message: '必填', trigger: 'blur' }],
        adminIdNo: [{ required: true, message: '必填', trigger: 'blur' }],
        branch: true,
        socialCreditCode: [{ required: true, message: '必填', trigger: 'blur' }],
        headquarters: [{ required: true, message: '必填', trigger: 'blur' }]
      }
    }
  },
  async created () {
    let { opType, orgId } = this.$route.query
    this.opType = opType
    await this.initIndustryList()
    if (opType !== 'add') {
      this.getDetail(orgId)
    }
  },
  methods: {
    // 查询详情
    async getDetail (id) {
      let { result } = await orgDetail(id)
      this.dataForm = result
    },
    async initIndustryList () {
      let res = await this.translateDic('industry', 'list')
      console.log(res)
      this.industryList = res || []
      return true
    },
    saveBtn () {
      let isPass = this.validForm()
      if (!isPass) return
      let { result } = apiObj[this.opType](this.dataForm)
      if (result) {
        this.$message.success('操作成功!')
        this.$tab.back({
          name: 'bus-businessD-corpOption',
          refresh: true
        })
      }
    },
    async cancelBtn () {
      let res = await this.$openConfirm({
        content: '您确定要放弃本次操作吗?'
      })
      if (!res) return
      if (this.opType === 'add') {
        this.dataForm = {}
        this.dataForm.branch = true
      }
      if (this.opType === 'edit') {
        this.dataForm = JSON.parse(JSON.stringify(this.copyForm))
      }
    },
    validForm () {
      let isPass = true
      this.$refs.form.validate(valid => (isPass = valid))
      if (!isPass) return false
      let { urlOrgImage, urlBusinessLicense } = this.dataForm
      if (!urlOrgImage) {
        this.$message.error('请上传门店照')
        return false
      }
      if (!urlBusinessLicense) {
        this.$message.error('请上传营业执照')
        return false
      }
      return true
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    padding: 40px;
  }
  .button-area {
    padding-top: 50px;
  }
</style>
