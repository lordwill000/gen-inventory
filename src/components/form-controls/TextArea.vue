<template>
  <div class="form__group textarea">
    <label class="form__label">{{ label }}</label>
    <textarea
      :placeholder="placeholder"
      class="form__control textarea"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
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
}
</style>
