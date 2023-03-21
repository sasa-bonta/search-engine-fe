<template>
  <div
      class="v-list-item v-list-item--link v-theme--light v-list-item--density-default v-list-item--three-line v-list-item--variant-text"
      tabindex="0">

    <div class="v-list-item__content">
      <div class="v-list-item-title">
        <div class="title-placeholder pb-2">
          <AnimatedPlaceholder height="16px" width="400px"/>
        </div>
      </div>
      <div class="v-list-item-subtitle">
        <div class="description-placeholder">
          <AnimatedPlaceholder height="16px"/>
          <AnimatedPlaceholder height="16px"/>
          <AnimatedPlaceholder height="16px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import AnimatedPlaceholder from "@/components/AnimatedPlaceholder";
</script>

<style scoped>
.description-placeholder, .title-placeholder {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>