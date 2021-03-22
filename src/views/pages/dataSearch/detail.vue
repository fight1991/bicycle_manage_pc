<template>
  <section class="sys-main view-port bg-c">
    <card-box>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="电动自行车信息" name="car">
          <el-row :gutter="10">
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
            <el-col :sm="12" :md="8">
              <list-title label="车牌号码">ET0001</list-title>
            </el-col>
          </el-row>
          <div class="img-box">
            <div class="img-item">
              <div class="title">车辆合格证</div>
              <div class="img"></div>
            </div>
            <div class="img-item">
              <div class="title">车架图片</div>
              <div class="img"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="车主信息" name="owner">
          车主信息
        </el-tab-pane>
      </el-tabs>
    </card-box>
  </section>
</template>
<script>
import listTitle from './components/listTile'
export default {
  components: {
    listTitle
  },
  data () {
    return {
      activeName: 'car'
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
    margin-right: 20px;
    .title {
      margin-right: 20px;
    }
  }
  .img {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
  }
}
</style>
