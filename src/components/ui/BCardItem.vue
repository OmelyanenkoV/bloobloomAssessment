<template>
  <div class="card">
    <div class="title">
      <h2>{{ props.title }}</h2>
    </div>
    <img :src="imgPath" alt="" width="460" height="345" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  imgPath: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default title',
  imgPath: ''
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-right: 1px solid $color-black;
  border-bottom: 1px solid $color-black;

  .title {
    position: absolute;
    top: 7px;
    right: 0;
    left: 0;
    z-index: 500;
    display: flex;
    justify-content: center;
    margin: auto;
    letter-spacing: 2.5px;

    h2 {
      text-transform: uppercase;
      letter-spacing: 3px;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
