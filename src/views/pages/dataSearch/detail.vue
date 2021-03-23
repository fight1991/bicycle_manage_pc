<template>
  <section class="sys-main view-port-min bg-c">
    <card-box>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="电动自行车信息" name="car">
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="整车编号">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车辆品牌">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="型号规格">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车辆属性">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="登记时间">ET0001</list-title>
            </el-col>
          </el-row>
          <div class="img-box">
            <div class="img-item">
              <div class="title">车辆合格证</div>
              <div class="img-detail">
                <el-image class="img" fit="cover" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"></el-image>
              </div>
            </div>
            <div class="img-item">
              <div class="title">车架图片</div>
              <div class="img">
                <el-image class="img" fit="cover" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"></el-image>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="车主信息" name="owner">
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <list-title label="车主姓名">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="姓名">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="身份证">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="联系方式">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="联系地址">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="详细地址">ET0001</list-title>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </card-box>
  </section>
</template>
<script>
import listTitle from '@/views/pages/components/listTile'
export default {
  components: {
    listTitle
  },
  data () {
    return {
      activeName: 'car',
      busInfo: {}, // 电动自行车信息
      ownerInfo: {} // 车主信息
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>
<style lang="less" scoped>
.img-box {
  padding-top: 40px;
  display: flex;
  align-items: center;
  .img-item {
    display: flex;
    align-items: flex-start;
    margin-right: 50px;
    .title {
      margin-right: 20px;
    }
  }
  .img-detail, .img {
    width: 200px;
    height: 200px;
  }
  .img-detail {
    background-color: @sys-bg;
  }
}
</style>
