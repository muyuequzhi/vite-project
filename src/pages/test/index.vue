<script lang="ts" setup>
import { ref } from 'vue'
import LineChart from '@/components/MyChart/LineChart.vue'
import { EChartsOption } from 'echarts'
import CardWrapper from '@/components/CardWrapper/index.vue'
import BaseTable from '@/components/BaseTable/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'

import { getTableData } from './data'

const input = ref('')
const tableData = ref([])
const fullScreenVal = ref(true)
getTableData().then((res) => {
  tableData.value = res.data.data
  fullScreenVal.value = false
})
const options: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
const tableAttr = [
  { prop: 'id', label: 'id', width: '180', fixed: true },
  { prop: 'col1', label: 'col1', width: '180' },
  { prop: 'col2', label: 'col2', width: '180' },
  { prop: 'col3', label: 'col3', width: '180' },
  { prop: 'col4', label: 'col4', width: '180' },
  { prop: 'col5', label: 'col5', width: '180' },
  { prop: 'col6', label: 'col6', width: '180' },
  { prop: 'col7', label: 'col7', width: '180' },
]
</script>

<template>
  <div class="item-box" v-loading="fullScreenVal">
    <div>
      <div class="form-box">
        <el-row :gutter="10">
          <el-col :span="8">
            <BaseInput label="输入框1"></BaseInput>
          </el-col>
          <el-col :span="8">
            <BaseInput label="输入框2"></BaseInput>
          </el-col>
          <el-col :span="8">
            <BaseInput label="输入框3"></BaseInput>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8">
            <BaseInput label="输入框4"></BaseInput>
          </el-col>
          <el-col :span="8">
            <BaseInput label="输入框5"></BaseInput>
          </el-col>
          <el-col :span="8">
            <BaseInput label="输入框6"></BaseInput>
          </el-col>
        </el-row>
      </div>

      <CardWrapper title="666">
        <el-row>
          <el-col :span="8">
            <LineChart :option="options" width="100%" height="350px" />
          </el-col>

          <el-col :span="16">
            <BaseTable :tableAttr="tableAttr" :tableData="tableData"></BaseTable>
          </el-col>
        </el-row>
      </CardWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-box {
  padding: 16px 10px;

  .el-row {
    margin-bottom: 16px;
  }
}

.item-box {
  width: 100%;

  .item {
    background: #eee;
    border-radius: 5px;
    padding: 10px 0;
    margin: 10px 0;
  }
}
</style>
./data.ts
