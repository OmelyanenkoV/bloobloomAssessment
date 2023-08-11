import { RouteNames, RoutePaths } from '@/router/enums'

const lazyLoading = (name: string) => () => import(`../views/Women/${name}.vue`)

export const routes = [
  {
    path: '',
    component: () => import('../components/layout/defaultLayout.vue'),
    children: [
      {
        path: RoutePaths.spectaclesWomen,
        name: RouteNames.spectaclesWomen,
        component: lazyLoading('Spectacles')
      },
      {
        path: RoutePaths.sunglassesWomen,
        name: RouteNames.sunglassesWomen,
        component: lazyLoading('Sunglasses')
      },
      {
        path: '/:pathMatch*',
        redirect: { name: RouteNames.spectaclesWomen }
      }
    ]
  }
]
