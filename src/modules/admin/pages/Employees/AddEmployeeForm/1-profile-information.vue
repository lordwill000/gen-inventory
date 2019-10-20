<template>
  <div class="profile-information">
    <div class="form__grid">
      <Input
        style="width: 240px; padding-right: 8px;"
        label="First Name"
        placeholder="John"
      />
      <Input
        style="width: 200px; padding-right: 8px;"
        label="Last Name"
        placeholder="Smith"
      />
      <Input
        style="width: 80px;"
        label="MI"
        placeholder="A"
      />
    </div>
    <RadioButton
      style="margin-bottom: 24px"
      :choices="gender"
      title="Gender"
      @onChoose="onGenderChoose"
    />
    <Datepicker
      class="w-100-md"
      style="width: 260px;"
      label="Birthdate"
      placeholder="Select birthdate"
      @date-selected="onDateSelected"
    />
    <ContactNumber
      class="w-100-md"
      style="width: 260px;"
      label="Contact Number"
      placeholder="9123456789"
    />
    <TextArea
      placeholder="Input full address"
      label="Full Address"
    />
  </div>
</template>

<script>
import {
  Input, RadioButton, Datepicker, ContactNumber, TextArea,
} from '@/components/form-controls/';
import { gender } from './variables';

export default {
  name: 'ProfileInformation',
  components: {
    Input,
    RadioButton,
    Datepicker,
    ContactNumber,
    TextArea,
  },
  data: () => ({
    gender,
  }),
  methods: {
    onGenderChoose(chosen) {
      console.log(chosen);
    },
    onDateSelected(date) {
      console.log(date);
    },
  },
};
</script>

<style lang="scss" scoped>
.form__grid {
  display: flex;
}
</style>
