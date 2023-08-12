<template>
  <div class="spectacles">
    <b-product-head
      title="Spectacles Women"
      @update:colour-updated="(coloursArr) => updateColours(coloursArr)"
      @update:shape-updated="(shapesArr) => updateShapes(shapesArr)"
    />
    <div v-if="productItems.length" class="list">
      <b-card-item
        v-for="item in productItems"
        :key="item.id"
        :title="item.name"
        :img-path="item.glassVariants[0].media[0].url"
      />
    </div>
    <div v-if="!productItems.length">
      <div class="skeleton-list">
        <Skeletor v-for="item in 12" :key="item" height="353" />
      </div>
    </div>
    <div class="load">
      <InfiniteLoading ref="infinite" class="load" @infinite="load" />
    </div>
  </div>
</template>

<script setup lang="ts">
import camelcaseKeysDeep from 'camelcase-keys-deep'
import InfiniteLoading from 'v3-infinite-loading'
import { StateHandler } from 'v3-infinite-loading/lib/types'
import { onMounted, ref } from 'vue'

import Api from '@/api'
import { Gender, GlassesType } from '@/api/types'
import BProductHead from '@/components/functional/BproductHead/BProductHead.vue'
import BCardItem from '@/components/ui/BCardItem.vue'

const colours: any = ref([])
const shapes: any = ref([])

function updateColours(arr: any) {
  productItems.value = []
  colours.value = arr
  load(infinite.value as unknown as StateHandler)
}

function updateShapes(arr: any) {
  productItems.value = []
  shapes.value = arr
  load(infinite.value as unknown as StateHandler)
}

let productItems: any = ref([])
let page = 1
let meta = ref(0)
const infinite = ref('infinite')

const load = async ($state: StateHandler) => {
  try {
    const { data } = await Api.getProductList(
      GlassesType.spectacles,
      Gender.women,
      `${page.toString()}`,
      colours.value,
      shapes.value
    )
    const response: any = camelcaseKeysDeep(data)
    meta.value = response.meta.totalCount
    if (productItems.value.length >= meta.value) {
      $state.complete()
    } else {
      productItems.value.push(...response.glasses)
      $state.loaded()
      page++
    }
  } catch (error) {
    $state.error()
  }
}
onMounted(() => {
  load(infinite.value as unknown as StateHandler)
})
</script>

<style lang="scss" scoped>
.spectacles {
  .list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    border-left: 1px solid $color-black;

    @include media('>phone') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media('>desktop') {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      height: 353px;
    }
  }

  .load {
    display: flex;
    flex: none;
    justify-content: center;
  }

  .skeleton-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    border-right: 1px solid $color-black;
    border-bottom: 1px solid $color-black;
    border-left: 1px solid $color-black;

    @include media('>phone') {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media('>desktop') {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
