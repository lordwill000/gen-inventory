<template>
  <div
    ref="formWrapper"
    class="form__wrapper"
  >
    <p class="form__subheading">
      Fill-up the form below ({{ currentStep }} of 3)
    </p>
    <div class="form-step__wrapper">
      <h6>{{ currentFormTitle }}</h6>
      <ProfileInformation v-if="currentStep === 1" />
      <EmergencyContact v-if="currentStep === 2" />
      <WorkSchedule v-if="currentStep === 3" />
    </div>
    <div class="form-step__control">
      <Button
        class="d-inline-block w-auto"
        style="min-width: 90px"
        :mode="currentStep > 1 ? 'transparent' : 'muted'"
        :style="currentStep > 1 && 'border-color: #E8E8E8; color: #646464'"
        label=""
        @clicked="onControlClick(currentStep > 1 ? 'minus' : 'close')"
      >
        <img
          v-if="currentStep > 1"
          style="margin-right: 15px;"
          src="@/assets/images/ic_chevron_left.svg"
          alt="chevron_icon"
        >
        {{ currentStep > 1 ? 'Back' : 'Cancel' }}
      </Button>
      <div class="controls--right">
        <Button
          v-if="currentStep === 2"
          class="d-inline-block w-auto"
          mode="transparent"
          style="margin-right: 8px; min-width: 90px; color: #898989"
          label="Skip"
          @clicked="onControlClick('skip')"
        />
        <Button
          class="d-inline-block w-auto"
          style="min-width: 90px"
          :mode="currentStep === 3 ? 'background' : 'outline'"
          label=""
          @clicked="onControlClick(currentStep === 3 ? 'save' : 'next')"
        >
          {{ currentStep === 3 ? 'Save' : 'Next' }}
          <svg
            v-if="currentStep < 3"
            style="margin-left: 15px; margin-right: 0;"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import ProfileInformation from './1-profile-information.vue';
import EmergencyContact from './2-emergency-contact.vue';
import WorkSchedule from './3-work-schedule.vue';
import Success from './Success.vue';
import Button from '@/components/Button.vue';


const { mapActions: mapAppActions } = createNamespacedHelpers('app');

export default {
  name: 'AddEmployeeForm',
  components: {
    ProfileInformation,
    EmergencyContact,
    WorkSchedule,
    Button,
  },
  data: () => ({
    currentStep: 1,
    currentFormTitle: 'Profile Information',
  }),
  watch: {
    currentStep(step) {
      this.$emit('contentChanged');
      switch (step) {
        case 1:
          this.currentFormTitle = 'Profile Information';
          break;
        case 2:
          this.currentFormTitle = 'Emergency Contact';
          break;
        default:
          this.currentFormTitle = 'Work Schedule';
      }
    },
  },
  methods: {
    ...mapAppActions({
      initAlert: appTypes.INIT_ALERT,
    }),
    onControlClick(type) {
      switch (type) {
        case 'minus':
          this.currentStep = this.currentStep - 1;
          break;
        case 'skip':
          this.currentStep = this.currentStep + 1;
          break;
        case 'next':
          this.currentStep = this.currentStep + 1;
          break;
        case 'close':
          this.$emit('closed');
          break;
        case 'reset':
          this.currentStep = 1;
          break;
        default:
          this.$emit('closed');
          this.initAlert({
            isVisible: true,
            children: Success,
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form__wrapper {
  .form__subheading {
    color: $secondary;
  }
  .form-step__wrapper {
    margin-top: 48px;
    & > h6 {
      color: $accent;
      letter-spacing: 1px;
      margin-bottom: 32px;
      text-transform: uppercase;
    }
  }
  .form-step__control {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }
  .form-success__control {
    margin-top: 32px;
  }
}
</style>
