<template>
  <div class="chart" ref="chartRef" :style="{ width: props.width, height: props.height }"></div>
</template>
<script setup lang="ts">
import { getCurrentInstance, ref, onMounted, onBeforeUnmount, markRaw, watch } from 'vue'
import { EChartsOption } from 'echarts'
const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts
const chartRef = ref<HTMLDivElement>()
const mychart = ref()

interface Props {
  option: EChartsOption
  width: string
  height: string
}

const props = withDefaults(defineProps<Props>(), {
  loading: true,
})
onMounted(() => {
  mychart.value = markRaw(echarts.init(chartRef.value))
  mychart.value.setOption(props.option)
  window.addEventListener('resize', () => {
    console.log(111)
    mychart.value.resize()
  })
})
watch(
  () => props.loading,
  (loading) => {
    loading ? mychart.value.showLoading() : mychart.value.hideLoading()
  },
)
// 组件销毁前一定要取消监听的事情，不然会印象性能和暂用内存
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    mychart.value.resize()
  })
})
</script>
<style scoped></style>
