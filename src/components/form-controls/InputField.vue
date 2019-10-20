<template>
  <div class="form__group">
    <label class="form__label">{{ label }}</label>
    <slot />
    <input
      :type="type"
      :placeholder="placeholder"
      class="form__control"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'InputField',
  components: {
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
