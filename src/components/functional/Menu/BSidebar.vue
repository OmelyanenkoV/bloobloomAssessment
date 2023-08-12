<template>
  <div id="sidebars" class="sidebars" @mouseleave="closeSidebar">
    <div class="sidebar-first">
      <ul class="list">
        <li
          v-for="item in sidebarListMain"
          :key="item.id"
          :class="{ selected: isPhoneViewport && item.id === secondaryMenuItem?.id }"
          data-test-id="openSecondary"
          class="item"
          @click="secondaryMenuToggle(item)"
          @mouseenter="openSecondary(item)"
        >
          <span class="title">{{ item.title }}</span>
          <span v-if="item.expand" class="arrow" />
        </li>
      </ul>
    </div>
    <transition name="slide-second">
      <div v-if="secondaryMenuItem" id="sidebarSecond" class="sidebar-second">
        <ul class="list">
          <li
            v-for="item in secondaryMenuItem.subMenu"
            :key="item.id"
            data-test-id="subMenu"
            class="item"
            @click="router.push({ name: item.routeName })"
          >
            <span class="title">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core/index'
import { computed, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

import { SidebarItemMain } from '@/components/functional/Menu/types'
import { RouteNames } from '@/router/enums'
import { useSidebar } from '@/store/Sidebar'
import { Breakpoints } from '@/utils/breakpoints'

const { width } = useWindowSize()
const sidebar = useSidebar()
const router = useRouter()

const secondaryMenuItem: Ref<SidebarItemMain | null> = ref(null)
const isPhoneViewport = computed(() => width.value < Breakpoints.phone)
const isTabletViewport = computed(() => width.value > Breakpoints.phone)

const sidebarListMain: SidebarItemMain[] = [
  {
    id: 1,
    title: 'Spectacles',
    expand: true,
    subMenu: [
      { id: 1, title: 'Women', routeName: RouteNames.spectaclesWomen },
      { id: 2, title: 'Man', routeName: RouteNames.spectaclesMan }
    ]
  },
  {
    id: 2,
    title: 'Sunglasses',
    expand: true,
    subMenu: [
      { id: 1, title: 'Women 2', routeName: RouteNames.sunglassesWomen },
      { id: 2, title: 'Man 2', routeName: RouteNames.sunglassesMan }
    ]
  },
  { id: 3, title: 'Home tray on', expand: false },
  { id: 4, title: 'Pair for pair', expand: false }
]

const secondaryMenuToggle = (item: SidebarItemMain) => {
  if (isPhoneViewport.value && item?.subMenu) {
    if (item.id === secondaryMenuItem.value?.id) secondaryMenuItem.value = null
    else secondaryMenuItem.value = item
  } else {
    secondaryMenuItem.value = null
  }
}

const closeSidebar = (e: MouseEvent) => {
  if (e.relatedTarget instanceof Element) {
    const mouseOnMenu = e.relatedTarget.id === 'menu'
    if (mouseOnMenu) {
      secondaryMenuItem.value = null
      return
    }
    secondaryMenuItem.value = null
    setTimeout(() => {
      sidebar.SET_SIDEBAR_CLOSE()
    }, 150)
  }
}

const openSecondary = (item: SidebarItemMain) => {
  if (isTabletViewport.value && item?.subMenu) {
    if (item.id === secondaryMenuItem.value?.id) secondaryMenuItem.value = null
    else secondaryMenuItem.value = item
  } else {
    secondaryMenuItem.value = null
  }
}
</script>

<style src="./BSidebar.scss" />
