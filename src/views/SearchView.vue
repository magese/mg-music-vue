<template>
  <el-container direction="vertical">
    <el-row style="height: 220px">
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" />
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="关键词搜索" name="1">
            <el-container>
              <el-input
                  v-model="keyword"
                  placeholder="请输入 歌名/歌手/专辑 进行搜索"
                  clearable
                  style="--el-input-border-color: #486846"
              />
              <el-button icon="Search"
                         :loading="loading"
                         color="#486846"
                         @click="searchMusic"
                         :dark="!!isDark"
                         style="--el-button-text-color: #feee80"
              >搜索</el-button>
            </el-container>
          </el-collapse-item>
          <el-collapse-item title="更多搜索选项" name="2">
            <el-container>
              <el-input v-model="songName" placeholder="歌曲名称" style="--el-input-border-color: #486846" />
              <el-input v-model="artist" placeholder="歌手名称" style="--el-input-border-color: #486846; margin: 0 10px" />
              <el-input v-model="album" placeholder="专辑名称" style="--el-input-border-color: #486846" />
            </el-container>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" />
    </el-row>

    <el-row>
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5"/>
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
      </el-col>
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5"/>
    </el-row>

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </el-container>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import {ref} from "vue";
import {useDark} from "@vueuse/core";

const isDark = useDark()

const activeNames = ref(['1'])
const keyword = ref('')
const songName = ref('')
const artist = ref('')
const album = ref('')
const loading = ref(false)

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]

function searchMusic() {
    loading.value = true
    setInterval(() => loading.value = false, 3000)
}
</script>
<style>

</style>
