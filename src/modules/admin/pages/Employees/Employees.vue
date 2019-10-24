<template>
  <div id="Employees">
    <TableControls
      ref="tableHeader"
      :tabs="tableTabs"
      :controls="tableControls"
      @onTabChanged="onTabClicked"
      @onSearchTermInput="handleSearch"
    />
    <Table
      v-if="activeTab.tab.val === 'employee_management'"
      :headers="employeeMngmntTableHeader"
      :is-fetching="isFetching"
    >
      <table-row
        v-if="!isFetching"
        :data="employees"
        :bordered-cell="false"
      />
      <Spinner
        v-else
        center
        :custom-style="{marginTop: '20px', marginBottom: '20px'}"
      />
    </Table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import { types as employeesTypes } from '@/store/modules/employees/actions';
import TableControls from './TableControls.vue';
import Table from '@/components/Table/Table.vue';
import Spinner from '@/components/Spinner.vue';
import EmployeesData from './EmployeesData.vue';
import {
  tableTabs, tableControls, employeeMngmntTableHeader,
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
    Spinner,
    'table-row': EmployeesData,
  },
  data: () => ({
    tableTabs,
    tableControls,
    employeeMngmntTableHeader,
    mainOffsetTop: 0,
    searchTerm: '',
  }),
  computed: {
    ...mapAppGetters({
      activeTab: 'getActiveTab',
    }),
    ...mapEmployeGetters({
      employees: 'data',
      isFetching: 'isFetching',
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
      initModal: appTypes.INIT_MODAL,
    }),
    ...mapEmployeActions({
      fetchEmployees: employeesTypes.REQUEST,
    }),
    onTabClicked(tab) {
      this.setActiveTab({
        module: this.$route.name,
        tab,
      });
      switch (tab.val) {
        case 'employee_management':
          this.fetchEmployees();
          break;
        default:
          console.log('attendance');
      }
    },
    handleSearch(term) {
      console.log(term, 'term ');
    },
  },
};
</script>

<style lang="scss" scoped>
.controls__wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

</style>
