<template>
  <section class="sys-main view-port-min bg-c">
    <card-box>
      <!-- 表单回显区域 -->
      <div class="part-one">
        <el-form label-position="left" label-width="90px">
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
                <div>{{detailForm.installationMethods == 'MAIL' ? '邮寄到家' : '安装点安装'}}</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="联系方式:">
                <div>{{detailForm.mobile}}</div>
              </el-form-item>
            </el-col>
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
                <div>{{detailForm.properties == 'STANDARD' ? '国标' : '非国标'}}</div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :sm="12" :md="6">
              <div class="img-detail">
                <el-image class="img" fit="contain" :src="detailForm.urlCertification"></el-image>
              </div>
              <div class="img-text">车辆合格证</div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="img-detail">
                <el-image class="img" fit="contain" :src="detailForm.urlInvoice"></el-image>
              </div>
              <div class="img-text">购车发票</div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div class="img-detail">
                <el-image class="img" fit="contain" :src="detailForm.urlVin"></el-image>
              </div>
              <div class="img-text">车架号图片</div>
            </el-col>
             <el-col :sm="12" :md="6">
              <div class="img-detail">
                <el-image class="img" fit="contain" :src="detailForm.urlMotorNo"></el-image>
              </div>
              <div class="img-text">电动机编码图片</div>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 审核意见区域 -->
      <div class="part-two">
        <check
          type="record"
          :pageFlag="pageFlag"
          :ways="detailForm.installationMethods || ''"
          :uid="uid"
          :vehicleId="vehicleId">
        </check>
      </div>
    </card-box>
  </section>
</template>
<script>
import check from './components/check'
import { recordDetail, industryRecordDetail } from '@/api/operator'
const apiMap = {
  owner: recordDetail,
  industry: industryRecordDetail
}
export default {
  components: {
    check
  },
  data () {
    return {
      uid: '',
      vehicleId: '',
      detailForm: {},
      pageFlag: ''
    }
  },
  created () {
    let { uid, vehicleId, pageFlag } = this.$route.query
    this.uid = uid
    this.vehicleId = vehicleId
    this.pageFlag = pageFlag
    this.getDetail()
  },
  methods: {
    // 获取详情
    async getDetail () {
      let { result } = await apiMap[this.pageFlag]({
        uid: this.uid,
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
.img-detail {
  width: 100%;
  height: 250px;
}
.img {
  width: 100%;
  height: 100%;
}
.img-text {
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
}

</style>
