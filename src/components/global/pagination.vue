<template>
  <div class="pagination" v-if='pagination.count != 0'>
    <el-pagination
      background
      :small="small"
      :pager-count= "5"
      @current-change="currentChange"
      @size-change="sizeChange"
      :current-page.sync="pagination.currPage"
      :page-sizes="pageSizes"
      :page-size="pagination.pageSize"
      :total="pagination.count"
      :layout="layout">
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'pagination',
  props: {
    small: {
      default: true
    },
    layout: {
      default: () => { // total, sizes, prev, pager, next, jumper
        return 'prev, pager, next, sizes, jumper'
      }
    },
    pagination: {
      type: Object,
      default: function () {
        return this.$store.state.pagination
      }
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 50]
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      lang: state => state.lang
    })
  },
  mounted () {
    // this.windowsWidth()
    // window.addEventListener('resize', this.windowsWidth)
  },
  methods: {
    currentChange (page) {
      this.pagination.currPage = page
      this.$emit('change', this.pagination)
      this.$emit('update:pagination', this.pagination)
    },
    sizeChange (size) {
      this.pagination.pageSize = size
      if ((this.pagination.currPage - 1) * size > this.pagination.count) {
        this.pagination.currPage = 1
      }
      this.$emit('change', this.pagination)
      this.$emit('update:pagination', this.pagination)
    }
    // windowsWidth () {
    //   if (document.documentElement.clientWidth < 768) {
    //     this.layout = 'prev, pager, next'
    //   } else {
    //     this.layout = 'total, sizes, prev, pager, next, jumper'
    //   }
    // }
  }
}
</script>
<style lang="less" scoped>
</style>
