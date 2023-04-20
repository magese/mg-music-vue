<template>
  <div>
    <el-container>
      <el-header><page-header/></el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>
