<template>
  <div class="head">
    <div />
    <div class="title">
      <h1>{{ props.title }}</h1>
    </div>
    <div class="controls">
      <div class="colour">
        <span>Colour</span>
      </div>
      <div class="shape">
        <span>Shape</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default title'
})
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid $color-black;

  @include media('>tablet') {
    flex-direction: row;
    height: 57px;

    div {
      flex: 1;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid $color-black;
    border-left: 1px solid $color-black;

    h1 {
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 3.5px;

      @include media('>desktop') {
        font-size: 28px;
      }
    }
  }

  .controls {
    display: flex;
    justify-content: center;
    height: 50px;
    border-top: 1px solid $color-black;
    border-right: 1px solid $color-black;
    border-left: 1px solid $color-black;

    @include media('>tablet') {
      justify-content: start;
      height: 100%;
      border-top: none;
      border-left: none;
    }

    div {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      @include media('>tablet') {
        flex: none;
        width: 153px;

        &:last-child {
          border-right: 1px solid $color-black;
        }
      }

      &:hover {
        color: $color-white;
        background-color: $color-black;
      }

      &:first-child {
        border-right: 1px solid $color-black;
      }
    }

    span {
      text-transform: uppercase;
      letter-spacing: 1.7px;
    }
  }
}
</style>
