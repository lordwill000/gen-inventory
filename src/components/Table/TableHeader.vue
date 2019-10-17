<template>
  <thead>
    <tr>
      <td
        v-for="header in headers"
        :key="header.id"
        class="t-3 fw-m "
        :style="{width: `${header.width}%`}"
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
    border-bottom: 1px solid #e8e8e8;
    td {
      color: $accent;
      letter-spacing: 0.1em;
      padding-bottom: 15px;
      padding-top: 15px;
      text-transform: uppercase;
    }
  }
}

</style>
