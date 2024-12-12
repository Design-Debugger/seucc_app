export interface SubMenuItem {
  title: string
  path: string
  description: string
  icon: string
}

export interface MenuItem {
  title: string
  path: string
  submenu?: SubMenuItem[]
}
