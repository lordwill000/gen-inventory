<template>
  <div class="tabs__wrapper">
    <Tab
      v-for="(tab, i) in tabs"
      :key="tab.id"
      ref="tab"
      :data="tab"
      class="tab"
      :class="{'--last': i == tabs.length - 1}"
      @clicked="onTabClick"
    />
    <div class="indicator" />
  </div>
</template>

<script>
import Tab from './Tab.vue';

export default {
  name: 'TabsWrapper',
  components: {
    Tab,
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
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
.tabs__wrapper {
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  position: relative;
  .tab {
    &.--last {
      padding-right: 0;
    }
  }
  .indicator {
    background-color: $accent;
    bottom: 0;
    left: 0;
    height: 3px;
    position: absolute;
    width: 60px;
  }
}
</style>
