<template>
  <div class="box">
    <span class="text-color">
      <slot></slot>
    </span>
    <el-divider v-if="showDivider" direction="vertical"></el-divider>
  </div>
</template>
<script>
export default {
  props: {
    showDivider: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.text-color {
  color: @sys-theme;
}
.box {
  display: inline-block;
  cursor: pointer;
}
</style>
