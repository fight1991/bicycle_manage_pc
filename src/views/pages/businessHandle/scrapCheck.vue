<template>
  <section class="sys-main view-port-min bg-c">
    <card-box>
      <!-- 表单回显区域 -->
      <div class="part-one">
        <el-form :model="baseForm" label-position="left" label-width="100px">
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <el-form-item label="车牌号码:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="整车编号:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="车辆品牌:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="型号规格:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="车辆属性:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="申请人:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="申请时间:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="联系方式:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="申请原因:">
                <div>ET00001</div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <el-form-item label="车辆合格证:">
                <div class="img-detail">
                  <el-image class="img" fit="cover" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"></el-image>
                </div>
              </el-form-item>
            </el-col>
            <el-col :sm="12" :md="8">
              <el-form-item label="车架图片:">
                <div class="img-detail">
                  <el-image class="img" fit="cover" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"></el-image>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 审核意见区域 -->
      <div class="part-two">
        <check></check>
      </div>
      <!-- 提交按钮区域 -->
      <div class="part-three">
        <el-row type="flex" justify="center">
          <el-button type="primary" @click="submitBtn">提交</el-button>
          <el-button @click="cancelBtn">取消</el-button>
        </el-row>
      </div>
    </card-box>
  </section>
</template>
<script>
import check from './components/check'
export default {
  components: {
    check
  },
  data () {
    return {
      baseForm: {}
    }
  },
  methods: {
    // 表单提交
    submitBtn () {

    },
    // 取消按钮, 关闭当前页签, 并刷新返回列表页
    cancelBtn () {
      this.$tab.back({
        name: 'bus-businessH-scrap'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.img-box {
  display: flex;
}
.img-detail, .img {
  width: 200px;
  height: 200px;
}
.img-detail {
  background-color: @sys-bg;
  margin-top: 10px;
}
</style>
