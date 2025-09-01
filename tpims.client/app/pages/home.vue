<template>
  <div>
    <div class="p-3">
      <h1 class="text-2xl">公告欄</h1>
    </div>
    <Separator />
    <div class="flex flex-1 flex-col gap-4 p-4">
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div class="bg-muted/50 aspect-video rounded-xl" />
        <div class="bg-muted/50 aspect-video rounded-xl" />
        <div class="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div class="bg-muted/50 min-h-[49vh] flex-1 rounded-xl" />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: '首頁',
})
const service = useNuxtApp().$test
onMounted(async () => {
  const res = await service.weatherForecast()
  console.log(res)
})
</script>
