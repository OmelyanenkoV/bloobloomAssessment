<template>
  <div class="sidebars">
    <div class="sidebar-first" @mouseleave="tabletSidebarMouseleaveController">
      <ul class="list">
        <li
          v-for="item in sidebarListMain"
          :key="item.id"
          :class="{ selected: item.id === secondaryMenuItem?.id }"
          data-test-id="openSecondary"
          class="item"
          @click="toggleSecondary(item)"
        >
          <span class="title">{{ item.title }}</span>
          <span v-if="item.expand" class="arrow" />
        </li>
      </ul>
    </div>
    <transition name="slide-second">
      <div v-if="secondaryMenuItem" class="sidebar-second" @mouseleave="tabletSecondarySidebarMouseleaveController">
        <ul class="list">
          <li v-for="item in secondaryMenuItem.subMenu" :key="item.id" class="item">
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

import { SidebarItemMain } from '@/components/functional/Menu/types'
import { useSidebar } from '@/store/Sidebar'
import { Breakpoints } from '@/utils/breakpoints'

const { width } = useWindowSize()
const sidebar = useSidebar()

const secondaryMenuItem: Ref<SidebarItemMain | null> = ref(null)

const sidebarListMain: SidebarItemMain[] = [
  {
    id: 1,
    title: 'Spectacles',
    expand: true,
    subMenu: [
      { id: 1, title: 'Women' },
      { id: 2, title: 'Man' }
    ]
  },
  {
    id: 2,
    title: 'Sunglasses',
    expand: true,
    subMenu: [
      { id: 1, title: 'Women' },
      { id: 2, title: 'Man' }
    ]
  },
  { id: 3, title: 'Home tray on', expand: false },
  { id: 4, title: 'Pair for pair', expand: false }
]

const toggleSecondary = (item: SidebarItemMain | undefined) => {
  if (item?.subMenu) {
    if (secondaryMenuItem.value?.id === item.id) secondaryMenuItem.value = null
    else secondaryMenuItem.value = item
  }
}

const isTabletViewport = computed(() => width.value > Breakpoints.phone)

// TODO: change selector from classes to id
const tabletSidebarMouseleaveController = (e: MouseEvent) => {
  if (e.relatedTarget instanceof HTMLElement) {
    const mouseOnMenu = e.relatedTarget.closest('.menu')?.classList.value === 'menu'
    const mouseOnSubMenu = e.relatedTarget.closest('.sidebar-second')?.classList.value === 'sidebar-second'

    if (mouseOnMenu || mouseOnSubMenu) return
    if (isTabletViewport.value) sidebar.TOGGLE_SIDEBAR()
  }
}

const tabletSecondarySidebarMouseleaveController = (e: MouseEvent) => {
  if (e.relatedTarget instanceof HTMLElement) {
    const mouseOnSidebar = e.relatedTarget.closest('.sidebars')?.classList.value === 'sidebars'
    if (mouseOnSidebar) return
    if (isTabletViewport.value) {
      secondaryMenuItem.value = null
      setTimeout(() => {
        sidebar.TOGGLE_SIDEBAR()
      }, 200)
    }
  }
}
</script>

<style src="./BSidebar.scss" />
