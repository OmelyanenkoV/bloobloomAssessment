<template>
  <div class="spectacles">
    <b-product-head title="Spectacles Women" />
    <div class="list">
      <b-card-item v-for="(item, index) in 12" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BCardItem from '@/components/ui/BCardItem.vue'
import BProductHead from '@/components/ui/BProductHead.vue'
</script>

<style lang="scss" scoped>
.spectacles {
  .list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background-color: $color-black;
    border-right: 1px solid $color-black;
    border-bottom: 1px solid $color-black;
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
}
</style>
