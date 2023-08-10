import { RouteNames, RoutePaths } from '@/router/enums'

const lazyLoading = (name: string) => () => import(`../views/${name}.vue`)

export const routes = [
  {
    path: RoutePaths.default,
    name: RouteNames.default,
    component: lazyLoading('Default')
  },
  {
    path: '/:pathMatch*',
    redirect: { name: RouteNames.default }
  }
]
