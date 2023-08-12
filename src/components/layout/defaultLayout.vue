<template>
  <b-header />
  <transition name="slide">
    <b-sidebar v-if="sidebar.isOpen" />
  </transition>
  <main class="main">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import BHeader from '@/components/functional/Header/BHeader.vue'
import BSidebar from '@/components/functional/Menu/BSidebar.vue'
import { useSidebar } from '@/store/Sidebar'

const sidebar = useSidebar()
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 63px);
  padding-top: 61px;
}
</style>
