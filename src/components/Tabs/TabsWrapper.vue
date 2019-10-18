<template>
  <div class="tabs__wrapper">
    <Tab
      v-for="(tab, i) in tabs"
      :key="tab.id"
      :ref="`tab--${tab.val}`"
      :data="tab"
      class="tab"
      :class="{'--last': i == tabs.length - 1}"
      @tabChanged="handleTabChanged"
    />
    <div
      ref="indicator"
      class="indicator"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { setTimeout } from 'timers';
import Tab from './Tab.vue';

const {
  mapGetters: mapAppGetters,
} = createNamespacedHelpers('app');

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
  computed: {
    ...mapAppGetters({
      activeTab: 'getActiveTab',
    }),
  },
  watch: {
    activeTab(tab) {
      this.$refs.indicator.style.left = `${this.$refs[`tab--${tab.tab.val}`][0].$el.offsetLeft}px`;
    },
  },
  mounted() {
    this.$refs.indicator.style.left = `${this.$refs[`tab--${this.activeTab.tab.val}`][0].$el.offsetLeft}px`;
    setTimeout(() => {
      this.$refs.indicator.style.display = 'block';
    }, 10);
  },
  methods: {
    handleTabChanged(data) {
      this.$emit('tabChanged', data);
    },
  },
};
</script>

<style lang="scss">
.tabs__wrapper {
  display: flex;
  overflow: auto;
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
    display: none;
    left: 0;
    height: 3px;
    position: absolute;
    transition: left 0.2s ease-in-out;
    width: 60px;
  }
}
</style>
