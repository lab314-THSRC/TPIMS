
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppBreadcrumb': typeof import("../app/components/layout/AppBreadcrumb.vue")['default']
    'AppHeader': typeof import("../app/components/layout/AppHeader.vue")['default']
    'AppSidebar': typeof import("../app/components/layout/AppSidebar.vue")['default']
    'AppTitle': typeof import("../app/components/layout/AppTitle.vue")['default']
    'CommandPalette': typeof import("../app/components/layout/CommandPalette.vue")['default']
    'NavMain': typeof import("../app/components/layout/NavMain.vue")['default']
    'NavUser': typeof import("../app/components/layout/NavUser.vue")['default']
    'ThemeToggle': typeof import("../app/components/layout/ThemeToggle.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
    'ScriptAriaLoadingIndicator': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
    'ScriptCarbonAds': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
    'ScriptCrisp': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
    'ScriptGoogleAdsense': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
    'ScriptGoogleMaps': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
    'ScriptIntercom': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
    'ScriptLemonSqueezy': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
    'ScriptLoadingIndicator': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
    'ScriptStripePricingTable': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
    'ScriptVimeoPlayer': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
    'ScriptYouTubePlayer': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCCached': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'Accordion': typeof import("../app/components/ui/accordion/index")['Accordion']
    'AccordionContent': typeof import("../app/components/ui/accordion/index")['AccordionContent']
    'AccordionItem': typeof import("../app/components/ui/accordion/index")['AccordionItem']
    'AccordionTrigger': typeof import("../app/components/ui/accordion/index")['AccordionTrigger']
    'AutoForm': typeof import("../app/components/ui/auto-form/index")['AutoForm']
    'AutoFormField': typeof import("../app/components/ui/auto-form/index")['AutoFormField']
    'AutoFormFieldArray': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldArray']
    'AutoFormFieldBoolean': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldBoolean']
    'AutoFormFieldDate': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldDate']
    'AutoFormFieldEnum': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldEnum']
    'AutoFormFieldFile': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldFile']
    'AutoFormFieldInput': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldInput']
    'AutoFormFieldNumber': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldNumber']
    'AutoFormFieldObject': typeof import("../app/components/ui/auto-form/index")['AutoFormFieldObject']
    'AutoFormLabel': typeof import("../app/components/ui/auto-form/index")['AutoFormLabel']
    'Config': typeof import("../app/components/ui/auto-form/index")['Config']
    'ConfigItem': typeof import("../app/components/ui/auto-form/index")['ConfigItem']
    'FieldProps': typeof import("../app/components/ui/auto-form/index")['FieldProps']
    'Avatar': typeof import("../app/components/ui/avatar/index")['Avatar']
    'AvatarFallback': typeof import("../app/components/ui/avatar/index")['AvatarFallback']
    'AvatarImage': typeof import("../app/components/ui/avatar/index")['AvatarImage']
    'Breadcrumb': typeof import("../app/components/ui/breadcrumb/index")['Breadcrumb']
    'BreadcrumbEllipsis': typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbEllipsis']
    'BreadcrumbItem': typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbItem']
    'BreadcrumbLink': typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbLink']
    'BreadcrumbList': typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbList']
    'BreadcrumbPage': typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbPage']
    'BreadcrumbSeparator': typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbSeparator']
    'Button': typeof import("../app/components/ui/button/index")['Button']
    'Checkbox': typeof import("../app/components/ui/checkbox/index")['Checkbox']
    'Calendar': typeof import("../app/components/ui/calendar/index")['Calendar']
    'CalendarCell': typeof import("../app/components/ui/calendar/index")['CalendarCell']
    'CalendarCellTrigger': typeof import("../app/components/ui/calendar/index")['CalendarCellTrigger']
    'CalendarGrid': typeof import("../app/components/ui/calendar/index")['CalendarGrid']
    'CalendarGridBody': typeof import("../app/components/ui/calendar/index")['CalendarGridBody']
    'CalendarGridHead': typeof import("../app/components/ui/calendar/index")['CalendarGridHead']
    'CalendarGridRow': typeof import("../app/components/ui/calendar/index")['CalendarGridRow']
    'CalendarHeadCell': typeof import("../app/components/ui/calendar/index")['CalendarHeadCell']
    'CalendarHeader': typeof import("../app/components/ui/calendar/index")['CalendarHeader']
    'CalendarHeading': typeof import("../app/components/ui/calendar/index")['CalendarHeading']
    'CalendarNextButton': typeof import("../app/components/ui/calendar/index")['CalendarNextButton']
    'CalendarPrevButton': typeof import("../app/components/ui/calendar/index")['CalendarPrevButton']
    'Command': typeof import("../app/components/ui/command/index")['Command']
    'CommandDialog': typeof import("../app/components/ui/command/index")['CommandDialog']
    'CommandEmpty': typeof import("../app/components/ui/command/index")['CommandEmpty']
    'CommandGroup': typeof import("../app/components/ui/command/index")['CommandGroup']
    'CommandInput': typeof import("../app/components/ui/command/index")['CommandInput']
    'CommandItem': typeof import("../app/components/ui/command/index")['CommandItem']
    'CommandList': typeof import("../app/components/ui/command/index")['CommandList']
    'CommandSeparator': typeof import("../app/components/ui/command/index")['CommandSeparator']
    'CommandShortcut': typeof import("../app/components/ui/command/index")['CommandShortcut']
    'Dialog': typeof import("../app/components/ui/dialog/index")['Dialog']
    'DialogClose': typeof import("../app/components/ui/dialog/index")['DialogClose']
    'DialogContent': typeof import("../app/components/ui/dialog/index")['DialogContent']
    'DialogDescription': typeof import("../app/components/ui/dialog/index")['DialogDescription']
    'DialogFooter': typeof import("../app/components/ui/dialog/index")['DialogFooter']
    'DialogHeader': typeof import("../app/components/ui/dialog/index")['DialogHeader']
    'DialogOverlay': typeof import("../app/components/ui/dialog/index")['DialogOverlay']
    'DialogScrollContent': typeof import("../app/components/ui/dialog/index")['DialogScrollContent']
    'DialogTitle': typeof import("../app/components/ui/dialog/index")['DialogTitle']
    'DialogTrigger': typeof import("../app/components/ui/dialog/index")['DialogTrigger']
    'DropdownMenu': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuCheckboxItem': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuContent': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuItem': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuLabel': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuRadioGroup': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuRadioItem': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuSeparator': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuShortcut': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSub': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubContent': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'DropdownMenuSubTrigger': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuTrigger': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuPortal': typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'FormControl': typeof import("../app/components/ui/form/index")['FormControl']
    'FormDescription': typeof import("../app/components/ui/form/index")['FormDescription']
    'FormItem': typeof import("../app/components/ui/form/index")['FormItem']
    'FormLabel': typeof import("../app/components/ui/form/index")['FormLabel']
    'FormMessage': typeof import("../app/components/ui/form/index")['FormMessage']
    'FORMITEMINJECTIONKEY': typeof import("../app/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
    'Form': typeof import("../app/components/ui/form/index")['Form']
    'FormField': typeof import("../app/components/ui/form/index")['FormField']
    'FormFieldArray': typeof import("../app/components/ui/form/index")['FormFieldArray']
    'HoverCard': typeof import("../app/components/ui/hover-card/index")['HoverCard']
    'HoverCardContent': typeof import("../app/components/ui/hover-card/index")['HoverCardContent']
    'HoverCardTrigger': typeof import("../app/components/ui/hover-card/index")['HoverCardTrigger']
    'Input': typeof import("../app/components/ui/input/index")['Input']
    'Popover': typeof import("../app/components/ui/popover/index")['Popover']
    'PopoverAnchor': typeof import("../app/components/ui/popover/index")['PopoverAnchor']
    'PopoverContent': typeof import("../app/components/ui/popover/index")['PopoverContent']
    'PopoverTrigger': typeof import("../app/components/ui/popover/index")['PopoverTrigger']
    'Label': typeof import("../app/components/ui/label/index")['Label']
    'RadioGroup': typeof import("../app/components/ui/radio-group/index")['RadioGroup']
    'RadioGroupItem': typeof import("../app/components/ui/radio-group/index")['RadioGroupItem']
    'Collapsible': typeof import("../app/components/ui/collapsible/index")['Collapsible']
    'CollapsibleContent': typeof import("../app/components/ui/collapsible/index")['CollapsibleContent']
    'CollapsibleTrigger': typeof import("../app/components/ui/collapsible/index")['CollapsibleTrigger']
    'Select': typeof import("../app/components/ui/select/index")['Select']
    'SelectContent': typeof import("../app/components/ui/select/index")['SelectContent']
    'SelectGroup': typeof import("../app/components/ui/select/index")['SelectGroup']
    'SelectItem': typeof import("../app/components/ui/select/index")['SelectItem']
    'SelectItemText': typeof import("../app/components/ui/select/index")['SelectItemText']
    'SelectLabel': typeof import("../app/components/ui/select/index")['SelectLabel']
    'SelectScrollDownButton': typeof import("../app/components/ui/select/index")['SelectScrollDownButton']
    'SelectScrollUpButton': typeof import("../app/components/ui/select/index")['SelectScrollUpButton']
    'SelectSeparator': typeof import("../app/components/ui/select/index")['SelectSeparator']
    'SelectTrigger': typeof import("../app/components/ui/select/index")['SelectTrigger']
    'SelectValue': typeof import("../app/components/ui/select/index")['SelectValue']
    'Separator': typeof import("../app/components/ui/separator/index")['Separator']
    'Sidebar': typeof import("../app/components/ui/sidebar/index")['Sidebar']
    'SidebarContent': typeof import("../app/components/ui/sidebar/index")['SidebarContent']
    'SidebarFooter': typeof import("../app/components/ui/sidebar/index")['SidebarFooter']
    'SidebarGroup': typeof import("../app/components/ui/sidebar/index")['SidebarGroup']
    'SidebarGroupAction': typeof import("../app/components/ui/sidebar/index")['SidebarGroupAction']
    'SidebarGroupContent': typeof import("../app/components/ui/sidebar/index")['SidebarGroupContent']
    'SidebarGroupLabel': typeof import("../app/components/ui/sidebar/index")['SidebarGroupLabel']
    'SidebarHeader': typeof import("../app/components/ui/sidebar/index")['SidebarHeader']
    'SidebarInput': typeof import("../app/components/ui/sidebar/index")['SidebarInput']
    'SidebarInset': typeof import("../app/components/ui/sidebar/index")['SidebarInset']
    'SidebarMenu': typeof import("../app/components/ui/sidebar/index")['SidebarMenu']
    'SidebarMenuAction': typeof import("../app/components/ui/sidebar/index")['SidebarMenuAction']
    'SidebarMenuBadge': typeof import("../app/components/ui/sidebar/index")['SidebarMenuBadge']
    'SidebarMenuButton': typeof import("../app/components/ui/sidebar/index")['SidebarMenuButton']
    'SidebarMenuItem': typeof import("../app/components/ui/sidebar/index")['SidebarMenuItem']
    'SidebarMenuSkeleton': typeof import("../app/components/ui/sidebar/index")['SidebarMenuSkeleton']
    'SidebarMenuSub': typeof import("../app/components/ui/sidebar/index")['SidebarMenuSub']
    'SidebarMenuSubButton': typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubButton']
    'SidebarMenuSubItem': typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubItem']
    'SidebarProvider': typeof import("../app/components/ui/sidebar/index")['SidebarProvider']
    'SidebarRail': typeof import("../app/components/ui/sidebar/index")['SidebarRail']
    'SidebarSeparator': typeof import("../app/components/ui/sidebar/index")['SidebarSeparator']
    'SidebarTrigger': typeof import("../app/components/ui/sidebar/index")['SidebarTrigger']
    'Skeleton': typeof import("../app/components/ui/skeleton/index")['Skeleton']
    'Switch': typeof import("../app/components/ui/switch/index")['Switch']
    'Table': typeof import("../app/components/ui/table/index")['Table']
    'TableBody': typeof import("../app/components/ui/table/index")['TableBody']
    'TableCaption': typeof import("../app/components/ui/table/index")['TableCaption']
    'TableCell': typeof import("../app/components/ui/table/index")['TableCell']
    'TableEmpty': typeof import("../app/components/ui/table/index")['TableEmpty']
    'TableFooter': typeof import("../app/components/ui/table/index")['TableFooter']
    'TableHead': typeof import("../app/components/ui/table/index")['TableHead']
    'TableHeader': typeof import("../app/components/ui/table/index")['TableHeader']
    'TableRow': typeof import("../app/components/ui/table/index")['TableRow']
    'Sheet': typeof import("../app/components/ui/sheet/index")['Sheet']
    'SheetClose': typeof import("../app/components/ui/sheet/index")['SheetClose']
    'SheetContent': typeof import("../app/components/ui/sheet/index")['SheetContent']
    'SheetDescription': typeof import("../app/components/ui/sheet/index")['SheetDescription']
    'SheetFooter': typeof import("../app/components/ui/sheet/index")['SheetFooter']
    'SheetHeader': typeof import("../app/components/ui/sheet/index")['SheetHeader']
    'SheetTitle': typeof import("../app/components/ui/sheet/index")['SheetTitle']
    'SheetTrigger': typeof import("../app/components/ui/sheet/index")['SheetTrigger']
    'Textarea': typeof import("../app/components/ui/textarea/index")['Textarea']
    'Tooltip': typeof import("../app/components/ui/tooltip/index")['Tooltip']
    'TooltipContent': typeof import("../app/components/ui/tooltip/index")['TooltipContent']
    'TooltipProvider': typeof import("../app/components/ui/tooltip/index")['TooltipProvider']
    'TooltipTrigger': typeof import("../app/components/ui/tooltip/index")['TooltipTrigger']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAppBreadcrumb': LazyComponent<typeof import("../app/components/layout/AppBreadcrumb.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../app/components/layout/AppHeader.vue")['default']>
    'LazyAppSidebar': LazyComponent<typeof import("../app/components/layout/AppSidebar.vue")['default']>
    'LazyAppTitle': LazyComponent<typeof import("../app/components/layout/AppTitle.vue")['default']>
    'LazyCommandPalette': LazyComponent<typeof import("../app/components/layout/CommandPalette.vue")['default']>
    'LazyNavMain': LazyComponent<typeof import("../app/components/layout/NavMain.vue")['default']>
    'LazyNavUser': LazyComponent<typeof import("../app/components/layout/NavUser.vue")['default']>
    'LazyThemeToggle': LazyComponent<typeof import("../app/components/layout/ThemeToggle.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
    'LazyScriptAriaLoadingIndicator': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
    'LazyScriptCarbonAds': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
    'LazyScriptCrisp': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
    'LazyScriptGoogleAdsense': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
    'LazyScriptGoogleMaps': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
    'LazyScriptIntercom': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
    'LazyScriptLemonSqueezy': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
    'LazyScriptLoadingIndicator': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
    'LazyScriptStripePricingTable': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
    'LazyScriptVimeoPlayer': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
    'LazyScriptYouTubePlayer': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCCached': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyAccordion': LazyComponent<typeof import("../app/components/ui/accordion/index")['Accordion']>
    'LazyAccordionContent': LazyComponent<typeof import("../app/components/ui/accordion/index")['AccordionContent']>
    'LazyAccordionItem': LazyComponent<typeof import("../app/components/ui/accordion/index")['AccordionItem']>
    'LazyAccordionTrigger': LazyComponent<typeof import("../app/components/ui/accordion/index")['AccordionTrigger']>
    'LazyAutoForm': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoForm']>
    'LazyAutoFormField': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormField']>
    'LazyAutoFormFieldArray': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldArray']>
    'LazyAutoFormFieldBoolean': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldBoolean']>
    'LazyAutoFormFieldDate': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldDate']>
    'LazyAutoFormFieldEnum': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldEnum']>
    'LazyAutoFormFieldFile': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldFile']>
    'LazyAutoFormFieldInput': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldInput']>
    'LazyAutoFormFieldNumber': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldNumber']>
    'LazyAutoFormFieldObject': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldObject']>
    'LazyAutoFormLabel': LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormLabel']>
    'LazyConfig': LazyComponent<typeof import("../app/components/ui/auto-form/index")['Config']>
    'LazyConfigItem': LazyComponent<typeof import("../app/components/ui/auto-form/index")['ConfigItem']>
    'LazyFieldProps': LazyComponent<typeof import("../app/components/ui/auto-form/index")['FieldProps']>
    'LazyAvatar': LazyComponent<typeof import("../app/components/ui/avatar/index")['Avatar']>
    'LazyAvatarFallback': LazyComponent<typeof import("../app/components/ui/avatar/index")['AvatarFallback']>
    'LazyAvatarImage': LazyComponent<typeof import("../app/components/ui/avatar/index")['AvatarImage']>
    'LazyBreadcrumb': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['Breadcrumb']>
    'LazyBreadcrumbEllipsis': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbEllipsis']>
    'LazyBreadcrumbItem': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbItem']>
    'LazyBreadcrumbLink': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbLink']>
    'LazyBreadcrumbList': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbList']>
    'LazyBreadcrumbPage': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbPage']>
    'LazyBreadcrumbSeparator': LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbSeparator']>
    'LazyButton': LazyComponent<typeof import("../app/components/ui/button/index")['Button']>
    'LazyCheckbox': LazyComponent<typeof import("../app/components/ui/checkbox/index")['Checkbox']>
    'LazyCalendar': LazyComponent<typeof import("../app/components/ui/calendar/index")['Calendar']>
    'LazyCalendarCell': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarCell']>
    'LazyCalendarCellTrigger': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarCellTrigger']>
    'LazyCalendarGrid': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGrid']>
    'LazyCalendarGridBody': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGridBody']>
    'LazyCalendarGridHead': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGridHead']>
    'LazyCalendarGridRow': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGridRow']>
    'LazyCalendarHeadCell': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarHeadCell']>
    'LazyCalendarHeader': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarHeader']>
    'LazyCalendarHeading': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarHeading']>
    'LazyCalendarNextButton': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarNextButton']>
    'LazyCalendarPrevButton': LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarPrevButton']>
    'LazyCommand': LazyComponent<typeof import("../app/components/ui/command/index")['Command']>
    'LazyCommandDialog': LazyComponent<typeof import("../app/components/ui/command/index")['CommandDialog']>
    'LazyCommandEmpty': LazyComponent<typeof import("../app/components/ui/command/index")['CommandEmpty']>
    'LazyCommandGroup': LazyComponent<typeof import("../app/components/ui/command/index")['CommandGroup']>
    'LazyCommandInput': LazyComponent<typeof import("../app/components/ui/command/index")['CommandInput']>
    'LazyCommandItem': LazyComponent<typeof import("../app/components/ui/command/index")['CommandItem']>
    'LazyCommandList': LazyComponent<typeof import("../app/components/ui/command/index")['CommandList']>
    'LazyCommandSeparator': LazyComponent<typeof import("../app/components/ui/command/index")['CommandSeparator']>
    'LazyCommandShortcut': LazyComponent<typeof import("../app/components/ui/command/index")['CommandShortcut']>
    'LazyDialog': LazyComponent<typeof import("../app/components/ui/dialog/index")['Dialog']>
    'LazyDialogClose': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogClose']>
    'LazyDialogContent': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogContent']>
    'LazyDialogDescription': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogDescription']>
    'LazyDialogFooter': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogFooter']>
    'LazyDialogHeader': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogHeader']>
    'LazyDialogOverlay': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogOverlay']>
    'LazyDialogScrollContent': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogScrollContent']>
    'LazyDialogTitle': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogTitle']>
    'LazyDialogTrigger': LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogTrigger']>
    'LazyDropdownMenu': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazyFormControl': LazyComponent<typeof import("../app/components/ui/form/index")['FormControl']>
    'LazyFormDescription': LazyComponent<typeof import("../app/components/ui/form/index")['FormDescription']>
    'LazyFormItem': LazyComponent<typeof import("../app/components/ui/form/index")['FormItem']>
    'LazyFormLabel': LazyComponent<typeof import("../app/components/ui/form/index")['FormLabel']>
    'LazyFormMessage': LazyComponent<typeof import("../app/components/ui/form/index")['FormMessage']>
    'LazyFORMITEMINJECTIONKEY': LazyComponent<typeof import("../app/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
    'LazyForm': LazyComponent<typeof import("../app/components/ui/form/index")['Form']>
    'LazyFormField': LazyComponent<typeof import("../app/components/ui/form/index")['FormField']>
    'LazyFormFieldArray': LazyComponent<typeof import("../app/components/ui/form/index")['FormFieldArray']>
    'LazyHoverCard': LazyComponent<typeof import("../app/components/ui/hover-card/index")['HoverCard']>
    'LazyHoverCardContent': LazyComponent<typeof import("../app/components/ui/hover-card/index")['HoverCardContent']>
    'LazyHoverCardTrigger': LazyComponent<typeof import("../app/components/ui/hover-card/index")['HoverCardTrigger']>
    'LazyInput': LazyComponent<typeof import("../app/components/ui/input/index")['Input']>
    'LazyPopover': LazyComponent<typeof import("../app/components/ui/popover/index")['Popover']>
    'LazyPopoverAnchor': LazyComponent<typeof import("../app/components/ui/popover/index")['PopoverAnchor']>
    'LazyPopoverContent': LazyComponent<typeof import("../app/components/ui/popover/index")['PopoverContent']>
    'LazyPopoverTrigger': LazyComponent<typeof import("../app/components/ui/popover/index")['PopoverTrigger']>
    'LazyLabel': LazyComponent<typeof import("../app/components/ui/label/index")['Label']>
    'LazyRadioGroup': LazyComponent<typeof import("../app/components/ui/radio-group/index")['RadioGroup']>
    'LazyRadioGroupItem': LazyComponent<typeof import("../app/components/ui/radio-group/index")['RadioGroupItem']>
    'LazyCollapsible': LazyComponent<typeof import("../app/components/ui/collapsible/index")['Collapsible']>
    'LazyCollapsibleContent': LazyComponent<typeof import("../app/components/ui/collapsible/index")['CollapsibleContent']>
    'LazyCollapsibleTrigger': LazyComponent<typeof import("../app/components/ui/collapsible/index")['CollapsibleTrigger']>
    'LazySelect': LazyComponent<typeof import("../app/components/ui/select/index")['Select']>
    'LazySelectContent': LazyComponent<typeof import("../app/components/ui/select/index")['SelectContent']>
    'LazySelectGroup': LazyComponent<typeof import("../app/components/ui/select/index")['SelectGroup']>
    'LazySelectItem': LazyComponent<typeof import("../app/components/ui/select/index")['SelectItem']>
    'LazySelectItemText': LazyComponent<typeof import("../app/components/ui/select/index")['SelectItemText']>
    'LazySelectLabel': LazyComponent<typeof import("../app/components/ui/select/index")['SelectLabel']>
    'LazySelectScrollDownButton': LazyComponent<typeof import("../app/components/ui/select/index")['SelectScrollDownButton']>
    'LazySelectScrollUpButton': LazyComponent<typeof import("../app/components/ui/select/index")['SelectScrollUpButton']>
    'LazySelectSeparator': LazyComponent<typeof import("../app/components/ui/select/index")['SelectSeparator']>
    'LazySelectTrigger': LazyComponent<typeof import("../app/components/ui/select/index")['SelectTrigger']>
    'LazySelectValue': LazyComponent<typeof import("../app/components/ui/select/index")['SelectValue']>
    'LazySeparator': LazyComponent<typeof import("../app/components/ui/separator/index")['Separator']>
    'LazySidebar': LazyComponent<typeof import("../app/components/ui/sidebar/index")['Sidebar']>
    'LazySidebarContent': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarContent']>
    'LazySidebarFooter': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarFooter']>
    'LazySidebarGroup': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroup']>
    'LazySidebarGroupAction': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroupAction']>
    'LazySidebarGroupContent': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroupContent']>
    'LazySidebarGroupLabel': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroupLabel']>
    'LazySidebarHeader': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarHeader']>
    'LazySidebarInput': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarInput']>
    'LazySidebarInset': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarInset']>
    'LazySidebarMenu': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenu']>
    'LazySidebarMenuAction': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuAction']>
    'LazySidebarMenuBadge': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuBadge']>
    'LazySidebarMenuButton': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuButton']>
    'LazySidebarMenuItem': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuItem']>
    'LazySidebarMenuSkeleton': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSkeleton']>
    'LazySidebarMenuSub': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSub']>
    'LazySidebarMenuSubButton': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubButton']>
    'LazySidebarMenuSubItem': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubItem']>
    'LazySidebarProvider': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarProvider']>
    'LazySidebarRail': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarRail']>
    'LazySidebarSeparator': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarSeparator']>
    'LazySidebarTrigger': LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarTrigger']>
    'LazySkeleton': LazyComponent<typeof import("../app/components/ui/skeleton/index")['Skeleton']>
    'LazySwitch': LazyComponent<typeof import("../app/components/ui/switch/index")['Switch']>
    'LazyTable': LazyComponent<typeof import("../app/components/ui/table/index")['Table']>
    'LazyTableBody': LazyComponent<typeof import("../app/components/ui/table/index")['TableBody']>
    'LazyTableCaption': LazyComponent<typeof import("../app/components/ui/table/index")['TableCaption']>
    'LazyTableCell': LazyComponent<typeof import("../app/components/ui/table/index")['TableCell']>
    'LazyTableEmpty': LazyComponent<typeof import("../app/components/ui/table/index")['TableEmpty']>
    'LazyTableFooter': LazyComponent<typeof import("../app/components/ui/table/index")['TableFooter']>
    'LazyTableHead': LazyComponent<typeof import("../app/components/ui/table/index")['TableHead']>
    'LazyTableHeader': LazyComponent<typeof import("../app/components/ui/table/index")['TableHeader']>
    'LazyTableRow': LazyComponent<typeof import("../app/components/ui/table/index")['TableRow']>
    'LazySheet': LazyComponent<typeof import("../app/components/ui/sheet/index")['Sheet']>
    'LazySheetClose': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetClose']>
    'LazySheetContent': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetContent']>
    'LazySheetDescription': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetDescription']>
    'LazySheetFooter': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetFooter']>
    'LazySheetHeader': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetHeader']>
    'LazySheetTitle': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetTitle']>
    'LazySheetTrigger': LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetTrigger']>
    'LazyTextarea': LazyComponent<typeof import("../app/components/ui/textarea/index")['Textarea']>
    'LazyTooltip': LazyComponent<typeof import("../app/components/ui/tooltip/index")['Tooltip']>
    'LazyTooltipContent': LazyComponent<typeof import("../app/components/ui/tooltip/index")['TooltipContent']>
    'LazyTooltipProvider': LazyComponent<typeof import("../app/components/ui/tooltip/index")['TooltipProvider']>
    'LazyTooltipTrigger': LazyComponent<typeof import("../app/components/ui/tooltip/index")['TooltipTrigger']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppBreadcrumb: typeof import("../app/components/layout/AppBreadcrumb.vue")['default']
export const AppHeader: typeof import("../app/components/layout/AppHeader.vue")['default']
export const AppSidebar: typeof import("../app/components/layout/AppSidebar.vue")['default']
export const AppTitle: typeof import("../app/components/layout/AppTitle.vue")['default']
export const CommandPalette: typeof import("../app/components/layout/CommandPalette.vue")['default']
export const NavMain: typeof import("../app/components/layout/NavMain.vue")['default']
export const NavUser: typeof import("../app/components/layout/NavUser.vue")['default']
export const ThemeToggle: typeof import("../app/components/layout/ThemeToggle.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
export const ScriptAriaLoadingIndicator: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
export const ScriptCarbonAds: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
export const ScriptCrisp: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
export const ScriptGoogleAdsense: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
export const ScriptGoogleMaps: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
export const ScriptIntercom: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
export const ScriptLemonSqueezy: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
export const ScriptLoadingIndicator: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
export const ScriptStripePricingTable: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
export const ScriptVimeoPlayer: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
export const ScriptYouTubePlayer: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCCached: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const Accordion: typeof import("../app/components/ui/accordion/index")['Accordion']
export const AccordionContent: typeof import("../app/components/ui/accordion/index")['AccordionContent']
export const AccordionItem: typeof import("../app/components/ui/accordion/index")['AccordionItem']
export const AccordionTrigger: typeof import("../app/components/ui/accordion/index")['AccordionTrigger']
export const AutoForm: typeof import("../app/components/ui/auto-form/index")['AutoForm']
export const AutoFormField: typeof import("../app/components/ui/auto-form/index")['AutoFormField']
export const AutoFormFieldArray: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldArray']
export const AutoFormFieldBoolean: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldBoolean']
export const AutoFormFieldDate: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldDate']
export const AutoFormFieldEnum: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldEnum']
export const AutoFormFieldFile: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldFile']
export const AutoFormFieldInput: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldInput']
export const AutoFormFieldNumber: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldNumber']
export const AutoFormFieldObject: typeof import("../app/components/ui/auto-form/index")['AutoFormFieldObject']
export const AutoFormLabel: typeof import("../app/components/ui/auto-form/index")['AutoFormLabel']
export const Config: typeof import("../app/components/ui/auto-form/index")['Config']
export const ConfigItem: typeof import("../app/components/ui/auto-form/index")['ConfigItem']
export const FieldProps: typeof import("../app/components/ui/auto-form/index")['FieldProps']
export const Avatar: typeof import("../app/components/ui/avatar/index")['Avatar']
export const AvatarFallback: typeof import("../app/components/ui/avatar/index")['AvatarFallback']
export const AvatarImage: typeof import("../app/components/ui/avatar/index")['AvatarImage']
export const Breadcrumb: typeof import("../app/components/ui/breadcrumb/index")['Breadcrumb']
export const BreadcrumbEllipsis: typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbEllipsis']
export const BreadcrumbItem: typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbItem']
export const BreadcrumbLink: typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbLink']
export const BreadcrumbList: typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbList']
export const BreadcrumbPage: typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbPage']
export const BreadcrumbSeparator: typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbSeparator']
export const Button: typeof import("../app/components/ui/button/index")['Button']
export const Checkbox: typeof import("../app/components/ui/checkbox/index")['Checkbox']
export const Calendar: typeof import("../app/components/ui/calendar/index")['Calendar']
export const CalendarCell: typeof import("../app/components/ui/calendar/index")['CalendarCell']
export const CalendarCellTrigger: typeof import("../app/components/ui/calendar/index")['CalendarCellTrigger']
export const CalendarGrid: typeof import("../app/components/ui/calendar/index")['CalendarGrid']
export const CalendarGridBody: typeof import("../app/components/ui/calendar/index")['CalendarGridBody']
export const CalendarGridHead: typeof import("../app/components/ui/calendar/index")['CalendarGridHead']
export const CalendarGridRow: typeof import("../app/components/ui/calendar/index")['CalendarGridRow']
export const CalendarHeadCell: typeof import("../app/components/ui/calendar/index")['CalendarHeadCell']
export const CalendarHeader: typeof import("../app/components/ui/calendar/index")['CalendarHeader']
export const CalendarHeading: typeof import("../app/components/ui/calendar/index")['CalendarHeading']
export const CalendarNextButton: typeof import("../app/components/ui/calendar/index")['CalendarNextButton']
export const CalendarPrevButton: typeof import("../app/components/ui/calendar/index")['CalendarPrevButton']
export const Command: typeof import("../app/components/ui/command/index")['Command']
export const CommandDialog: typeof import("../app/components/ui/command/index")['CommandDialog']
export const CommandEmpty: typeof import("../app/components/ui/command/index")['CommandEmpty']
export const CommandGroup: typeof import("../app/components/ui/command/index")['CommandGroup']
export const CommandInput: typeof import("../app/components/ui/command/index")['CommandInput']
export const CommandItem: typeof import("../app/components/ui/command/index")['CommandItem']
export const CommandList: typeof import("../app/components/ui/command/index")['CommandList']
export const CommandSeparator: typeof import("../app/components/ui/command/index")['CommandSeparator']
export const CommandShortcut: typeof import("../app/components/ui/command/index")['CommandShortcut']
export const Dialog: typeof import("../app/components/ui/dialog/index")['Dialog']
export const DialogClose: typeof import("../app/components/ui/dialog/index")['DialogClose']
export const DialogContent: typeof import("../app/components/ui/dialog/index")['DialogContent']
export const DialogDescription: typeof import("../app/components/ui/dialog/index")['DialogDescription']
export const DialogFooter: typeof import("../app/components/ui/dialog/index")['DialogFooter']
export const DialogHeader: typeof import("../app/components/ui/dialog/index")['DialogHeader']
export const DialogOverlay: typeof import("../app/components/ui/dialog/index")['DialogOverlay']
export const DialogScrollContent: typeof import("../app/components/ui/dialog/index")['DialogScrollContent']
export const DialogTitle: typeof import("../app/components/ui/dialog/index")['DialogTitle']
export const DialogTrigger: typeof import("../app/components/ui/dialog/index")['DialogTrigger']
export const DropdownMenu: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuCheckboxItem: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuContent: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuItem: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuLabel: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuRadioGroup: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuRadioItem: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuSeparator: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuShortcut: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSub: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubContent: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const DropdownMenuSubTrigger: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuTrigger: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuPortal: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const FormControl: typeof import("../app/components/ui/form/index")['FormControl']
export const FormDescription: typeof import("../app/components/ui/form/index")['FormDescription']
export const FormItem: typeof import("../app/components/ui/form/index")['FormItem']
export const FormLabel: typeof import("../app/components/ui/form/index")['FormLabel']
export const FormMessage: typeof import("../app/components/ui/form/index")['FormMessage']
export const FORMITEMINJECTIONKEY: typeof import("../app/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
export const Form: typeof import("../app/components/ui/form/index")['Form']
export const FormField: typeof import("../app/components/ui/form/index")['FormField']
export const FormFieldArray: typeof import("../app/components/ui/form/index")['FormFieldArray']
export const HoverCard: typeof import("../app/components/ui/hover-card/index")['HoverCard']
export const HoverCardContent: typeof import("../app/components/ui/hover-card/index")['HoverCardContent']
export const HoverCardTrigger: typeof import("../app/components/ui/hover-card/index")['HoverCardTrigger']
export const Input: typeof import("../app/components/ui/input/index")['Input']
export const Popover: typeof import("../app/components/ui/popover/index")['Popover']
export const PopoverAnchor: typeof import("../app/components/ui/popover/index")['PopoverAnchor']
export const PopoverContent: typeof import("../app/components/ui/popover/index")['PopoverContent']
export const PopoverTrigger: typeof import("../app/components/ui/popover/index")['PopoverTrigger']
export const Label: typeof import("../app/components/ui/label/index")['Label']
export const RadioGroup: typeof import("../app/components/ui/radio-group/index")['RadioGroup']
export const RadioGroupItem: typeof import("../app/components/ui/radio-group/index")['RadioGroupItem']
export const Collapsible: typeof import("../app/components/ui/collapsible/index")['Collapsible']
export const CollapsibleContent: typeof import("../app/components/ui/collapsible/index")['CollapsibleContent']
export const CollapsibleTrigger: typeof import("../app/components/ui/collapsible/index")['CollapsibleTrigger']
export const Select: typeof import("../app/components/ui/select/index")['Select']
export const SelectContent: typeof import("../app/components/ui/select/index")['SelectContent']
export const SelectGroup: typeof import("../app/components/ui/select/index")['SelectGroup']
export const SelectItem: typeof import("../app/components/ui/select/index")['SelectItem']
export const SelectItemText: typeof import("../app/components/ui/select/index")['SelectItemText']
export const SelectLabel: typeof import("../app/components/ui/select/index")['SelectLabel']
export const SelectScrollDownButton: typeof import("../app/components/ui/select/index")['SelectScrollDownButton']
export const SelectScrollUpButton: typeof import("../app/components/ui/select/index")['SelectScrollUpButton']
export const SelectSeparator: typeof import("../app/components/ui/select/index")['SelectSeparator']
export const SelectTrigger: typeof import("../app/components/ui/select/index")['SelectTrigger']
export const SelectValue: typeof import("../app/components/ui/select/index")['SelectValue']
export const Separator: typeof import("../app/components/ui/separator/index")['Separator']
export const Sidebar: typeof import("../app/components/ui/sidebar/index")['Sidebar']
export const SidebarContent: typeof import("../app/components/ui/sidebar/index")['SidebarContent']
export const SidebarFooter: typeof import("../app/components/ui/sidebar/index")['SidebarFooter']
export const SidebarGroup: typeof import("../app/components/ui/sidebar/index")['SidebarGroup']
export const SidebarGroupAction: typeof import("../app/components/ui/sidebar/index")['SidebarGroupAction']
export const SidebarGroupContent: typeof import("../app/components/ui/sidebar/index")['SidebarGroupContent']
export const SidebarGroupLabel: typeof import("../app/components/ui/sidebar/index")['SidebarGroupLabel']
export const SidebarHeader: typeof import("../app/components/ui/sidebar/index")['SidebarHeader']
export const SidebarInput: typeof import("../app/components/ui/sidebar/index")['SidebarInput']
export const SidebarInset: typeof import("../app/components/ui/sidebar/index")['SidebarInset']
export const SidebarMenu: typeof import("../app/components/ui/sidebar/index")['SidebarMenu']
export const SidebarMenuAction: typeof import("../app/components/ui/sidebar/index")['SidebarMenuAction']
export const SidebarMenuBadge: typeof import("../app/components/ui/sidebar/index")['SidebarMenuBadge']
export const SidebarMenuButton: typeof import("../app/components/ui/sidebar/index")['SidebarMenuButton']
export const SidebarMenuItem: typeof import("../app/components/ui/sidebar/index")['SidebarMenuItem']
export const SidebarMenuSkeleton: typeof import("../app/components/ui/sidebar/index")['SidebarMenuSkeleton']
export const SidebarMenuSub: typeof import("../app/components/ui/sidebar/index")['SidebarMenuSub']
export const SidebarMenuSubButton: typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubButton']
export const SidebarMenuSubItem: typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubItem']
export const SidebarProvider: typeof import("../app/components/ui/sidebar/index")['SidebarProvider']
export const SidebarRail: typeof import("../app/components/ui/sidebar/index")['SidebarRail']
export const SidebarSeparator: typeof import("../app/components/ui/sidebar/index")['SidebarSeparator']
export const SidebarTrigger: typeof import("../app/components/ui/sidebar/index")['SidebarTrigger']
export const Skeleton: typeof import("../app/components/ui/skeleton/index")['Skeleton']
export const Switch: typeof import("../app/components/ui/switch/index")['Switch']
export const Table: typeof import("../app/components/ui/table/index")['Table']
export const TableBody: typeof import("../app/components/ui/table/index")['TableBody']
export const TableCaption: typeof import("../app/components/ui/table/index")['TableCaption']
export const TableCell: typeof import("../app/components/ui/table/index")['TableCell']
export const TableEmpty: typeof import("../app/components/ui/table/index")['TableEmpty']
export const TableFooter: typeof import("../app/components/ui/table/index")['TableFooter']
export const TableHead: typeof import("../app/components/ui/table/index")['TableHead']
export const TableHeader: typeof import("../app/components/ui/table/index")['TableHeader']
export const TableRow: typeof import("../app/components/ui/table/index")['TableRow']
export const Sheet: typeof import("../app/components/ui/sheet/index")['Sheet']
export const SheetClose: typeof import("../app/components/ui/sheet/index")['SheetClose']
export const SheetContent: typeof import("../app/components/ui/sheet/index")['SheetContent']
export const SheetDescription: typeof import("../app/components/ui/sheet/index")['SheetDescription']
export const SheetFooter: typeof import("../app/components/ui/sheet/index")['SheetFooter']
export const SheetHeader: typeof import("../app/components/ui/sheet/index")['SheetHeader']
export const SheetTitle: typeof import("../app/components/ui/sheet/index")['SheetTitle']
export const SheetTrigger: typeof import("../app/components/ui/sheet/index")['SheetTrigger']
export const Textarea: typeof import("../app/components/ui/textarea/index")['Textarea']
export const Tooltip: typeof import("../app/components/ui/tooltip/index")['Tooltip']
export const TooltipContent: typeof import("../app/components/ui/tooltip/index")['TooltipContent']
export const TooltipProvider: typeof import("../app/components/ui/tooltip/index")['TooltipProvider']
export const TooltipTrigger: typeof import("../app/components/ui/tooltip/index")['TooltipTrigger']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAppBreadcrumb: LazyComponent<typeof import("../app/components/layout/AppBreadcrumb.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../app/components/layout/AppHeader.vue")['default']>
export const LazyAppSidebar: LazyComponent<typeof import("../app/components/layout/AppSidebar.vue")['default']>
export const LazyAppTitle: LazyComponent<typeof import("../app/components/layout/AppTitle.vue")['default']>
export const LazyCommandPalette: LazyComponent<typeof import("../app/components/layout/CommandPalette.vue")['default']>
export const LazyNavMain: LazyComponent<typeof import("../app/components/layout/NavMain.vue")['default']>
export const LazyNavUser: LazyComponent<typeof import("../app/components/layout/NavUser.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../app/components/layout/ThemeToggle.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
export const LazyScriptAriaLoadingIndicator: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
export const LazyScriptCarbonAds: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
export const LazyScriptCrisp: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
export const LazyScriptGoogleAdsense: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
export const LazyScriptGoogleMaps: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
export const LazyScriptIntercom: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
export const LazyScriptLemonSqueezy: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
export const LazyScriptLoadingIndicator: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
export const LazyScriptStripePricingTable: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
export const LazyScriptVimeoPlayer: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
export const LazyScriptYouTubePlayer: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCCached: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCCached.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyAccordion: LazyComponent<typeof import("../app/components/ui/accordion/index")['Accordion']>
export const LazyAccordionContent: LazyComponent<typeof import("../app/components/ui/accordion/index")['AccordionContent']>
export const LazyAccordionItem: LazyComponent<typeof import("../app/components/ui/accordion/index")['AccordionItem']>
export const LazyAccordionTrigger: LazyComponent<typeof import("../app/components/ui/accordion/index")['AccordionTrigger']>
export const LazyAutoForm: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoForm']>
export const LazyAutoFormField: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormField']>
export const LazyAutoFormFieldArray: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldArray']>
export const LazyAutoFormFieldBoolean: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldBoolean']>
export const LazyAutoFormFieldDate: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldDate']>
export const LazyAutoFormFieldEnum: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldEnum']>
export const LazyAutoFormFieldFile: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldFile']>
export const LazyAutoFormFieldInput: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldInput']>
export const LazyAutoFormFieldNumber: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldNumber']>
export const LazyAutoFormFieldObject: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormFieldObject']>
export const LazyAutoFormLabel: LazyComponent<typeof import("../app/components/ui/auto-form/index")['AutoFormLabel']>
export const LazyConfig: LazyComponent<typeof import("../app/components/ui/auto-form/index")['Config']>
export const LazyConfigItem: LazyComponent<typeof import("../app/components/ui/auto-form/index")['ConfigItem']>
export const LazyFieldProps: LazyComponent<typeof import("../app/components/ui/auto-form/index")['FieldProps']>
export const LazyAvatar: LazyComponent<typeof import("../app/components/ui/avatar/index")['Avatar']>
export const LazyAvatarFallback: LazyComponent<typeof import("../app/components/ui/avatar/index")['AvatarFallback']>
export const LazyAvatarImage: LazyComponent<typeof import("../app/components/ui/avatar/index")['AvatarImage']>
export const LazyBreadcrumb: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['Breadcrumb']>
export const LazyBreadcrumbEllipsis: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbEllipsis']>
export const LazyBreadcrumbItem: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbItem']>
export const LazyBreadcrumbLink: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbLink']>
export const LazyBreadcrumbList: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbList']>
export const LazyBreadcrumbPage: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbPage']>
export const LazyBreadcrumbSeparator: LazyComponent<typeof import("../app/components/ui/breadcrumb/index")['BreadcrumbSeparator']>
export const LazyButton: LazyComponent<typeof import("../app/components/ui/button/index")['Button']>
export const LazyCheckbox: LazyComponent<typeof import("../app/components/ui/checkbox/index")['Checkbox']>
export const LazyCalendar: LazyComponent<typeof import("../app/components/ui/calendar/index")['Calendar']>
export const LazyCalendarCell: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarCell']>
export const LazyCalendarCellTrigger: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarCellTrigger']>
export const LazyCalendarGrid: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGrid']>
export const LazyCalendarGridBody: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGridBody']>
export const LazyCalendarGridHead: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGridHead']>
export const LazyCalendarGridRow: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarGridRow']>
export const LazyCalendarHeadCell: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarHeadCell']>
export const LazyCalendarHeader: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarHeader']>
export const LazyCalendarHeading: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarHeading']>
export const LazyCalendarNextButton: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarNextButton']>
export const LazyCalendarPrevButton: LazyComponent<typeof import("../app/components/ui/calendar/index")['CalendarPrevButton']>
export const LazyCommand: LazyComponent<typeof import("../app/components/ui/command/index")['Command']>
export const LazyCommandDialog: LazyComponent<typeof import("../app/components/ui/command/index")['CommandDialog']>
export const LazyCommandEmpty: LazyComponent<typeof import("../app/components/ui/command/index")['CommandEmpty']>
export const LazyCommandGroup: LazyComponent<typeof import("../app/components/ui/command/index")['CommandGroup']>
export const LazyCommandInput: LazyComponent<typeof import("../app/components/ui/command/index")['CommandInput']>
export const LazyCommandItem: LazyComponent<typeof import("../app/components/ui/command/index")['CommandItem']>
export const LazyCommandList: LazyComponent<typeof import("../app/components/ui/command/index")['CommandList']>
export const LazyCommandSeparator: LazyComponent<typeof import("../app/components/ui/command/index")['CommandSeparator']>
export const LazyCommandShortcut: LazyComponent<typeof import("../app/components/ui/command/index")['CommandShortcut']>
export const LazyDialog: LazyComponent<typeof import("../app/components/ui/dialog/index")['Dialog']>
export const LazyDialogClose: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogClose']>
export const LazyDialogContent: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogContent']>
export const LazyDialogDescription: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogDescription']>
export const LazyDialogFooter: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogFooter']>
export const LazyDialogHeader: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogHeader']>
export const LazyDialogOverlay: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogOverlay']>
export const LazyDialogScrollContent: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogScrollContent']>
export const LazyDialogTitle: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogTitle']>
export const LazyDialogTrigger: LazyComponent<typeof import("../app/components/ui/dialog/index")['DialogTrigger']>
export const LazyDropdownMenu: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazyFormControl: LazyComponent<typeof import("../app/components/ui/form/index")['FormControl']>
export const LazyFormDescription: LazyComponent<typeof import("../app/components/ui/form/index")['FormDescription']>
export const LazyFormItem: LazyComponent<typeof import("../app/components/ui/form/index")['FormItem']>
export const LazyFormLabel: LazyComponent<typeof import("../app/components/ui/form/index")['FormLabel']>
export const LazyFormMessage: LazyComponent<typeof import("../app/components/ui/form/index")['FormMessage']>
export const LazyFORMITEMINJECTIONKEY: LazyComponent<typeof import("../app/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
export const LazyForm: LazyComponent<typeof import("../app/components/ui/form/index")['Form']>
export const LazyFormField: LazyComponent<typeof import("../app/components/ui/form/index")['FormField']>
export const LazyFormFieldArray: LazyComponent<typeof import("../app/components/ui/form/index")['FormFieldArray']>
export const LazyHoverCard: LazyComponent<typeof import("../app/components/ui/hover-card/index")['HoverCard']>
export const LazyHoverCardContent: LazyComponent<typeof import("../app/components/ui/hover-card/index")['HoverCardContent']>
export const LazyHoverCardTrigger: LazyComponent<typeof import("../app/components/ui/hover-card/index")['HoverCardTrigger']>
export const LazyInput: LazyComponent<typeof import("../app/components/ui/input/index")['Input']>
export const LazyPopover: LazyComponent<typeof import("../app/components/ui/popover/index")['Popover']>
export const LazyPopoverAnchor: LazyComponent<typeof import("../app/components/ui/popover/index")['PopoverAnchor']>
export const LazyPopoverContent: LazyComponent<typeof import("../app/components/ui/popover/index")['PopoverContent']>
export const LazyPopoverTrigger: LazyComponent<typeof import("../app/components/ui/popover/index")['PopoverTrigger']>
export const LazyLabel: LazyComponent<typeof import("../app/components/ui/label/index")['Label']>
export const LazyRadioGroup: LazyComponent<typeof import("../app/components/ui/radio-group/index")['RadioGroup']>
export const LazyRadioGroupItem: LazyComponent<typeof import("../app/components/ui/radio-group/index")['RadioGroupItem']>
export const LazyCollapsible: LazyComponent<typeof import("../app/components/ui/collapsible/index")['Collapsible']>
export const LazyCollapsibleContent: LazyComponent<typeof import("../app/components/ui/collapsible/index")['CollapsibleContent']>
export const LazyCollapsibleTrigger: LazyComponent<typeof import("../app/components/ui/collapsible/index")['CollapsibleTrigger']>
export const LazySelect: LazyComponent<typeof import("../app/components/ui/select/index")['Select']>
export const LazySelectContent: LazyComponent<typeof import("../app/components/ui/select/index")['SelectContent']>
export const LazySelectGroup: LazyComponent<typeof import("../app/components/ui/select/index")['SelectGroup']>
export const LazySelectItem: LazyComponent<typeof import("../app/components/ui/select/index")['SelectItem']>
export const LazySelectItemText: LazyComponent<typeof import("../app/components/ui/select/index")['SelectItemText']>
export const LazySelectLabel: LazyComponent<typeof import("../app/components/ui/select/index")['SelectLabel']>
export const LazySelectScrollDownButton: LazyComponent<typeof import("../app/components/ui/select/index")['SelectScrollDownButton']>
export const LazySelectScrollUpButton: LazyComponent<typeof import("../app/components/ui/select/index")['SelectScrollUpButton']>
export const LazySelectSeparator: LazyComponent<typeof import("../app/components/ui/select/index")['SelectSeparator']>
export const LazySelectTrigger: LazyComponent<typeof import("../app/components/ui/select/index")['SelectTrigger']>
export const LazySelectValue: LazyComponent<typeof import("../app/components/ui/select/index")['SelectValue']>
export const LazySeparator: LazyComponent<typeof import("../app/components/ui/separator/index")['Separator']>
export const LazySidebar: LazyComponent<typeof import("../app/components/ui/sidebar/index")['Sidebar']>
export const LazySidebarContent: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarContent']>
export const LazySidebarFooter: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarFooter']>
export const LazySidebarGroup: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroup']>
export const LazySidebarGroupAction: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroupAction']>
export const LazySidebarGroupContent: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroupContent']>
export const LazySidebarGroupLabel: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarGroupLabel']>
export const LazySidebarHeader: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarHeader']>
export const LazySidebarInput: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarInput']>
export const LazySidebarInset: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarInset']>
export const LazySidebarMenu: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenu']>
export const LazySidebarMenuAction: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuAction']>
export const LazySidebarMenuBadge: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuBadge']>
export const LazySidebarMenuButton: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuButton']>
export const LazySidebarMenuItem: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuItem']>
export const LazySidebarMenuSkeleton: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSkeleton']>
export const LazySidebarMenuSub: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSub']>
export const LazySidebarMenuSubButton: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubButton']>
export const LazySidebarMenuSubItem: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarMenuSubItem']>
export const LazySidebarProvider: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarProvider']>
export const LazySidebarRail: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarRail']>
export const LazySidebarSeparator: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarSeparator']>
export const LazySidebarTrigger: LazyComponent<typeof import("../app/components/ui/sidebar/index")['SidebarTrigger']>
export const LazySkeleton: LazyComponent<typeof import("../app/components/ui/skeleton/index")['Skeleton']>
export const LazySwitch: LazyComponent<typeof import("../app/components/ui/switch/index")['Switch']>
export const LazyTable: LazyComponent<typeof import("../app/components/ui/table/index")['Table']>
export const LazyTableBody: LazyComponent<typeof import("../app/components/ui/table/index")['TableBody']>
export const LazyTableCaption: LazyComponent<typeof import("../app/components/ui/table/index")['TableCaption']>
export const LazyTableCell: LazyComponent<typeof import("../app/components/ui/table/index")['TableCell']>
export const LazyTableEmpty: LazyComponent<typeof import("../app/components/ui/table/index")['TableEmpty']>
export const LazyTableFooter: LazyComponent<typeof import("../app/components/ui/table/index")['TableFooter']>
export const LazyTableHead: LazyComponent<typeof import("../app/components/ui/table/index")['TableHead']>
export const LazyTableHeader: LazyComponent<typeof import("../app/components/ui/table/index")['TableHeader']>
export const LazyTableRow: LazyComponent<typeof import("../app/components/ui/table/index")['TableRow']>
export const LazySheet: LazyComponent<typeof import("../app/components/ui/sheet/index")['Sheet']>
export const LazySheetClose: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetClose']>
export const LazySheetContent: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetContent']>
export const LazySheetDescription: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetDescription']>
export const LazySheetFooter: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetFooter']>
export const LazySheetHeader: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetHeader']>
export const LazySheetTitle: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetTitle']>
export const LazySheetTrigger: LazyComponent<typeof import("../app/components/ui/sheet/index")['SheetTrigger']>
export const LazyTextarea: LazyComponent<typeof import("../app/components/ui/textarea/index")['Textarea']>
export const LazyTooltip: LazyComponent<typeof import("../app/components/ui/tooltip/index")['Tooltip']>
export const LazyTooltipContent: LazyComponent<typeof import("../app/components/ui/tooltip/index")['TooltipContent']>
export const LazyTooltipProvider: LazyComponent<typeof import("../app/components/ui/tooltip/index")['TooltipProvider']>
export const LazyTooltipTrigger: LazyComponent<typeof import("../app/components/ui/tooltip/index")['TooltipTrigger']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
