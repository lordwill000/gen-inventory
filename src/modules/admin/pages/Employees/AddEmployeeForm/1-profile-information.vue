<template>
  <div class="profile-information">
    <div class="form__grid">
      <InputField
        style="width: 240px; padding-right: 8px;"
        label="First Name"
        placeholder="John"
      />
      <InputField
        style="width: 200px; padding-right: 8px;"
        label="Last Name"
        placeholder="Smith"
      />
      <InputField
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
    <TextField
      placeholder="Input full address"
      label="Full Address"
    />
  </div>
</template>

<script>
import {
  InputField, RadioButton, Datepicker, ContactNumber, TextField,
} from '@/components/form-controls/';
import { gender } from './variables';

export default {
  name: 'ProfileInformation',
  components: {
    InputField,
    RadioButton,
    Datepicker,
    ContactNumber,
    TextField,
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
