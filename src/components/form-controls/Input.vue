<template>
  <div class="form__group">
    <label class="form__label">{{ label }}</label>
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
  name: 'Input',
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
.form {
  &__label {
    display: block;
  }
  &__group {
    margin-bottom: 20px;
  }
  &__control {
    background-color: $tertiary;
    padding: 8px 16px;
    background-color: $tertiary;
    border: none;
    border-radius: 8px;
    color: #9D9D9D;
    display: block;
    outline-color: $accent;
    width: 100%;
  }
}


</style>
