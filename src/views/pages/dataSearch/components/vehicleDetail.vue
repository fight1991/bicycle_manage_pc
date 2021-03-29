<template>
  <!-- 表单回显区域 -->
  <div class="part-one">
    <el-form label-position="left" label-width="100px">
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
        <el-col :sm="12" :md="8">
          <el-form-item label="登记时间:">
            <div>{{detailForm.registrationTime}}</div>
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
          <el-form-item label="车辆发票:">
            <div class="img-detail">
              <el-image class="img" fit="cover" :src="detailForm.urlInvoice"></el-image>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { vehicleDetail } from '@/api/operator'
export default {
  props: ['aid', 'vid'],
  data () {
    return {
      detailForm: {}
    }
  },
  mounted () {
    this.getDetail(this.aid, this.vid)
  },
  methods: {
    // 获取详情
    async getDetail (accountId, vehicleId) {
      let { result } = await vehicleDetail({
        accountId,
        vehicleId
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
