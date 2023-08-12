import axios from 'axios'

import { Gender, GlassesType } from '@/api/types'
import { API_URL } from '@/configuration'

axios.defaults.baseURL = API_URL

export default {
  getProductList(type: GlassesType = GlassesType.spectacles, gender: Gender = Gender.women, pageNumber: string = '1') {
    return axios.get(
      `sales_channels/website/collections/${type}-${gender}/glasses?&sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${pageNumber}&filters[frame_variant_home_trial_available]=false`
    )
  }
}
