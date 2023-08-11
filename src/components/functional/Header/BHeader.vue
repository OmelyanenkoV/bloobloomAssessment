<template>
  <header class="header">
    <div
      id="menu"
      data-test-id="mobileSidebarController"
      class="menu"
      @click="mobileSidebarController"
      @mouseenter="tabletSidebarMouseenterController"
      @mouseleave="tabletSidebarMouseleaveController"
    >
      <span :class="{ underline: sidebar.isOpen }">Menu</span>
    </div>
    <div class="logo">
      <picture>
        <source :srcset="logoWebp" />
        <img
          data-test-id="goToDefaultPage"
          :src="logoPng"
          alt="bloobloom logo"
          @click="router.push({ name: RouteNames.spectaclesWomen })"
        />
      </picture>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { RouteNames } from '@/router/enums'
import { useSidebar } from '@/store/Sidebar'
import { Breakpoints } from '@/utils/breakpoints'
import { imgConstructor } from '@/utils/imgConstructor'

// use
const router = useRouter()
const sidebar = useSidebar()
const { width } = useWindowSize()

const isPhoneViewport = computed(() => width.value < Breakpoints.phone)
const isTabletViewport = computed(() => width.value > Breakpoints.phone)

const mobileSidebarController = () => {
  if (isPhoneViewport.value) sidebar.TOGGLE_SIDEBAR()
}

const tabletSidebarMouseenterController = () => {
  if (isTabletViewport.value) sidebar.SET_SIDEBAR_OPEN()
}

const tabletSidebarMouseleaveController = (e: MouseEvent) => {
  if (e.relatedTarget instanceof HTMLElement) {
    const mouseOnSidebar = e.relatedTarget.closest('#sidebars')?.classList.value === 'sidebars'
    if (mouseOnSidebar) return
    if (isTabletViewport.value) sidebar.TOGGLE_SIDEBAR()
  } else {
    if (isTabletViewport.value) sidebar.TOGGLE_SIDEBAR()
  }
}

// utils
const logoPng = imgConstructor('flower-logo.png')
const logoWebp = imgConstructor('flower-logo.webp')
</script>

<style src="./BHeader.scss" />
