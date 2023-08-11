import { defineStore } from 'pinia'

interface Sidebar {
  isOpen: boolean
}

export const useSidebar = defineStore('sidebar', {
  state: (): Sidebar => {
    return {
      isOpen: false
    }
  },
  getters: {},
  actions: {
    TOGGLE_SIDEBAR() {
      this.isOpen = !this.isOpen
    },
    SET_SIDEBAR_OPEN() {
      this.isOpen = true
    },
    SET_SIDEBAR_CLOSE() {
      this.isOpen = false
    }
  }
})
