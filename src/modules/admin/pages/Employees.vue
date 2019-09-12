<template>
  <div id="Employees">
    <TableControls
      :tabs="tableTabs"
      @tab-clicked="onTabClick"
    />
  </div>
</template>

<script>
import TableControls from '@/components/TableControls.vue';

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
  methods: {
    onTabClick(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
