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
import types from '@/store/modules/admin/types';
import TableControls from '@/components/TableControls.vue';
import Table from '@/components/Table/Table.vue';
import MainContent from '@/components/MainContent.vue';
import {
  tableTabs, tableControls, employeeMngmntTableHeader, rolesTableHeader,
} from './variables';

const {
  mapGetters: mapAdminGetters,
  mapActions: mapAdminActions,
} = createNamespacedHelpers('admin');

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
    ...mapAdminGetters({
      activeTab: 'getActiveTab',
      headerHeight: 'getHeaderHeight',
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
    }),
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
