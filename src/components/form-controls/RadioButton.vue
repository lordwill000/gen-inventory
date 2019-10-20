<template>
  <div class="radiobtn__wrapper">
    <label class="form__label">{{ title }}</label>
    <div :class="`choices__wrapper choices__wrapper--${mode}`">
      <div
        v-for="choice in choices"
        :key="choice.id"
        class="choice"
        :class="chosen === choice && 'chosen'"
        @click="handleRadioButtonClick(choice)"
      >
        <div class="radiobtn">
          <div class="indicator" />
        </div>
        <span>{{ choice.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    choices: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: 'inline',
    },
  },
  data: () => ({
    chosen: null,
  }),
  methods: {
    handleRadioButtonClick(chosen) {
      this.chosen = chosen;
      this.$emit('onChoose', chosen);
    },
  },
};
</script>

<style lang="scss" scoped>
.choices__wrapper {
  display: block;
  &--inline {
    display: flex;
    .choice {
        padding-left: 15px;
      &:not(:last-of-type) {
        padding-right: 15px;
      }
    }
  }
  .choice {
    align-items: center;
    cursor: pointer;
    display: flex;
    .radiobtn {
      border: 1px solid #898989;
      border-radius: 50%;
      height: 15px;
      margin-right: 10px;
      position: relative;
      width: 15px;
      .indicator {
        background-color: $accent;
        border-radius: 50%;
        height: 100%;
        position: absolute;
        transform: scale(0);
        transition: transform 0.2s ease;
        width: 100%;
      }
    }
    &.chosen {
      .indicator {
        transform: scale(0.8);
      }
    }
  }
}
</style>
