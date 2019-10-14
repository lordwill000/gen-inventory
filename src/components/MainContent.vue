<template>
  <div
    class="main-content"
    :style="{height: `calc(100vh - ${offset}px)`}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    offset: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  overflow: auto;
}
</style>
