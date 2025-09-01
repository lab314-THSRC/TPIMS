<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useSidebarStore } from '~/stores'
const sidebarStore = useSidebarStore()
const { renderSidebarState } = sidebarStore

const route = useRoute()

useHead({
  title: computed(() => {
    if (route.meta.title) {
      return `TPIMS - ${route.meta.title as string}`
    } else {
      return 'TPIMS'
    }
  }),
})

// Sidebar active binding
onMounted(() =>
  renderSidebarState(route.fullPath)
)

watch(route, (newRoute) => {
  renderSidebarState(newRoute.fullPath)
})
</script>
