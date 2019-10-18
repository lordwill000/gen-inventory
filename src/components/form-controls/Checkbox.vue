<template>
  <div
    class="checkbox__wrapper"
    :class="isChecked && 'checked'"
    @click="isChecked = !isChecked"
  >
    <div class="checkbox">
      <div class="indicator">
        <img
          src="@/assets/images/ic_check.svg"
          alt="check"
        >
      </div>
    </div>
    <span class="t-2">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isChecked: false,
  }),
};
</script>

<style lang="scss" scoped>
.checkbox__wrapper {
  align-items: center;
  cursor: pointer;
  display: flex;
  .checkbox {
    border: 1px solid #898989;
    border-radius: 3px;
    height: 15px;
    margin-right: 10px;
    position: relative;
    width: 15px;
    .indicator {
      align-items: center;
      background-color: $accent;
      border-radius: 3px;
      bottom: 0;
      display: flex;
      left: 0;
      height: 100%;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      transform: scale(0);
      transition: transform 0.2s ease;
      width: 100%;
      img {
        width: 12px;
      }
    }
  }
  &.checked {
    .indicator {
      transform: scale(0.8);
    }
  }
}
</style>
