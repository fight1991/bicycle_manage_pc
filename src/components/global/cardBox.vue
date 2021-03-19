<template>
  <el-card class="box-card" :shadow="shadow">
    <div v-if="showHeader" slot="header" class="clearfix">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </el-card>
</template>
<script>
export default {
  props: {
    showHeader: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: String,
      default: 'none'
    }
  }
}
</script>
<style lang="less" scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
