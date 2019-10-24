<template>
  <h3
    role="tab"
    class="tab"
    :class="{'active': activeTab.tab.id === data.id}"
    @click="$emit('tabChanged', data)"
  >
    {{ data.label }}
    <span
      v-if="data.suffix"
      class="suffix"
    >{{ data.suffix }}</span>
  </h3>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types } from '@/store/modules/app/actions';

const {
  mapGetters: mapAppGetters,
  mapActions: mapAppActions,
} = createNamespacedHelpers('app');

export default {
  name: 'Tab',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapAppGetters({
      activeTab: 'getActiveTab',
    }),
  },
  methods: {
    ...mapAppActions({
      setActiveTab: types.SET_ACTIVE_TAB,
    }),
  },
};
</script>

<style lang="scss" scoped>
.tab {
  cursor: pointer;
  color: $gray1;
  padding-right: 40px;
  transition: color 0.2s ease;
  white-space: nowrap;
  .suffix {
    background-color: $tertiary;
    border-radius: 5px;
    color: $gray1;
    height: 28px;
    font-family: 'RedHatMed';
    margin-left: 15px;
    min-width: 28px;
    padding: 5px;
    transition: all 0.2s ease;
  }
  &.active {
    color: $primary;
    pointer-events: none;
    .suffix {
      background-color: $accentPale;
      color: $accent;
    }
  }
}
</style>
