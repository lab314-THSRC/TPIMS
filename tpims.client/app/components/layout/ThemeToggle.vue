<script setup lang="ts">
import { Icon } from '@iconify/vue'
// nuxt color mode provider
const colorMode = useColorMode()
const checked = computed(() => ({
  light: colorMode.preference === 'light',
  dark: colorMode.preference === 'dark',
  system: colorMode.preference === 'system',
}))
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child class="cursor-pointer">
      <Button variant="outline">
        <Icon
          icon="radix-icons:moon"
          class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Icon
          icon="radix-icons:sun"
          class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span class="sr-only">切換系統外觀</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>外觀</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem v-model="checked.light" @click="colorMode.preference = 'light'">
        淺色模式
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model="checked.dark" @click="colorMode.preference = 'dark'">
        深色模式
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model="checked.system" @click="colorMode.preference = 'system'">
        依系統設定
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
