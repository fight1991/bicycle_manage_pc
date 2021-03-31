<template>
  <section class="sys-main view-port-min bg-c">
    <card-box>
      <!-- 表单回显区域 -->
      <div class="part-one">
        <el-form label-position="left" label-width="90px">
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <el-form-item label="车牌号码:">
                <div>{{detailForm.plateNo}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="整车编号:">
                <div>{{detailForm.vin}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="车辆品牌:">
                <div>{{detailForm.brand}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="型号规格:">
                <div>{{detailForm.specificationsModel}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="车辆属性:">
                <div>{{detailForm.propertiesValue}}</div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <el-form-item label="车辆合格证:">
                <div class="img-detail">
                  <el-image class="img" fit="cover" :src="detailForm.urlCertification"></el-image>
                </div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="车架图片:">
                <div class="img-detail">
                  <el-image class="img" fit="cover" :src="detailForm.urlInvoice"></el-image>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <el-form-item label="申请人:">
                <div>{{detailForm.idName}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="申请时间:">
                <div>{{detailForm.createdTime}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="安装方式:">
                <div>{{detailForm.installationMethodsValue}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="联系方式:">
                <div>{{detailForm.mobile}}</div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 审核意见区域 -->
      <div class="part-two">
        <check
          type="record"
          :ways="detailForm.installationMethods || ''"
          :accountId="accountId"
          :vehicleId="vehicleId">
        </check>
      </div>
    </card-box>
  </section>
</template>
<script>
import check from './components/check'
import { recordDetail } from '@/api/operator'
export default {
  components: {
    check
  },
  data () {
    return {
      accountId: '',
      vehicleId: '',
      detailForm: {}
    }
  },
  created () {
    let { accountId, vehicleId } = this.$route.query
    this.accountId = accountId
    this.vehicleId = vehicleId
    this.getDetail()
  },
  methods: {
    // 获取详情
    async getDetail () {
      let { result } = await recordDetail({
        accountId: this.accountId,
        vehicleId: this.vehicleId
      })
      if (result) {
        this.detailForm = result
      }
    }
  }
}
</script>
<style lang="less" scoped>
.img-box {
  display: flex;
}
.img-detail, .img {
  width: 180px;
  height: 180px;
}
.img-detail {
  background-color: @sys-bg;
  margin-top: 10px;
}
</style>
