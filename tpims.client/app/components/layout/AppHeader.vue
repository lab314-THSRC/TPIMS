<template>
  <header
    class="bg-background !sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4"
  >
    <div class="flex flex-row items-center">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 !h-4" />
      <div
        class="bg-sidebar-primary text-sidebar-primary-foreground block aspect-square size-8 items-center justify-center rounded-lg border bg-[url(/Favicon/favicon-192.png)] bg-cover md:hidden"
      />
      <Button class="ml-2 block md:hidden" variant="ghost">
        <strong>TPIMS</strong>
      </Button>
      <AppBreadcrumb />
    </div>
    <div class="flex flex-row items-center gap-3">
      <CommandPalette />
      <ThemeToggle />
    </div>
  </header>
</template>
<script setup lang="ts">

</script>
