<script lang="ts" setup>
defineProps({
  tableAttr: { type: Array<any>, required: true },
  tableData: { type: Array<any>, required: true },
})
</script>

<template>
  <div class="item-box">
    <el-table :data="tableData" stripe height="350" style="width: 100%">
      <template v-for="item in tableAttr" :key="item.id">
        <el-table-column :fixed="item.fixed ? true : false" :prop="item.prop" :label="item.label" :width="item.width" align="center" />
      </template>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.el-text {
  margin-right: 10px;
}

.form-box {
  padding: 16px 10px;

  .el-row {
    margin-bottom: 16px;
  }
}

.el-input {
  width: 260px;
}

.item-input {
  display: flex;
  align-items: center;
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
