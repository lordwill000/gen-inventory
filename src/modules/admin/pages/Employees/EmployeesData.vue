<template>
  <tbody>
    <tr
      v-for="row in data"
      :key="row.id"
      :class="borderedCell && 'bordered-cell'"
    >
      <td>{{ row.employeeId }}</td>
      <td class="fw-m">
        {{ row.firstName }} {{ row.lastName }}
      </td>
      <td>{{ row.position.name }}</td>
      <td>{{ row.branch.name }}</td>
      <td>{{ row.employedOn }}</td>
      <td>{{ row.employmentStatus.name }}</td>
      <td>
        <img
          src="@/assets/images/ic_more.svg"
          alt="more_icon"
        >
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'EmployeesData',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    borderedCell: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>

tbody {
  tr {
    border-bottom: 1px solid #e8e8e8;
    padding-left: 15px;
    padding-right: 15px;
    transition: background-color 0.2s ease;
    td {
      padding-bottom: 15px;
      padding-top: 15px;
      &.bordered-cell {
        &:not(:last-of-type) {
          border-right: 1px solid #e8e8e8;
        }
      }
      &:first-child {
        padding-left: 24px;
      }
    }
    &:hover {
      background-color: $tertiary;
    }
  }
}

</style>
