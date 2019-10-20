<template>
  <div class="form__group contactnumber__wrapper">
    <label class="form__label">{{ label }}</label>
    <div class="d-flex">
      <input
        disabled
        class="form__control"
        value="+63"
        readonly
      >
      <input
        type="text"
        :placeholder="placeholder"
        class="form__control"
        @keypress="handleInput"
        @input="$emit('input', $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
import { helpers } from '@/mixins';

export default {
  name: 'Input',
  mixins: [helpers],
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
  methods: {
    handleInput($event) {
      const keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        $event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contactnumber__wrapper {
  input[disabled] {
    margin-right: 8px;
    width: 60px;
  }
}
</style>
