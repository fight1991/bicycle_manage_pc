<template>
  <section class="sys-main">
    <!-- 查询区域 -->
    <search-bar>
      <el-form size="mini" label-width="70px" label-position="left" :model="searchForm">
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="车牌号">
              <el-input v-model="searchForm.version" placeholder="请输入车牌号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="整车编号">
              <el-input v-model="searchForm.version" placeholder="请输入整车编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间">
              <el-date-picker
                clearable
                style="width:100%"
                v-model="times"
                value-format="timestamp"
                :picker-options="pickerTimeOptions"
                type="daterange">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24" align="right">
            <el-button size="mini" @click="reset">重置</el-button>
            <el-button size="mini" type="primary" @click="search">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </search-bar>
    <!-- 表格区域 -->
    <func-bar>
      <common-table :tableHeadData="tableHead" :tableList="resultList">
        <template #op="{row}">
          <cell-btn @click.native="routeTo">审核</cell-btn>
        </template>
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
        version: '',
        type: '',
        status: ''
      },
      times: [],
      typeList: [],
      statusList: [],
      resultList: [
        { type: '张三' },
        { type: '张三' },
        { type: '张三' }
      ],
      selection: [],
      pagination: {
        pageSize: 10,
        currPage: 1,
        count: 50
      },
      tableHead: [
        {
          label: '车牌号',
          prop: 'type',
          checked: true
        },
        {
          label: '车辆品牌',
          prop: 'type',
          checked: true
        },
        {
          label: '整车编号',
          prop: 'type',
          checked: true
        },
        {
          label: '车主名',
          prop: 'type',
          checked: true
        },
        {
          label: '申请时间',
          prop: 'type',
          checked: true
        },
        {
          label: '申请原因',
          prop: 'type',
          checked: true
        },
        {
          label: '操作',
          checked: true,
          slotName: 'op',
          fixed: 'right'
        }
      ]
    }
  },
  methods: {
    routeTo () {
      this.$tab.append({
        name: 'bus-businessH-scrapCheck'
      })
    },
    reset () {
      this.searchForm = {
        version: '',
        type: '',
        status: ''
      }
      this.search()
    },
    search () {
      this.pagination.currPage = 1
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
        this.pagination.count = result.count
        this.pagination.currPage = result.currPage
        this.pagination.pageSize = result.pageSize
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
