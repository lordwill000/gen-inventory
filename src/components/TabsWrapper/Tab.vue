<template>
  <div
    role="tab"
    class="tab"
    :class="{'active': activeTab.tab.id === data.id}"
    @click="handleTabClick(data)"
  >
    {{ data.label }}
    <span
      v-if="data.suffix"
      class="suffix"
    >{{ data.suffix }}</span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/admin/types';

const {
  mapGetters: mapAdminGetters,
  mapActions: mapAdminActions,
} = createNamespacedHelpers('admin');

export default {
  name: 'Tab',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapAdminGetters({
      activeTab: 'getActiveTab',
    }),
  },
  methods: {
    ...mapAdminActions({
      setActiveTab: types.SET_ACTIVE_TAB,
    }),
    handleTabClick(tab) {
      this.setActiveTab({
        module: this.$route.name,
        tab,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  cursor: pointer;
  color: $gray1;
  font-family: 'RedHatMed';
  @include font-size(20);
  padding-right: 40px;
  transition: color 0.2s ease;
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
    .suffix {
      background-color: $accentPale;
      color: $accent;
    }
  }
}
</style>
