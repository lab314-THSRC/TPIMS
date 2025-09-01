<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next'
import { useSidebarStore } from '~/stores'
import { useSidebar } from '~/components/ui/sidebar'
import {
  CalendarFold,
  ChevronRight,
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
} from 'lucide-vue-next'

const sidebarStore = useSidebarStore()
const { sidebarContent } = storeToRefs(sidebarStore)
const { renderSidebarState } = sidebarStore
const { isMobile } = useDevice()
const route = useRoute()

// icon mapper (from string to Lucide Icon)
const iconMapper = (icon: string): LucideIcon | null => {
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
}

const { state, toggleSidebar } = useSidebar()
const onItemsClicked = () => {
  if (state.value === 'collapsed') {
    toggleSidebar()
  }
}

const collapseStates = ref<Record<string, boolean | undefined>>({})

// is-active
watch(
  () => sidebarContent.value,
  (newSidebar) => {
    const states: Record<string, boolean | undefined> = {}
    newSidebar.forEach((group) => {
      group.children.forEach((child) => {
        states[child.id] = child.isActive
      })
    })
    collapseStates.value = states
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <SidebarGroup class="group-data-[collapsible=icon]:hidden">
    <SidebarMenu>
      <HoverCard v-if="!isMobile">
        <HoverCardTrigger class="w-full">
          <SidebarMenuItem>
            <SidebarMenuButton>
              <CalendarFold />
              <span>
                {{
                  new Intl.DateTimeFormat('zh-TW', {
                    dateStyle: 'full',
                  }).format(new Date())
                }}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </HoverCardTrigger>
        <HoverCardContent class="w-fit" side="bottom">
          <Calendar locale="zh-TW" />
        </HoverCardContent>
      </HoverCard>
      <Collapsible v-else as-child class="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger as-child class="cursor-pointer">
            <SidebarMenuButton>
              <CalendarFold />
              <span>
                {{
                  new Intl.DateTimeFormat('zh-TW', {
                    dateStyle: 'full',
                  }).format(new Date())
                }}
              </span>
              <ChevronRight
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Calendar locale="zh-TW" />
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
  <SidebarGroup v-for="item in sidebarContent" :key="item.groupTitle">
    <SidebarGroupLabel v-if="item.groupTitle">{{ item.groupTitle }}</SidebarGroupLabel>
    <SidebarMenu>
      <template v-for="child in item.children" :key="child.title">
        <Collapsible
          as-child
          v-if="child.items"
          v-model:open="collapseStates[child.id]"
          class="group/collapsible"
        >
          <SidebarMenuItem>
            <!-- if the children has subitems -->
            <CollapsibleTrigger as-child class="cursor-pointer" @click="onItemsClicked">
              <SidebarMenuButton :tooltip="child.title">
                <component :is="iconMapper(child.icon)" v-if="child.icon" />
                <span>{{ child.title }}</span>
                <ChevronRight
                  class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem v-for="subItem in child.items" :key="subItem.title">
                  <SidebarMenuSubButton as-child :is-active="subItem.isActive">
                    <a @click="navigateTo(subItem.url)" class="cursor-pointer">
                      <span>{{ subItem.title }}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
        <SidebarMenuItem v-else>
          <SidebarMenuButton
            :tooltip="child.title"
            as-child
            :is-active="child.isActive"
            @click="onItemsClicked"
          >
            <a @click="navigateTo(child.url)" class="cursor-pointer">
              <component :is="iconMapper(child.icon)" v-if="child.icon" />
              <span>{{ child.title }}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </template>
    </SidebarMenu>
  </SidebarGroup>
</template>
