<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeft, Menu } from "lucide-vue-next"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { useSidebar } from "./utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7 cursor-pointer', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft class="md:block hidden"/>
    <Menu class="md:hidden block" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
