<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, onUnmounted } from 'vue'

let map = null

onMounted(() => {
  AMapLoader.load({
    key: '4fc51bd9685e75e201fbeb7af006b30c', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then(AMap => {
      map = new AMap.Map('amap-container', {
        mapStyle: 'amap://styles/normal', // 设置地图的显示样式
        viewMode: '2D', // 是否为3D地图模式
        zoom: 5.5, // 初始化地图级别
        center: [121.473667, 31.230525], // 初始化地图中心点位置
        scrollWheel: false, // 是否启用地图滚轮缩放
      })

      // 创建一个 Marker 实例
      const content = `<span class="relative flex size-3">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
</span>`
      const marker = new AMap.Marker({
        content: content,
        position: [121.473667, 31.230525], // 设置基点位置
        title: 'Shanghai, China',
        offset: new AMap.Pixel(-6, -6), // 相对于基点的偏移位置
      })

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker)
    })
    .catch(e => {
      console.log(e)
    })
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<template>
  <div id="amap-container" />
</template>
