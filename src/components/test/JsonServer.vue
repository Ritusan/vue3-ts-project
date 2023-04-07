<template>
  <div>
    <p>通过测试页面通过json-server，获取数据</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { testData } from '@/api/test/index'

const testJsonServer = () => {
  testData().then((res) => {
    console.log(res.data)
  })
}
onMounted(() => {
  console.log('mounted')
  testJsonServer()
})
</script>

<style lang="scss" scoped></style>
