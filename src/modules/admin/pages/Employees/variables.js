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

export const employeeMngmntTableHeader = [
  {
    id: 0,
    label: 'ID',
    hide: true,
  },
  {
    id: 1,
    label: 'Name',
  },
  {
    id: 2,
    label: 'Position',
  },
  {
    id: 3,
    label: 'Branch',
  },
  {
    id: 4,
    label: 'Date of Employment',
  },
  {
    id: 5,
    label: 'Employment Status',
  },
];

export const rolesTableHeader = [
  {
    id: 0,
    label: 'ID',
    hide: true,
  },
  {
    id: 1,
    label: 'Role',
  },
  {
    id: 2,
    label: 'Employee',
  },
  {
    id: 3,
    label: 'Racks',
  },
  {
    id: 4,
    label: 'Store Partners',
  },
  {
    id: 5,
    label: 'Branches',
  },
  {
    id: 6,
    label: 'Utilities',
  },
  {
    id: 7,
    label: 'Reports',
  },
];