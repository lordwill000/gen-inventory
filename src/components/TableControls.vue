<template>
  <div class="table__controls">
    <TabsWrapper :tabs="tabs" />
  </div>
</template>

<script>
import TabsWrapper from './TabsWrapper/TabsWrapper.vue';

export default {
  name: 'TableControls',
  components: {
    TabsWrapper,
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
  },
  methods: {
    handleTabClick(val) {
      console.log(val);
      this.$emit('tab-clicked', val);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
