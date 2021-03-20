<template>
  <section class="sys-main">
    <!-- 查询区域 -->
    <search-bar>
      <el-form size="mini" label-width="0px" :model="searchForm">
        <el-row :gutter="15">
          <el-col :span="8">
            <el-form-item>
              <el-input v-model="searchForm.version" placeholder="版本号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-select style="width:100%" v-model="searchForm.type" placeholder="choose">
                <el-option v-for="item in typeList" :label="item.label" :value="item.status" :key="item.status"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-select style="width:100%" v-model="searchForm.status" placeholder="type">
                <el-option v-for="(item,index) in statusList" :label="item" :value="item" :key="item + index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" align="left">
            <el-button size="mini" @click="reset">重置</el-button>
            <el-button size="mini" type="primary" @click="search">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </search-bar>
    <!-- 表格区域 -->
    <func-bar>
      <el-row class="table-btn" type="flex" justify="end">
        <el-button size="mini" icon="iconfont icon-import">导入</el-button>
        <el-button size="mini" icon="el-icon-delete">批量发布</el-button>
        <el-button size="mini" icon="el-icon-delete">批量删除</el-button>
      </el-row>
      <common-table :tableHeadData="tableHead" :select.sync="selection" :selectBox="true" :tableList="resultList">
      </common-table>
      <div class="page-list">
        <page-box :pagination.sync="pagination" @change="getList"></page-box>
      </div>
    </func-bar>
  </section>
</template>
<script>
export default {
  data () {
    return {
      searchForm: {
        version: '备案人变更',
        type: '',
        status: ''
      },
      typeList: [],
      statusList: [],
      resultList: [],
      selection: [],
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 50
      },
      tableHead: [
        {
          label: '设备类型',
          prop: 'type',
          checked: true
        },
        {
          label: '版本号',
          prop: 'type',
          checked: true
        },
        {
          label: '版本类型',
          prop: 'type',
          checked: true
        },
        {
          label: '审核状态',
          prop: 'type',
          checked: true
        },
        {
          label: '上传时间',
          prop: 'time',
          checked: true,
          slotName: 'time'
        }
      ]
    }
  },
  created () {
    console.log('变更')
  },
  methods: {
    reset () {
      this.searchForm = {
        version: '',
        type: '',
        status: ''
      }
      this.search()
    },
    search () {
      this.pagination.currentPage = 1
      this.getList(this.pagination)
    },
    // 获取列表
    async getList (pagination) {
      this.selection = []
      let { result } = await this.$post({
        url: '/c/v0/module/list',
        data: {
          ...pagination,
          condition: this.searchForm
        }
      })
      if (result) {
        this.resultList = result.data || []
        this.pagination.total = result.total
        this.pagination.currentPage = result.currentPage
        this.pagination.pageSize = result.pageSize
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
