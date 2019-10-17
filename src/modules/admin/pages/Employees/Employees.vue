<template>
  <div id="Employees">
    <TableControls
      ref="tableHeader"
      :tabs="tableTabs"
      :controls="tableControls"
    />
    <Table
      v-if="activeTab.tab.val === 'employee_management'
        || activeTab.tab.val === 'role_and_permissions'"
      :headers="activeTab.tab.val === 'employee_management'
        ? employeeMngmntTableHeader : rolesTableHeader"
      :data="employees"
      :bordered-cell="activeTab.tab.val === 'role_and_permissions' ? true : false"
      :is-fetching="isFetching"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import { types as employeesTypes } from '@/store/modules/employees/actions';
import TableControls from '@/components/TableControls.vue';
import Table from '@/components/Table/Table.vue';
import {
  tableTabs, tableControls, employeeMngmntTableHeader, rolesTableHeader,
} from './variables';

const {
  mapGetters: mapAppGetters,
  mapActions: mapAppActions,
} = createNamespacedHelpers('app');

const {
  mapGetters: mapEmployeGetters,
  mapActions: mapEmployeActions,
} = createNamespacedHelpers('employees');

export default {
  name: 'Employees',
  components: {
    TableControls,
    Table,
  },
  data: () => ({
    tableTabs,
    tableControls,
    employeeMngmntTableHeader,
    rolesTableHeader,
    mainOffsetTop: 0,
  }),
  computed: {
    ...mapAppGetters({
      activeTab: 'getActiveTab',
      // headerHeight: 'getHeaderHeight',
    }),
    ...mapEmployeGetters({
      employees: 'data',
      isFetching: 'isFetching',
    }),
  },
  watch: {
    activeTab(tab) {
      switch (tab.val) {
        case 'employee_management':
          this.fetchEmployees();
          break;
        case 'role_and_permissions':
          console.log('roles');
          break;
        default:
          console.log('attendance');
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.mainOffsetTop = this.headerHeight + this.$refs.tableHeader.$el.clientHeight;
    });
    this.fetchEmployees();
  },
  methods: {
    ...mapAppActions({
      setActiveTab: appTypes.SET_ACTIVE_TAB,
    }),
    ...mapEmployeActions({
      fetchEmployees: employeesTypes.REQUEST,
    }),
  },
};
</script>

<style>

</style>
