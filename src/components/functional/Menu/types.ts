export interface SidebarItemMain {
  id: number
  title: string
  expand: boolean
  subMenu?: SidebarItemSecondary[]
}
export enum GlassesTypes {
  spectacles = 'spectacles',
  sunglasses = 'sunglasses'
}

export interface SidebarItemSecondary {
  id: number
  title: string
}
