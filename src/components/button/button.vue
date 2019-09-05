<template>
  <button :type="type">
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
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: $accent;
  border: none;
  border-radius: 5px;
  display: block;
  color: #fff;
  font-family: 'RedHatMed';
  outline: none;
  padding: 15px;
  text-align: center;
  transition: background-color 0.2s ease;
  width: 100%;
  &:hover {
    background-color: $accentEvent;
  }
}

</style>
