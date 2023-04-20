<template>
  <el-divider style="margin: 15px 0">
    <span>
      Powered by
      <el-link :underline="false" href="https://github.com/magese">
      <el-image style="height: 15px;margin: 0 3px 5px 0" :src="isDark ? githubLight : githubDark" :fit="'fill'"/>Magese
      </el-link>
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
