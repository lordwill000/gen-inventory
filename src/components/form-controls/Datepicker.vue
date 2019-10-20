<template>
  <div
    class="form__group datepicker__wrapper"
  >
    <label class="form__label">{{ label }}</label>
    <div class="datepicker__wrapper">
      <v-date-picker
        v-model="date"
        :popover="{ placement: 'bottom', visibility: 'click' }"
      >
        <input
          :readonly="readonly"
          type="text"
          :placeholder="placeholder"
          class="form__control"
          :value="value"
        >
      </v-date-picker>
      <img
        src="@/assets/images/ic_event.svg"
        alt="event_icon"
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'InputField',
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
  data: () => ({
    readonly: true,
    date: null,
    value: '',
  }),
  watch: {
    date(date) {
      this.value = moment(date).format('MMM-DD-YYYY');
      this.$emit('date-selected', moment(date));
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.datepicker__wrapper {
  position: relative;
  input {
    cursor: pointer;
    padding-right: 40px;
  }
  .calendar {
    position: absolute;
    top: 80px;
  }
  .datepicker__wrapper {
    position: relative;
    img {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
