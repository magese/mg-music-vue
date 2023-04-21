<template>
  <el-divider style="margin: 15px 0">
    <span>
      Powered by
      <a
        href="https://github.com/magese"
        target="_blank"
        style="text-decoration: none"
      >
        <el-image
          style="height: 15px;margin: 0 3px 0 0"
          :src="isDark ? githubLight : githubDark"
          :fit="'fill'"
        />Magese
      </a>
    </span>
  </el-divider>
</template>
<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
const githubDark = require('@/assets/github-mark.svg')
const githubLight = require('@/assets/github-mark-white.svg')

</script>
