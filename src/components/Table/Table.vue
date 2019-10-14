<template>
  <table>
    <TableHeader :headers="headers" />
    <!-- <TableRow :data="data" /> -->
  </table>
</template>

<script>
import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';

export default {
  name: 'Table',
  components: {
    TableHeader,
    TableRow,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.12);
  margin-top: 30px;
  table-layout: fixed;
  width: 100%;
}
</style>
