<template>
  <div class="card">
    <div class="wrapper" :style="`background-image: url(${background})`">
      <div class="card-item">
        <div class="title">
          <h2>{{ props.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { imgConstructor } from '@/utils/imgConstructor'

interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default title'
})

const background = imgConstructor('stone.jpg')
</script>

<style lang="scss" scoped>
.card {
  .wrapper {
    width: 100%;
    height: 100%;

    .card-item {
      display: flex;
      justify-content: center;

      .title {
        margin-top: 6px;
        letter-spacing: 2.5px;
      }
    }
  }
}
</style>
