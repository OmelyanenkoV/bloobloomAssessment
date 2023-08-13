import { RouteNames, RoutePaths } from '@/router/enums'

const lazyLoading = (name: string, folder: string) => () => import(`../views/${folder}/${name}.vue`)

export const routes = [
  {
    path: RoutePaths.collections,
    component: () => import('../components/layout/defaultLayout.vue'),
    children: [
      {
        path: RoutePaths.spectaclesWomen,
        name: RouteNames.spectaclesWomen,
        component: lazyLoading('Spectacles', 'Women')
      },
      {
        path: RoutePaths.sunglassesWomen,
        name: RouteNames.sunglassesWomen,
        component: lazyLoading('Sunglasses', 'Women')
      },
      {
        path: RoutePaths.spectaclesMen,
        name: RouteNames.spectaclesMen,
        component: lazyLoading('Spectacles', 'Men')
      },
      {
        path: RoutePaths.sunglassesMen,
        name: RouteNames.sunglassesMen,
        component: lazyLoading('Sunglasses', 'Men')
      },
      {
        path: '/:pathMatch*',
        redirect: { name: RouteNames.spectaclesWomen }
      }
    ]
  },
  {
    path: '/:pathMatch*',
    redirect: { name: RouteNames.spectaclesWomen }
  }
]
