<template>
  <div
    role="tab"
    class="tab"
    :class="{'active': data.id === 0}"
    @click="handleTabClick(data.val)"
  >
    {{ data.label }}
    <span
      v-if="data.suffix"
      class="suffix"
    >{{ data.suffix }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
  },
  methods: {
    handleTabClick(val) {
      this.$emit('clicked', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  cursor: pointer;
  color: $gray1;
  font-family: 'RedHatMed';
  @include font-size(20);
  padding-right: 40px;
  .suffix {
    background-color: $accentPale;
    border-radius: 5px;
    color: $accent;
    height: 28px;
    font-family: 'RedHatMed';
    margin-left: 15px;
    min-width: 28px;
    padding: 5px;
  }
  &.active {
    color: $primary;
  }
}
</style>
