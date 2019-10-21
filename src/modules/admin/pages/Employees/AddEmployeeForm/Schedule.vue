<template>
  <div class="scheduler">
    <label class="form__label">Schedule Shift</label>
    <div class="d-flex">
      <span
        v-for="shift in shifts"
        :key="shift.id"
        class="shift"
        tabIndex="1"
        :class="selectedShifts.includes(shift) && 'selected'"
        @click="onShiftClick(shift)"
      >{{ shift.label }}</span>
    </div>
    <div class="d-flex mt-16">
      <Button
        :mode="mode"
        class="w-auto"
        label="Flexible Time"
        @clicked="onFlexToggle"
      />
      <div class="timesetter__wrapper">
        <Timepicker />
        <span>&ndash;</span>
        <Timepicker />
      </div>
    </div>
  </div>
</template>

<script>
import { shifts } from './variables';
import { Timepicker } from '@/components/form-controls';
import Button from '@/components/Button.vue';

export default {
  name: 'Schedule',
  components: {
    Button,
    Timepicker,
  },
  data: () => ({
    shifts,
    selectedShifts: [],
    mode: 'input',
  }),
  methods: {
    onShiftClick(selectedShift) {
      const isExisting = this.selectedShifts.includes(selectedShift);
      this.selectedShifts = isExisting
        ? this.selectedShifts.filter(shift => shift !== selectedShift)
        : [...this.selectedShifts, selectedShift];
    },
    onFlexToggle() {
      this.mode = this.mode === 'input' ? 'background' : 'input';
    },
  },
};
</script>

<style lang="scss" scoped>
.scheduler {
  width: 100%;
  .shift {
    background-color: $tertiary;
    border-radius: 8px;
    cursor: pointer;
    color: #898989;
    @include font-size(12);
    outline-color: $accent;
    padding: 12px 16px;
    transition: background-color 0.2s ease;
    &:not(:last-of-type) {
      margin-right: 8px;
    }
    &.selected {
      background-color: $accent;
      color: #fff;
    }
  }
  .timesetter__wrapper {
    align-items: center;
    display: flex;
    margin-left: 16px;
    & > * {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
}
</style>
