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
  border: 1px solid;
  border-color: transparent;
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
    &--outline {
      background-color: transparent;
      border-color: $accent;
      color: $accent;
      svg, svg path {
        fill: $accent;
      }
      &:hover {
        background-color: $accent;
        color: #fff;
        svg,
        svg path {
          fill: #fff;
        }
      }
    }
    &--muted {
      background-color: $tertiary;
      border-color: $secondary;
      color: $secondary;
    }
  }
  img {
    margin-right: 12px;
  }
}

</style>
