<template>
  <section class="sys-main view-port-min bg-c">
    <div class="content">
      <el-form size="mini" label-width="120px" label-position="right" :model="dataForm">
        <el-row :gutter="30">
          <el-col :lg="8" :md="12">
            <el-form-item label="名称">
              <el-input v-model="dataForm.nickName" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="所属行业">
              <el-select v-model="dataForm.industry" style="width:100%">
                <el-option
                  v-for="item in industryList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="联系人">
              <el-input v-model="dataForm.contactName" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="联系电话">
              <el-input v-model="dataForm.contactMobile" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="门店地址">
              <el-input v-model="dataForm.address" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="管理员账号">
              <el-input v-model="dataForm.adminMobile" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="管理员身份证">
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
            <el-form-item label="统一社会信用代码">
              <el-input v-model="dataForm.socialCreditCode" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" v-if="!dataForm.branch">
            <el-form-item label="总部名称">
              <el-input v-model="dataForm.headquarters" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :lg="8" :md="12">
            <el-form-item label="门店照">
              <!-- urlOrgImage -->
              <upload width="120" height="120"></upload>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
              <!-- urlBusinessLicense -->
            <el-form-item label="营业执照">
              <upload width="120" height="120"></upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row type="flex" justify="center" class="button-area">
        <el-button size="small">取消</el-button>
        <el-button size="small" type="primary">保存</el-button>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
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
      }
    }
  },
  created () {

  },
  methods: {

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
