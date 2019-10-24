<template>
  <div>
    <table>
      <TableHeader :headers="headers" />
      <slot />
    </table>
  </div>
</template>

<script>
import TableHeader from './TableHeader.vue';

export default {
  name: 'Table',
  components: {
    TableHeader,
  },
  props: {
    headers: {
      type: Array,
      default: () => [],
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
