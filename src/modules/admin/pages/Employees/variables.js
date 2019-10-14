export const tableControls = [
  {
    id: 0,
    label: 'Search',
    event: 'search',
    mode: 'transparent',
    img: 'ic_search.svg',
    imgPosition: 'left',
  },
  {
    id: 1,
    label: 'Select item/s',
    event: 'bulk_select',
    mode: 'transparent',
  },
  {
    id: 2,
    label: 'Filters',
    event: 'filter',
    mode: 'transparent',
    img: 'ic_dropdown_accent.svg',
    imgPosition: 'right',
  },
  {
    id: 3,
    label: 'Add Employee',
    event: 'add_employee',
    img: 'ic_add.svg',
    imgPosition: 'left',
  },
];

export const tableTabs = [
  {
    id: 0,
    label: 'Employee Management',
    val: 'employee_management',
    suffix: 40,
  },
  {
    id: 1,
    label: 'Attendance',
    val: 'attendance',
  },
  {
    id: 2,
    label: 'Role & Permissions',
    val: 'role_and_permissions',
  },
];
