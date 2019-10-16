<template>
  <div id="Employees">
    <TableControls
      ref="tableHeader"
      :tabs="tableTabs"
      :controls="tableControls"
    />
    <MainContent :offset="mainOffsetTop">
      <Table
        v-if="activeTab.tab.val === 'employee_management'
          || activeTab.tab.val === 'role_and_permissions'"
        :headers="activeTab.tab.val === 'employee_management'
          ? employeeMngmntTableHeader : rolesTableHeader"
      />
    </MainContent>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import { types as employeesTypes } from '@/store/modules/employees/actions';
import TableControls from '@/components/TableControls.vue';
import Table from '@/components/Table/Table.vue';
import MainContent from '@/components/MainContent.vue';
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
    MainContent,
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
      headerHeight: 'getHeaderHeight',
    }),
    ...mapEmployeGetters({
      employees: 'data',
    }),
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
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
