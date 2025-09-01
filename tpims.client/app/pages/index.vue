<script setup lang="ts">
definePageMeta({
  title: '登入',
  layout: false,
})
const login = () => navigateTo('/home')
</script>

<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10">
      <img
        src="/HSR.jpg"
        alt="Image"
        class="absolute inset-0 z-[-1] h-full w-full object-cover object-[20%_center] lg:hidden dark:brightness-[0.5]"
      />
      <div
        class="bg-background/70 fixed  top-0 -ml-6 flex w-full items-center justify-between p-3 backdrop-blur-md md:-ml-10 lg:static lg:ml-0 lg:bg-transparent lg:p-0"
      >
        <a href="https://www.thsrc.com.tw/" class="flex items-center gap-2 font-medium">
          <div
            class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-9 items-center justify-center rounded-lg border bg-[url(/Favicon/favicon-192.png)] bg-cover"
          />
          <div>
            <p>台灣高鐵</p>
            <p class="text-xs">TPIMS</p>
          </div>
        </a>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <div class="flex flex-1 items-center justify-center">
        <div class="bg-background/70 w-full max-w-xs rounded-2xl p-10 backdrop-blur-md">
          <form :class="'flex flex-col gap-6'">
            <div class="flex flex-col items-center gap-2 text-center">
              <h1 class="text-2xl font-bold">登入</h1>
            </div>
            <div class="grid gap-6">
              <div class="grid gap-2">
                <Label for="email">使用者名稱</Label>
                <Input id="email" type="email" required />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="password">密碼</Label>
                  <a href="#" class="ml-auto text-xs underline-offset-4 hover:underline">
                    忘記密碼?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="button" class="w-full" @click="login"> 登入</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-muted relative hidden lg:block">
      <img
        src="/HSR.jpg"
        alt="Image"
        class="absolute inset-0 h-full w-full object-cover object-[20%_center] dark:brightness-[0.5]"
      />
    </div>
  </div>
</template>
