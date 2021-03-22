<template>
  <div class="box">
    <div class="label">{{label + ':'}}</div>
    <div class="value">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .box {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .label {
    margin-right: 5px;
  }
  .value {
    padding: 0 5px;
  }
</style>
