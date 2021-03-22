<template>
  <section class="sys-main">
    <card-box>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="电动自行车信息" name="car">
          自行车信息
        </el-tab-pane>
        <el-tab-pane label="车主信息" name="owner">
          车主信息
        </el-tab-pane>
      </el-tabs>
    </card-box>
  </section>
</template>
<script>
export default {
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

</style>
