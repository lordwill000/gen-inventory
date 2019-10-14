<template>
  <button
    :type="type"
    tabIndex="0"
    :class="`btn--${mode}`"
    @click="handleBtnClick"
  >
    {{ label }}
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Submit',
    },
    type: {
      type: String,
      default: 'button',
    },
    mode: {
      type: String,
      default: 'background',
    },
  },
  methods: {
    handleBtnClick() {
      this.$emit('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 5px;
  display: block;
  @include font-size(12);
  font-family: 'RedHatMed';
  padding: 15px;
  text-align: center;
  transition: all 0.2s ease;
  width: 100%;
  &.btn {
    &--background {
      background-color: $accent;
      color: #fff;
      &:hover {
        background-color: $accentEvent;
      }
    }
    &--transparent {
      background-color: transparent;
      color: $accent;
    }
  }
  img {
    margin-right: 12px;
  }
}

</style>
