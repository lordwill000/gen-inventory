<template>
  <div class="emergency-contact">
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
    <InputField
      style="width: 260px;"
      label="Relationship to this contact person"
      placeholder="Spouse"
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
    >
      <p
        class="text-right t-3 c-accent mb-0"
        style="cursor: pointer;"
        @click="onSameAddressClick"
      >
        Same address?
      </p>
    </TextField>
  </div>
</template>

<script>
import {
  InputField, ContactNumber, TextField,
} from '@/components/form-controls/';

export default {
  name: 'EmergencyContact',
  components: {
    InputField,
    ContactNumber,
    TextField,
  },
  methods: {
    onSameAddressClick() {
      console.log('same address');
    },
  },
};
</script>

<style lang="scss" scoped>
.form__grid {
  display: flex;
}
</style>
