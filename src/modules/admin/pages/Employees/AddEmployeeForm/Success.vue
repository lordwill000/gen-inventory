<template>
  <div class="success__wrapper">
    <img
      src="@/assets/images/success.svg"
      alt="success_vector"
      class="vector"
    >
    <h2>Employee Successfully Added!</h2>
    <p>Thanks for filling up the form</p>
    <div class="form-success__control">
      <Button
        label=""
        mode="transparent"
        style="border-color: #E8E8E8; color: #646464; margin-right: 24px; width: 80px;"
        @clicked="onControlClick('close')"
      >
        Close
      </Button>
      <Button
        class="w-auto"
        label=""
        @clicked="onControlClick('reset')"
      >
        <img
          src="@/assets/images/ic_add.svg"
          alt="add_icon"
        >
        Add Another Employee
      </Button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import AddEmployeeForm from './AddEmployeeForm.vue';
import Button from '@/components/Button.vue';

const { mapActions: mapAppActions } = createNamespacedHelpers('app');

export default {
  name: 'Success',
  components: {
    Button,
  },
  methods: {
    ...mapAppActions({
      initModal: appTypes.INIT_MODAL,
    }),
    onControlClick(option) {
      switch (option) {
        case 'close':
          this.$emit('closed');
          break;
        default:
          this.$emit('closed');
          this.initModal({
            isVisible: true,
            children: AddEmployeeForm,
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.success__wrapper {
  text-align: center;
  .vector {
    display: block;
    margin: 0 auto 40px;
    max-width: 100%;
  }
  .form-success__control {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
}
</style>
