<template>
  <div class="form__group textField">
    <label
      class="form__label"
    >
      {{ label }}
      <slot />
    </label>
    <textarea
      :placeholder="placeholder"
      class="form__control textarea"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'TextField',
  components: {
  },
  props: {
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
.textarea {
  height: 95px;
  resize: none;
  .form__label {
    display: flex;
    justify-content: space-between;
  }
}
</style>
