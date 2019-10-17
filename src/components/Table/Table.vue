<template>
  <div>
    <table>
      <TableHeader :headers="headers" />
      <TableRow
        v-if="!isFetching"
        :data="data"
        :bordered-cell="borderedCell"
      />
      <Spinner
        v-else
        center
        :custom-style="{marginTop: '20px', marginBottom: '20px'}"
      />
    </table>
  </div>
</template>

<script>
import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Table',
  components: {
    TableHeader,
    TableRow,
    Spinner,
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
    isFetching: {
      type: Boolean,
      default: true,
    },
    borderedCell: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.12);
  margin-top: 30px;
  padding: 15px 25px;
  table-layout: fixed;
  width: 100%;
}
</style>
