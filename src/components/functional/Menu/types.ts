import { RouteNames } from '@/router/enums'

export interface SidebarItemMain {
  id: number
  title: string
  expand: boolean
  subMenu?: SidebarItemSecondary[]
}

export interface SidebarItemSecondary {
  id: number
  title: string
  routeName: RouteNames
}
