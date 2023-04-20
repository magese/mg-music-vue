<template>
  <div class="mg-layout">
    <el-container style="height: 100%">
      <el-header style="padding: 0">
        <mg-header/>
      </el-header>
      <el-main style="padding: 7px">
        <el-scrollbar>
          <router-view/>
        </el-scrollbar>
      </el-main>
      <el-footer height="30">
        <mg-footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MgHeader from '@/components/MgHeader.vue'
import MgFooter from "@/components/MgFooter.vue";

export default {
  name: 'App',
  components: {
    MgFooter,
    MgHeader: MgHeader
  }
}
</script>
<style scoped>
.mg-layout {
    height: calc(100vh);
}
</style>
