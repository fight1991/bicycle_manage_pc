<template>
  <section class="sys-main">
    <!-- 查询区域 -->
    <search-bar>
      <el-form size="mini" label-width="70px" label-position="left" :model="searchForm">
        <el-row :gutter="30">
          <el-col :span="8">
            <el-form-item label="车牌号">
              <el-input v-model="searchForm.plateNo" clearable placeholder="请输入车牌号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="整车编号">
              <el-input v-model="searchForm.vin" clearable placeholder="请输入整车编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间">
              <el-date-picker
                clearable
                style="width:100%"
                v-model="times"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
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
          <cell-btn @click.native="routeTo(row)">审核</cell-btn>
        </template>
      </common-table>
      <div class="page-list">
        <page-box :pagination.sync="pagination" @change="getList"></page-box>
      </div>
    </func-bar>
  </section>
</template>
<script>
import { scrapList } from '@/api/operator'

export default {
  data () {
    return {
      searchForm: {
        plateNo: '',
        vin: '',
        updatedTimeStart: '',
        updatedTimeEnd: ''
      },
      times: [],
      resultList: [],
      pagination: {
        pageSize: 10,
        currPage: 1,
        count: 0
      },
      tableHead: [
        {
          label: '车牌号',
          prop: 'plateNo',
          checked: true
        },
        {
          label: '车辆品牌',
          prop: 'brand',
          checked: true
        },
        {
          label: '整车编号',
          prop: 'vin',
          checked: true
        },
        {
          label: '车主名',
          prop: 'idName',
          checked: true
        },
        {
          label: '申请时间',
          prop: 'createdTime',
          checked: true
        },
        {
          label: '申请原因',
          prop: 'reason',
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
  created () {
    this.search()
  },
  methods: {
    routeTo (row) {
      let { accountId, vehicleId } = row
      this.$tab.append({
        name: 'bus-businessH-scrapCheck',
        query: {
          accountId,
          vehicleId
        }
      })
    },
    reset () {
      this.searchForm = {
        plateNo: '',
        vin: '',
        updatedTimeStart: '',
        updatedTimeEnd: ''
      }
      this.search()
    },
    search () {
      this.pagination.currPage = 1
      this.getList(this.pagination)
    },
    // 获取列表
    async getList (pagination) {
      if (this.times && this.times.length > 0) {
        this.searchForm.updatedTimeStart = this.times[0]
        this.searchForm.updatedTimeEnd = this.times[1]
      } else {
        this.searchForm.updatedTimeStart = ''
        this.searchForm.updatedTimeEnd = ''
      }
      let { result } = await scrapList({
        pagination,
        params: this.searchForm
      })
      if (result) {
        let { pagination, list } = result
        this.resultList = list || []
        this.pagination.count = pagination.count
        this.pagination.currPage = pagination.currPage
        this.pagination.pageSize = pagination.pageSize
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
