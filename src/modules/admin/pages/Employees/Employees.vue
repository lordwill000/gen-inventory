<template>
  <div id="Employees">
    <TableControls
      :tabs="tableTabs"
      :controls="tableControls"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/admin/types';
import TableControls from '@/components/TableControls.vue';
import { tableTabs, tableControls } from './variables';

const {
  mapGetters: mapAdminGetters,
  mapActions: mapAdminActions,
} = createNamespacedHelpers('admin');

export default {
  name: 'Employees',
  components: {
    TableControls,
  },
  data: () => ({
    tableTabs,
    tableControls,
  }),
  computed: {
    ...mapAdminGetters({
      activeTab: 'getActiveTab',
    }),
  },
  methods: {
    ...mapAdminActions({
      setActiveTab: types.SET_ACTIVE_TAB,
    }),
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
