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
      <el-avatar :size="55" :src="require('@/assets/logo.png')" alt="logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/"><search style="width: 1em; height: 1em; margin-right: 8px" />搜索</el-menu-item>
    <el-menu-item index="download"><document-add style="width: 1em; height: 1em; margin-right: 8px"/>下载</el-menu-item>
    <div style="padding-right: 20px;display: flex;align-items: center">
      <el-switch
          v-model="isDark"
          size="large"
          class="mt-2"
          :active-icon="Moon"
          :inactive-icon="Sunny"
          style="margin-left: 24px; --el-switch-on-color: #dec37a; --el-switch-off-color: #feee80; --el-text-color-primary: #feee80; --el-color-primary: #dec37a"
          @change="toggleDark"
      />
    </div>
  </el-menu>
</template>
<script type="ts" setup>
import {DocumentAdd, Moon, Search, Sunny} from "@element-plus/icons-vue";
import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
<style>
.flex-grow {
    flex-grow: 1;
}
</style>
