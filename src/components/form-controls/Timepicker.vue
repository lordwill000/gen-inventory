<template>
  <div class="timepicker__wrapper">
    <Button
      class="drop-toggle"
      mode="input"
      label=""
      @clicked="isDropVisible = !isDropVisible"
    >
      {{ selectedHour }}:{{ selectedMinute }} {{ selectedMidday }}
      <img
        src="@/assets/images/ic_schedule.svg"
        alt="schedule_icon"
      >
    </Button>
    <div
      v-if="isDropVisible"
      v-on-clickaway="onClickAway"
      class="timepicker__dropdown"
    >
      <ul class="selected__wrapper">
        <li class="no-event">
          H
        </li>
        <li
          v-for="hour in hours"
          :key="hour.id"
          :class="selectedHour === hour.label && 'selected'"
          @click="selectedHour = hour.label"
        >
          {{ hour.label }}
        </li>
      </ul>
      <ul class="selected__wrapper">
        <li class="no-event">
          m
        </li>
        <li
          v-for="minute in minutes"
          :key="minute.id"
          :class="selectedMinute === minute.label && 'selected'"
          @click="selectedMinute = minute.label"
        >
          {{ minute.label }}
        </li>
      </ul>
      <ul class="selected__wrapper">
        <li class="no-event">
          a
        </li>
        <li
          v-for="m in midday"
          :key="m.id"
          :class="selectedMidday === m.label && 'selected'"
          @click="selectedMidday = m.label"
        >
          {{ m.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { hours, minutes, midday } from './time';
import Button from '@/components/Button.vue';

export default {
  name: 'Timepicker',
  components: {
    Button,
  },
  mixins: [clickaway],
  data: () => ({
    hours,
    minutes,
    midday,
    selectedHour: '01',
    selectedMinute: '00',
    selectedMidday: 'am',
    isDropVisible: false,
  }),
  methods: {
    onClickAway() {
      this.isDropVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.timepicker__wrapper {
  position: relative;
  .drop-toggle {
    min-width: 130px;
    font-family: 'RedHatReg';
    @include font-size(16);
    img {
      margin-left: 8px;
      margin-right: 0;
    }
  }
  .timepicker__dropdown {
    animation: fade-in-up 0.2s ease-in-out forwards;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.12);
    display: flex;
    max-height: 150px;
    opacity: 0;
    overflow: auto;
    position: absolute;
    top: 60px;
    width: 100%;
    .selected__wrapper {
      list-style-type: none;
      margin-bottom: 0;
      padding-left: 0;
      text-align: center;
      width: 33.33%;
      li {
        background-color: #fff;
        cursor: pointer;
        @include font-size(12);
        padding-bottom: 8px;
        padding-top: 8px;
        transition: background-color 0.2s ease;
        &:hover,
        &:first-child {
          background-color: $tertiary;
        }
        &.selected {
          background-color: $accent;
          color: #fff;
        }
      }
    }
  }
}


@keyframes fade-in-up {
  0% {
    opacity: 0;
    top: 60px;
  }
  100% {
    opacity: 1;
    top: 65px;
  }
}
</style>
