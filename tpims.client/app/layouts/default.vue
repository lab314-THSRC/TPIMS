<template>
  <SidebarProvider :default-open="defaultOpen">
    <AppSidebar />
    <SidebarInset>
      <AppHeader />
      <div class="p-4">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
<script setup lang="ts">
const defaultOpen = useCookie<boolean>('sidebar_state')
</script>
