<template>
  <card-box>
    <div class="function-container">
      <slot></slot>
    </div>
  </card-box>
</template>
<script>
import cardBox from './cardBox.vue'
export default {
  components: { cardBox },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>

</style>
