<template>
  <div class="work-schedule">
    <div class="d-flex flex-wrap">
      <Dropdown
        class="w-100-md"
        style="width: 260px; padding-right: 16px;"
        label="Position"
        placeholder="Select position"
      />
      <Dropdown
        class="w-100-md"
        style="width: 260px;"
        label="Branch Assigned"
        placeholder="Select branch"
      />
    </div>
    <div class="d-flex flex-wrap">
      <Datepicker
        class="w-100-md"
        style="width: 260px; padding-right: 16px;"
        label="Birthdate"
        placeholder="Select birthdate"
        @date-selected="onDateSelected"
      />
      <Dropdown
        class="w-100-md"
        style="width: 260px;"
        label="Employee Status"
        placeholder="Select status"
      />
      <Schedule />
    </div>
  </div>
</template>

<script>
import { Dropdown, Datepicker } from '@/components/form-controls';
import Schedule from './Schedule';

export default {
  name: 'WorkSchedule',
  components: {
    Dropdown,
    Datepicker,
    Schedule,
  },
  methods: {
    onDateSelected(date) {
      console.log(date);
    },
  },
};
</script>

<style>

</style>
