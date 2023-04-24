<template>
  <el-container direction="vertical">
    <el-row style="height: 220px">
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" />
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="关键词搜索" name="1">
            <el-container>
              <el-input
                  v-model="searchRequest.keyword"
                  placeholder="请输入 歌名/歌手/专辑 进行搜索"
                  clearable
                  style="--el-input-border-color: #486846"
                  @keydown.enter="searchMusic"
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
              <el-input v-model="searchRequest.songName" placeholder="歌曲名称" @keydown.enter="searchMusic" style="--el-input-border-color: #486846" />
              <el-input v-model="searchRequest.artist" placeholder="歌手名称" @keydown.enter="searchMusic" style="--el-input-border-color: #486846; margin: 0 10px" />
              <el-input v-model="searchRequest.album" placeholder="专辑名称" @keydown.enter="searchMusic" style="--el-input-border-color: #486846" />
            </el-container>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5" />
    </el-row>

    <el-row>
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5"/>
      <el-col :xs="22" :sm="20" :md="18" :lg="16" :xl="14">
        <el-table :data="tableData" style="width: 100%" highlight-current-row v-loading="loading" element-loading-text="加载中...">
          <el-table-column prop="name" label="名称" min-width="200" />
          <el-table-column prop="artist" label="歌手" min-width="120" />
          <el-table-column prop="album" label="专辑" min-width="120" />
          <el-table-column prop="duration" label="时长" :formatter="durationFormatter" width="80" />
          <el-table-column prop="source" label="来源" width="120" />
          <el-table-column prop="resourceForbidden" label="会员资源" width="80">
            <template #default="scope">
              <el-tag :type="scope.row.resourceForbidden ? 'info' : 'success'" round>
                {{ scope.row.resourceForbidden ? '是' : '否' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="170">
            <template #default="scope">
              <el-button-group size="small">
                <el-popover trigger="hover" placement="top-start" :width="135" content="点击播放音乐试听">
                  <template #reference>
                    <el-button :dark="!!isDark" plain color="#486846" icon="VideoPlay"/>
                  </template>
                </el-popover>
                <el-popover trigger="hover" placement="top-start" :width="135" content="下载音乐至服务器">
                  <template #reference>
                    <el-button :dark="!!isDark" plain color="#486846" icon="DocumentAdd"/>
                  </template>
                </el-popover>
                <el-popover trigger="hover" placement="top-start" :width="135" content="下载音乐到本地">
                  <template #reference>
                    <el-button :dark="!!isDark" plain color="#486846" icon="Download"/>
                  </template>
                </el-popover>
                <el-popover trigger="hover" placement="top-start" :width="135" content="在源站中打开">
                  <template #reference>
                    <el-button :dark="!!isDark" plain color="#486846" icon="Link" @click="window.open(scope.row.url)" />
                  </template>
                </el-popover>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :xs="1" :sm="2" :md="3" :lg="4" :xl="5"/>
    </el-row>
  </el-container>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useDark} from "@vueuse/core";
import {search} from "@/api/search";

const isDark = useDark()

const activeNames = ref(['1'])
const loading = ref(false)

const searchRequest = reactive({
    keyword: '',
    songName: '',
    artist: '',
    album: ''
})

const tableData = ref([])

const searchMusic = async () => {
    loading.value = true
    const response: any = await search(searchRequest)
    tableData.value = response.data.results
    loading.value = false;
}

const durationFormatter = (row: any) => {
    const duration: number = row.duration
    if (duration <= 0) {
        return '-'
    }
    let min = parseInt((duration / 60).toString())
    let sec = parseInt((duration % 60).toString())
    let minStr: string = min.toString();
    let secStr: string = sec.toString();
    if (min < 10) {
        minStr = '0' + min
    }
    if (sec < 10) {
        secStr = '0' + sec
    }
    return minStr + ':' + secStr
}
</script>
<style>

</style>
