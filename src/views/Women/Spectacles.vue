<template>
  <div class="spectacles">
    <b-product-head title="Spectacles Women" />
    <div v-if="!isLoading" class="list">
      <b-card-item
        v-for="item in data?.glasses"
        :key="item.id"
        :title="item.name"
        :img-path="item.glassVariants[0].media[0].url"
      />
    </div>
    <div v-else>
      <div class="skeleton-list">
        <Skeletor v-for="item in 12" :key="item" height="353" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import camelcaseKeysDeep from 'camelcase-keys-deep'
import { useQuery } from 'vue-query'

import Api from '@/api'
import { Gender, GlassesType } from '@/api/types'
import BCardItem from '@/components/ui/BCardItem.vue'
import BProductHead from '@/components/ui/BProductHead.vue'

const getProductList = async () => {
  const { data } = await Api.getProductList(GlassesType.spectacles, Gender.women)
  return camelcaseKeysDeep(data)
}

const { data, isLoading } = useQuery<any>('productsList', getProductList)
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
