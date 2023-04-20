<template>
  <el-divider style="margin: 15px 0">
    <span>
      Powered by
      <a href="https://github.com/magese" target="_blank" style="text-decoration: none">
      <el-image style="height: 15px;margin: 0 3px 0 0" :src="isDark ? githubLight : githubDark" :fit="'fill'"/>Magese
      </a>
    </span>
  </el-divider>
</template>
<script>
import { useDark } from '@vueuse/core'

const isDark = useDark()

export default {
  name: 'MgFooter',
  data() {
    return {
      githubDark: require('@/assets/github-mark.svg'),
      githubLight: require('@/assets/github-mark-white.svg'),
      isDark
    }
  }
}
</script>
