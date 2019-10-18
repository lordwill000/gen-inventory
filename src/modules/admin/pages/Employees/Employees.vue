<template>
  <div id="Employees">
    <TableControls
      ref="tableHeader"
      :tabs="tableTabs"
      :controls="tableControls"
      @controlSelected="onControlClicked"
      @onTabChanged="onTabClicked"
    />
    <Table
      v-if="activeTab.tab.val === 'employee_management'"
      :headers="employeeMngmntTableHeader"
      :data="employees"
      :bordered-cell="false"
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
  tableTabs, tableControls, employeeMngmntTableHeader,
} from './variables';
import AddEmployeeForm from './AddEmployeeForm/AddEmployeeForm.vue';

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
    onControlClicked(control) {
      switch (control) {
        case 'add_employee':
          this.initModal({
            isVisible: true,
            header: 'Add Employee',
            children: AddEmployeeForm,
          });
          break;
        default:
          console.log(control);
      }
    },
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
  },
};
</script>

<style>

</style>
