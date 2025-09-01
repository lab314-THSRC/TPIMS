<script setup lang="ts">
import type { SidebarProps } from '~/components/ui/sidebar'

export type AppSidebarItemProps = {
  groupTitle?: string
  children: {
    title: string
    id: string
    url: string
    icon?: string
    isActive?: boolean
    items?: {
      title: string
      id: string
      url: string
      isActive?: boolean
    }[]
  }[]
}[]

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
  variant: 'sidebar',
})

const user = {
  name: 'A999',
  email: 'tpims@thsrc.com',
  avatar: '',
  authority: '管理者',
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <AppTitle />

    </SidebarHeader>
    <SidebarContent>
      <NavMain />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
