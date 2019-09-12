<template>
  <div id="Employees">
    <TableControls
      :tabs="tableTabs"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import types from '@/store/modules/admin/types';
import TableControls from '@/components/TableControls.vue';

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
    tableTabs: [
      {
        id: 0,
        label: 'Employee Management',
        val: 'employee_management',
        suffix: 40,
      },
      {
        id: 1,
        label: 'Role and Permissions',
        val: 'role_and_permissions',
      },
    ],
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
