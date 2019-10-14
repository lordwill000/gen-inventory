<template>
  <thead>
    <tr>
      <td
        v-for="header in headers"
        :key="header.id"
        class="t-3 fw-m "
      >
        {{ header.hide ? '&nbsp;' : header.label }}
      </td>
      <td>&nbsp;</td>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
thead {
  tr {
    td {
      color: $accent;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
}

</style>
