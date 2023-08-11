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
        path: RoutePaths.spectaclesMan,
        name: RouteNames.spectaclesMan,
        component: lazyLoading('Spectacles', 'Man')
      },
      {
        path: RoutePaths.sunglassesMan,
        name: RouteNames.sunglassesMan,
        component: lazyLoading('Sunglasses', 'Man')
      },
      {
        path: '/:pathMatch*',
        redirect: { name: RouteNames.spectaclesWomen }
      }
    ]
  }
]
