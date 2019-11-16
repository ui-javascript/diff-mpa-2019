<template>
  <div class="demo">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input placeholder="名称" v-model="queryForm.name">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="备注" v-model="queryForm.remark">
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click="onSearchClick">查询</el-button>
        <el-button type="success" @click="onCreateClick">新增</el-button>
      </el-col>
    </el-row>
    <el-table :data="samplesData.data">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180">
      </el-table-column>
      <el-table-column prop="remark" label="备注" width="280">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="onCommandClick(scope.row,'view')" type="text" size="small">查看</el-button>
          <el-button @click="onCommandClick(scope.row,'edit')" type="text" size="small">编辑</el-button>
          <el-button @click="onCommandClick(scope.row,'del')" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination @size-change="onSizeChange" @current-change="onCurrentChange" :current-page="queryForm.currentPageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="queryForm.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="samplesData.total">
      </el-pagination>
    </div>
    <el-dialog title="示例数据修改" :visible.sync="editDialogVisible">
      <el-form :model="sampleForm">
        <el-form-item label="名称" :label-width="editFormLabelWidth">
          <el-input v-model="sampleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="editFormLabelWidth">
          <el-input v-model="sampleForm.remark" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSaveClick">保 存</el-button>
      </div>
    </el-dialog>
    <sample-info :name="name" :remark="remark"></sample-info>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component,Prop } from 'vue-property-decorator'
import { Sample } from '../../api/sample'
import {
  AllData,
  QueryForm,
  SampleForm
} from '../../models/sampleList/samplesData'
import { AxiosResponse } from 'axios'

import SampleInfo from './sampleInfo.vue'

@Component({
  components: {
    SampleInfo
  }
})
export default class SampleList extends Vue {
  @Prop()
  testMessage: String

  // 父子组件共享数据
  name: string = ''
  remark: string = ''
  // sample请求封装
  sampleFetch: Sample = new Sample()
  // 是否显示编辑对话框
  editDialogVisible: boolean = false
  // 编辑表单宽度
  editFormLabelWidth: string = '120px'
  // sample表格数据
  samplesData: AllData<number> = new AllData<number>()
  // 查询数据对象
  queryForm: QueryForm = new QueryForm()
  // 增改数据对象
  sampleForm: SampleForm = new SampleForm()

  // created钩子
  created () {
    this.getSamplesDataByPage()
  }

  // 获取每页数据
  getSamplesDataByPage (): void {
    this.sampleFetch.getByPage(this.queryForm).then((res: AxiosResponse) => {
      this.samplesData = res.data
    })
  }

  // 清空编辑表单
  clearEditForm (): void {
    this.sampleForm.id = null
    this.sampleForm.name = ''
    this.sampleForm.remark = ''
  }
  // 每页显示条数更改事件
  onSizeChange (size: number): void {
    this.queryForm.pageSize = size
    this.getSamplesDataByPage()
  }
  // 跳页操作
  onCurrentChange (currentPage: number): void {
    this.queryForm.currentPageIndex = currentPage
    this.getSamplesDataByPage()
  }
  // 操作点击事件
  onCommandClick (row: SampleForm, type: string): void {
    switch (type) {
      case 'edit':
        this.clearEditForm()
        this.sampleFetch.get(row.id).then((res: AxiosResponse) => {
          let data = res.data
          this.sampleForm = data
        })
        this.editDialogVisible = true
        break
      case 'del':
        this.sampleFetch.del(row.id).then((res: AxiosResponse) => {
          console.log(res)
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getSamplesDataByPage()
        })
        break
      case 'view':
        this.name = row.name
        this.remark = row.remark
        break
    }
  }
  // 搜索按钮点击事件
  onSearchClick (): void {
    this.getSamplesDataByPage()
  }
  // 创建点击事件
  onCreateClick (): void {
    this.clearEditForm()
    this.editDialogVisible = true
  }
  // 保存事件
  onSaveClick (): void {
    if (this.sampleForm.id) {
      // 更新
      this.sampleFetch.update(this.sampleForm).then((res: AxiosResponse) => {
        console.log(res)
        this.$message({
          message: '保存成功',
          type: 'success'
        })
        this.editDialogVisible = false
        this.getSamplesDataByPage()
      })
    } else {
      this.sampleFetch.post(this.sampleForm).then((res: AxiosResponse) => {
        console.log(res)
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.editDialogVisible = false
        this.getSamplesDataByPage()
      })
    }
  }
}
</script>

<style>
.demo {
  width: 700px;
}
</style>
