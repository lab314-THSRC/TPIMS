import type { AppSidebarItemProps } from '~/components/layout/AppSidebar.vue'
import { useSidebar } from '~/components/ui/sidebar'

const sidebarItems = ref<AppSidebarItemProps>([
  {
    children: [
      {
        title: '首頁',
        id: 'home',
        url: '/home',
        icon: 'Home',
      },
    ],
  },
  {
    groupTitle: '管理系統',
    children: [
      {
        title: '專案計畫',
        id: 'projects',
        url: '/projects',
        icon: 'Album',
        items: [
          {
            title: '專案管理',
            id: 'projects-manage',
            url: '/projects/manage',
          },
          {
            title: '各系統行事曆',
            id: 'projects-calendars',
            url: '/projects/calendars',
          },
        ],
      },
      {
        title: '合約管理',
        id: 'contracts',
        url: '/contracts',
        icon: 'NotebookText',
        items: [
          {
            title: '合約總表',
            id: 'contracts-list',
            url: '/contracts/list',
          },
          {
            title: '維護合約資訊',
            id: 'contracts-edit',
            url: '/contracts/edit',
          },
          {
            title: '合約到期提醒',
            id: 'contracts-expiry-alerts',
            url: '/contracts/expiry-alerts',
          },
          {
            title: '新/續約管理',
            id: 'contracts-renewals',
            url: '/contracts/renewals',
          },
        ],
      },
      {
        title: '預算管理',
        id: 'budget',
        url: '/budget',
        icon: 'BadgeDollarSign',
        items: [
          {
            title: '年度預算總表',
            id: 'budget-annual',
            url: '/budget/annual',
          },
          {
            title: '預決算執行表',
            id: 'budget-execution',
            url: '/budget/execution',
          },
          {
            title: '預決算追蹤比對表',
            id: 'budget-tracking',
            url: '/budget/tracking',
          },
          {
            title: '合約計價明細表',
            id: 'budget-contract-pricing',
            url: '/budget/contract-pricing',
          },
          {
            title: '物料請購明細表',
            id: 'budget-materials',
            url: '/budget/materials',
          },
        ],
      },
      {
        title: '資質安衛管理',
        id: 'safety',
        url: '/safety',
        icon: 'ShieldCheck',
        items: [
          {
            title: '現場安全巡視',
            id: 'safety-inspection',
            url: '/safety/inspection',
          },
          {
            title: '自動檢查',
            id: 'safety-auto-check',
            url: '/safety/auto-check',
          },
          {
            title: '公務車管理',
            id: 'safety-vehicles',
            url: '/safety/vehicles',
          },
          {
            title: '防颱巡檢管理',
            id: 'safety-typhoon',
            url: '/safety/typhoon',
          },
        ],
      },
      {
        title: '維修管理',
        id: 'maintenance',
        url: '/maintenance',
        icon: 'Wrench',
        items: [
          {
            title: '事件事故管理',
            id: 'maintenance-incidents',
            url: '/maintenance/incidents',
          },
          {
            title: 'MME工具管理',
            id: 'maintenance-mme-tools',
            url: '/maintenance/mme-tools',
          },
          {
            title: '維修工單分析',
            id: 'maintenance-work-orders',
            url: '/maintenance/work-orders',
          },
          {
            title: '道岔設備管理',
            id: 'maintenance-switches',
            url: '/maintenance/switches',
          },
          {
            title: 'MASM工單',
            id: 'maintenance-masm',
            url: '/maintenance/masm',
          },
        ],
      },
      {
        title: '品質管理',
        id: 'quality',
        url: '/quality',
        icon: 'ClipboardList',
        items: [
          {
            title: 'QKPI',
            id: 'quality-qkpi',
            url: '/quality/qkpi',
          },
          {
            title: 'CCR業務管理',
            id: 'quality-ccr',
            url: '/quality/ccr',
          },
          {
            title: '工程車KPI',
            id: 'quality-vehicle-kpi',
            url: '/quality/vehicle-kpi',
          },
        ],
      },
      {
        title: '通報管理',
        id: 'reporting',
        url: '/reporting',
        icon: 'Megaphone',
        items: [
          {
            title: '門鎖報修業務',
            id: 'reporting-lock-repair',
            url: '/reporting/lock-repair',
          },
          {
            title: '圍籬報修業務',
            id: 'reporting-fence-repair',
            url: '/reporting/fence-repair',
          },
          {
            title: '接地線報修業務',
            id: 'reporting-grounding-repair',
            url: '/reporting/grounding-repair',
          },
          {
            title: '噪音敏感區施工通報單',
            id: 'reporting-noise-permit',
            url: '/reporting/noise-permit',
          },
          {
            title: '門鎖、圍籬資產管理',
            id: 'reporting-assets',
            url: '/reporting/assets',
          },
        ],
      },
      {
        title: 'TPD GIS資料維護',
        id: 'tpd-gis',
        url: '/tpd-gis',
        icon: 'Hammer',
        items: [
          {
            title: '軌道系統設備資料',
            id: 'tpd-gis-track',
            url: '/tpd-gis/track',
          },
          {
            title: '電車線系統設備資料',
            id: 'tpd-gis-catenary',
            url: '/tpd-gis/catenary',
          },
          {
            title: '電力系統設備資料',
            id: 'tpd-gis-power',
            url: '/tpd-gis/power',
          },
          {
            title: '每日工單',
            id: 'tpd-gis-daily-orders',
            url: '/tpd-gis/daily-orders',
          },
          {
            title: '軌道系統檢測資料',
            id: 'tpd-gis-track-inspection',
            url: '/tpd-gis/track-inspection',
          },
          {
            title: '電車線系統檢測資料',
            id: 'tpd-gis-catenary-inspection',
            url: '/tpd-gis/catenary-inspection',
          },
          {
            title: '電力系統檢測資料',
            id: 'tpd-gis-power-inspection',
            url: '/tpd-gis/power-inspection',
          },
          {
            title: '工程車資訊',
            id: 'tpd-gis-vehicles',
            url: '/tpd-gis/vehicles',
          },
        ],
      },
      {
        title: '工程車管理',
        id: 'engineering-vehicles',
        url: '/engineering-vehicles',
        icon: 'Car',
        items: [
          {
            title: '駐車管理',
            id: 'engineering-vehicles-management',
            url: '/engineering-vehicles/management',
          },
        ],
      },
      {
        title: '報表管理',
        id: 'reports',
        url: '/reports',
        icon: 'ChartBar',
        items: [
          {
            title: '部級報告',
            id: 'reports-department',
            url: '/reports/department',
          },
          {
            title: '專案管理分析表',
            id: 'reports-projects',
            url: '/reports/projects',
          },
          {
            title: '合約管理分析表',
            id: 'reports-contracts',
            url: '/reports/contracts',
          },
          {
            title: '預算管理分析表',
            id: 'reports-budget',
            url: '/reports/budget',
          },
          {
            title: '職安衛分析表',
            id: 'reports-safety',
            url: '/reports/safety',
          },
          {
            title: '品質分析表',
            id: 'reports-quality',
            url: '/reports/quality',
          },
          {
            title: '維修管理分析表',
            id: 'reports-maintenance',
            url: '/reports/maintenance',
          },
          {
            title: '維修系統分析表',
            id: 'reports-maintenance-system',
            url: '/reports/maintenance-system',
          },
          {
            title: '人力分析表',
            id: 'reports-hr',
            url: '/reports/hr',
          },
          {
            title: '通報業務管理分析表',
            id: 'reports-reporting',
            url: '/reports/reporting',
          },
        ],
      },
    ],
  },
  {
    groupTitle: '設定',
    children: [
      {
        title: '基本設定',
        id: 'settings',
        url: '/settings',
        icon: 'Settings',
        items: [
          {
            title: '信件參數設定',
            id: 'settings-mail',
            url: '/settings/mail',
          },
          {
            title: '系統參數設定',
            id: 'settings-system',
            url: '/settings/system',
          },
          {
            title: '字彙表設定',
            id: 'settings-dictionary',
            url: '/settings/dictionary',
          },
        ],
      },
      {
        title: '使用者管理',
        id: 'users',
        url: '/users',
        icon: 'CircleUserRound',
        items: [
          {
            title: '權限角色維護',
            id: 'users-roles',
            url: '/users/roles',
          },
          {
            title: '使用者權限設定',
            id: 'users-permissions',
            url: '/users/permissions',
          },
          {
            title: '人力現況維護',
            id: 'users-employee',
            url: '/users/employee',
          },
        ],
      },
    ],
  },
  {
    groupTitle: '記錄',
    children: [
      {
        title: '紀錄查詢',
        id: 'logs',
        url: '/logs',
        icon: 'History',
        items: [
          {
            title: '登入紀錄查詢',
            id: 'logs-login',
            url: '/logs/login',
          },
          {
            title: '使用紀錄查詢',
            id: 'logs-usage',
            url: '/logs/usage',
          },
          {
            title: '權限異動紀錄查詢',
            id: 'logs-permissions',
            url: '/logs/permissions',
          },
          {
            title: 'API紀錄查詢',
            id: 'logs-api',
            url: '/logs/api',
          },
        ],
      },
    ],
  },
])

export const useSidebarStore = defineStore('sidebarStore', () => {
  const states = {
    sidebarContent: sidebarItems,
    activeRoute: ref<Array<string>>([]),
  }
  const actions = {
    renderSidebarState: (url: string) => {
      states.activeRoute.value = []
      states.sidebarContent.value.forEach((group) => {
        group.children.forEach((child) => {
          if (child.items === undefined) {
            child.url === url ? (child.isActive = true) : (child.isActive = false)
          } else {
            if (child.items.some((item) => item.url === url)) {
              child.isActive = true
              states.activeRoute.value.push(child.title)
              child.items.forEach((item) => {
                if (item.url === url) {
                  item.isActive = true
                  states.activeRoute.value.push(item.title)
                } else {
                  item.isActive = false
                }
              })
            } else {
              child.isActive = false
              child.items.forEach((item) => {
                item.isActive = false
              })
            }
          }
        })
      })
    },
  }
  return {
    ...states,
    ...actions,
  }
})
