<template>
    <div class="p-6">
    <!-- Header -->
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold">年度預算總表</h1>
            <Button class="bg-blue-500 text-white">匯入</Button>
        </div>
    <!-- Data Table -->
    <DataTable :columns="columns" :data="budgetSummary" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"


definePageMeta({
  title: '物料請購明細表',
})
</script>

<style scoped></style>