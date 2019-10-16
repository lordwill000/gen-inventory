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
import types from '@/store/modules/app/types';
import TableControls from '@/components/TableControls.vue';
import Table from '@/components/Table/Table.vue';
import MainContent from '@/components/MainContent.vue';
import {
  tableTabs, tableControls, employeeMngmntTableHeader, rolesTableHeader,
} from './variables';

const {
  mapGetters: mapAppGetters,
  mapActions: mapAdminActions,
} = createNamespacedHelpers('app');

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
      // employees: 'getEmployees',
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.mainOffsetTop = this.headerHeight + this.$refs.tableHeader.$el.clientHeight;
    });
  },
  methods: {
    ...mapAdminActions({
      setActiveTab: types.SET_ACTIVE_TAB,
      // fetchEmployees: types.FETCH_EMPLOYEES,
    }),
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
