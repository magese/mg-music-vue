<template>
  <el-menu
      default-active="/"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#486846"
      text-color="#feee80"
      active-text-color="#dec37a"
      :router="true"
  >
    <el-menu-item>
      <el-avatar :size="55" :src="logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/"><search style="width: 1em; height: 1em; margin-right: 8px" />搜索</el-menu-item>
    <el-menu-item index="download"><document-add style="width: 1em; height: 1em; margin-right: 8px"/>下载</el-menu-item>
  </el-menu>
</template>
<script>
import { DocumentAdd, Search } from "@element-plus/icons-vue";

export default {
  name: 'PageHeader',
  components: {DocumentAdd, Search},
  data() {
    return {
      logo: require('@/assets/logo.png')
    }
  }
}
</script>
<style>
.flex-grow {
    flex-grow: 1;
}
</style>
