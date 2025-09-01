<script setup lang="ts">
import {
  Search,
  Home,
  Album,
  NotebookText,
  ShieldCheck,
  BadgeDollarSign,
  Wrench,
  ClipboardList,
  Megaphone,
  Hammer,
  Car,
  ChartBar,
  Settings,
  CircleUserRound,
  History,
  type LucideIcon,
} from 'lucide-vue-next'
import { useSidebarStore } from '~/stores'

import { useMagicKeys } from '@vueuse/core'

import { ref, watch } from 'vue'

const { isDesktop } = useDevice()
const sidebarStore = useSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)

// command palette ref
const open = ref(false)

// Hot Keys
const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) e.preventDefault()
  },
})
const handleOpenChange = () => {
  open.value = !open.value
}
watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1]) handleOpenChange()
})

// command items content
const commandItems = sidebarContent.value
  .map((group) => {
    return group.children.map((child) => ({
      name: child.title,
      icon: child.icon,
      child:
        child.items?.map((item) => ({
          name: item.title,
          url: item.url,
        })) ?? null,
    }))
  })
  .slice(1)
  .flat() // except for `首頁`

// icon mapper
const iconMapper = (icon: string | undefined): LucideIcon | null => {
  if (typeof icon === 'string') {
    const iconMap: Record<string, LucideIcon> = {
      Home: Home,
      Album: Album,
      NotebookText: NotebookText,
      ShieldCheck: ShieldCheck,
      BadgeDollarSign: BadgeDollarSign,
      Wrench: Wrench,
      ClipboardList: ClipboardList,
      Megaphone: Megaphone,
      Hammer: Hammer,
      Car: Car,
      ChartBar: ChartBar,
      Settings: Settings,
      CircleUserRound: CircleUserRound,
      History: History,
    }
    return iconMap[icon] ?? null
  } else {
    return null
  }
}
const redirect = (url: string) => {
  navigateTo(url)
  open.value = false
}
</script>

<template>
  <div>
    <Button variant="outline" class="flex cursor-pointer items-center gap-5" @click="open = true">
      <div class="text-muted-foreground flex items-center gap-0 sm:gap-3">
        <Search />
        <p class="flex-row items-center">
          <span class="hidden sm:block">搜尋...</span>
        </p>
      </div>
      <kbd
        v-if="isDesktop"
        class="bg-muted text-muted-foreground pointer-events-none hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:inline-flex"
      >
        <span class="text-xs">&#8984;</span>K
      </kbd>
    </Button>
    <CommandDialog v-model:open="open" class="max-w-[500px] rounded-lg border shadow-md">
      <CommandInput placeholder="搜尋功能..." />
      <CommandList>
        <CommandEmpty>無結果。</CommandEmpty>
        <template v-for="group in commandItems">
          <CommandGroup :heading="group.name">
            <template v-for="item in group.child">
              <CommandItem class="cursor-pointer" :value="item.name" @click="redirect(item.url)">
                <component :is="iconMapper(group.icon)" />
                <span>{{ item.name }}</span>
              </CommandItem>
            </template>
          </CommandGroup>
        </template>
      </CommandList>
    </CommandDialog>
  </div>
</template>
