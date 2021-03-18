<template>
  <div class="search-container">
    <transition name="list-complete">
      <slot></slot>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.search-container {
  padding: 15px 10px 10px;
  background-color: #fff;
  margin-bottom: 15px;
}
</style>
