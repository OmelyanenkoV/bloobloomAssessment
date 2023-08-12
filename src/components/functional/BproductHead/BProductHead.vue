<template>
  <div class="head">
    <div class="main">
      <div />
      <div class="title">
        <h1>{{ props.title }}</h1>
      </div>
      <div class="controls">
        <div data-test-id="isColourOpened" class="colour" @click="colourController">
          <span>Colour</span>
        </div>
        <div data-test-id="shapeController" class="shape" @click="shapeController">
          <span>Shape</span>
        </div>
      </div>
    </div>
    <div class="filters" :class="{ borders: isColourOpened || isShapeOpened }">
      <div v-if="isColourOpened" class="colour">
        <div v-for="item in coloursInputGroup" :key="item.id">
          <input
            :id="item.id"
            v-model="selectedColours"
            data-test-id="selectedColours"
            type="checkbox"
            :name="item.name"
            :value="item.name"
          />
          <label :for="item.name">{{ item.title }}</label>
        </div>
      </div>
      <div v-if="isShapeOpened" class="shape">
        <div v-for="item in shapeInputGroup" :key="item.id">
          <input
            :id="item.id"
            v-model="selectedShape"
            data-test-id="selectedShape"
            type="checkbox"
            :name="item.name"
            :value="item.name"
          />
          <label :for="item.name">{{ item.title }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default title'
})
const emits = defineEmits(['update:colourUpdated', 'update:shapeUpdated'])

const isColourOpened = ref(false)
const isShapeOpened = ref(false)
const selectedColours = ref([])
const selectedShape = ref([])

watch(selectedColours, () => {
  emits('update:colourUpdated', selectedColours.value)
})

watch(selectedShape, () => {
  emits('update:shapeUpdated', selectedShape.value)
})

const colourController = () => {
  if (isShapeOpened.value) isShapeOpened.value = false
  isColourOpened.value = !isColourOpened.value
}

const shapeController = () => {
  if (isColourOpened.value) isColourOpened.value = false
  isShapeOpened.value = !isShapeOpened.value
}

interface InputsType {
  name: string
  id: string
  title: string
}

const coloursInputGroup: InputsType[] = [
  { name: 'black', id: 'black', title: 'Black' },
  { name: 'tortoise', id: 'tortoise', title: 'Tortoise' },
  { name: 'coloured', id: 'coloured', title: 'Coloured' },
  { name: 'crystal', id: 'crystal', title: 'Crystal' },
  { name: 'dark', id: 'dark', title: 'Dark' },
  { name: 'bright', id: 'bright', title: 'Bright' }
]

const shapeInputGroup: InputsType[] = [
  { name: 'square', id: 'square', title: 'Square' },
  { name: 'rectangle', id: 'rectangle', title: 'Rectangle' },
  { name: 'round', id: 'round', title: 'Round' },
  { name: 'cat-eye', id: 'cat-eye', title: 'Cat-eye' }
]
</script>

<style lang="scss" scoped>
.head {
  .main {
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

  .filters {
    .colour,
    .shape {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;

      & > div {
        display: flex;
        gap: 3px;

        label {
          text-transform: uppercase;
        }
      }
    }
  }

  .borders {
    border-right: 1px solid $color-black;
    border-bottom: 1px solid $color-black;
    border-left: 1px solid $color-black;
  }
}
</style>
