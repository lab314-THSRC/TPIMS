<template>
  <Breadcrumb class="hidden md:block">
    <BreadcrumbList>
      <BreadcrumbItem v-if="atHome">
        <BreadcrumbPage>首頁</BreadcrumbPage>
      </BreadcrumbItem>
      <template v-else>
        <BreadcrumbItem>
          <BreadcrumbLink class="cursor-pointer" @click="navigateTo('/home')">首頁</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator class="hidden md:block" />
        <template v-for="(title, index) in activeRoute">
          <BreadcrumbItem>
            <BreadcrumbPage>{{ title }}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator v-if="index !== activeRoute.length - 1" class="hidden md:block" />
        </template>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
<script setup lang="ts">
import { useSidebarStore } from '~/stores'

const sidebarStore = useSidebarStore()
const { activeRoute } = storeToRefs(sidebarStore)

const route = useRoute()
const atHome = computed(() => route.meta.title !== undefined && route.meta.title == '首頁')

</script>

<style scoped></style>
