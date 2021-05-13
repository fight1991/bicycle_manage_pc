<template>
  <section class="sys-main view-port-min">
    <!-- 查询区域 -->
    <search-bar>
      <el-form size="mini" label-width="70px" label-position="left" :model="searchForm">
        <el-row :gutter="30">
          <el-col :lg="8" :md="12">
            <el-form-item label="城市">
              <el-input v-model="searchForm.cityCode" clearable placeholder="请选择"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="所属行业">
              <el-input v-model="searchForm.industry" clearable placeholder="请选择"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="上线状态">
              <el-select v-model="searchForm.orgStatus" style="width:100%">
                <el-option label="上线" value="online"></el-option>
                <el-option label="下线" value="offline"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="搜索词">
              <el-input v-model="searchForm.searchKey" clearable placeholder="企业名称、联系人、联系电话"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12">
            <el-form-item label="创建时间">
              <el-date-picker
                clearable
                style="width:100%"
                v-model="times"
                align="right"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :picker-options="pickerTimeOptions"
                :default-time="['00:00:00', '23:59:59']"
                type="datetimerange">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :md="12" align="right">
            <el-button size="mini" @click="reset">重置</el-button>
            <el-button size="mini" type="primary" @click="search">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </search-bar>
    <!-- 表格区域 -->
    <func-bar>
      <el-row class="table-btn" type="flex" justify="start">
        <el-button size="mini" icon="iconfont icon-add" @click="routeTo({}, 'add')">添加</el-button>
      </el-row>
      <common-table :tableHeadData="tableHead" :tableList="resultList">
        <template #op="{row}">
          <div class="btn-list">
            <cell-btn color="#0ADD9E" @click.native="routeTo(row, 'edit')">编辑</cell-btn>
            <cell-btn color="#FA6400" @click.native="updateStatus(row)">下线</cell-btn>
            <cell-btn @click.native="routeTo(row, 'look')">详情</cell-btn>
          </div>
        </template>
      </common-table>
      <div class="page-list">
        <page-box :pagination.sync="pagination" @change="getList"></page-box>
      </div>
    </func-bar>
  </section>
</template>
<script>
import { orgList, updateOrgStatus } from '@/api/org'
export default {
  data () {
    return {
      searchForm: {
        cityCode: '',
        createdTimeEnd: '',
        createdTimeStart: '',
        industry: '',
        orgStatus: '',
        searchKey: ''
      },
      times: [],
      resultList: [],
      pagination: {
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },
      tableHead: [
        {
          label: '城市',
          prop: 'city',
          checked: true
        },
        {
          label: '企业名称',
          prop: 'orgName',
          checked: true
        },
        {
          label: '所属行业',
          prop: 'industry',
          checked: true
        },
        {
          label: '门店地址',
          prop: 'createdTime',
          checked: true
        },
        {
          label: '联系人',
          checked: true,
          prop: 'contactName'
        },
        {
          label: '联系电话',
          checked: true,
          prop: 'contactMobile'
        },
        {
          label: '上线状态',
          checked: true,
          prop: 'orgStatus'
        },
        {
          label: '创建时间',
          checked: true,
          prop: 'createdTime'
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
    reset () {
      this.searchForm = {
        cityCode: '',
        createdTimeEnd: '',
        createdTimeStart: '',
        industry: '',
        orgStatus: '',
        searchKey: ''
      }
      this.times = []
      this.search()
    },
    search () {
      this.pagination.pageIndex = 1
      this.getList(this.pagination)
    },
    // 获取列表
    async getList (pagination) {
      let { result, page } = await orgList({
        page: pagination,
        data: this.searchForm
      })
      if (result) {
        this.resultList = result || []
        this.pagination.total = page.total
        this.pagination.pageIndex = page.pageIndex
        this.pagination.pageSize = page.pageSize
      }
    },
    // 下线
    async updateStatus ({ orgId }) {
      let { result } = await updateOrgStatus({
        orgStatus: 'offline',
        orgId
      })
      if (result) {
        this.search()
      }
    },
    // 跳转到相关详情页面
    routeTo (row, type) {
      this.$tab.append({
        name: '',
        query: {
          opType: type,
          orgId: row.orgId || ''
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.btn-list {
  justify-content: space-around;
  display: flex;
}
</style>
