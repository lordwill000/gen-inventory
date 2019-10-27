<template>
  <div class="form__wrapper">
    <h3 class="form__title">
      {{ formTitle }}
    </h3>
    <p class="form__subtitle">
      {{ formSubtitle }}
    </p>
    <div v-if="errors.length">
      {{ errors }}
    </div>
    <form @submit.prevent="submit ">
      <InputField
        v-model.trim="$v.formData.username.$model"
        label="Username"
        type="text"
        placeholder="Type your username or email"
      >
        <div v-if="$v.formData.username.$error">
          <div class="form__error" v-if="!$v.formData.username.required">Field is required</div>
        </div>
      </InputField>
      <InputField
        v-model.trim="$v.formData.password.$model"
        label="Password"
        type="password"
        :placeholder="passwordPlaceholder"
      >
        <div v-if="$v.formData.password.$error">
          <div class="form__error" v-if="!$v.formData.password.required">Field is required</div>
        </div>
      </InputField>
      <div
        class="row align-items-center"
        style="margin-bottom: 88px;"
      >
        <div class="col-6">
          <Checkbox label="Remember Me" v-model="formData.remember"/>
        </div>
        <div class="col-6 text-right">
          <a
            href="#"
            class="t-2"
          >Forgot password?</a>
        </div>
      </div>
      <Button
        label="Sign in"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { InputField, Checkbox } from '@/components/form-controls';
import Button from '@/components/Button.vue';

export default {
  name: 'Form',
  components: {
    Button,
    InputField,
    Checkbox,
  },
  validations: {
    formData: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  data: () => ({
    formTitle: 'Sign in',
    formSubtitle: 'Use your Merch District Account',
    passwordPlaceholder: '•'.repeat(Math.floor(Math.random() * 14) + 8),
    formData: {
      username: '',
      password: '',
      remember: false,
    },
  }),
  computed: {
    errors() {
      return this.$store.state.auth.errors;
    },
  },
  methods: {
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await this.$store.dispatch('auth/AUTH_SET', this.formData);
        if (this.errors.length === 0) {
          this.$emit('submitted');
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form__wrapper {
  background-color: #fff;
  box-shadow: 0px 14px 30px 0px rgba(0,0,0,0.14);
  margin-bottom: 50px;
  padding: 80px;
  h3 {
    font-family: 'RedHatBold';
    @include font-size(24);
    margin-bottom: 10px;
  }
  .form__subtitle {
    color: $secondary;
  }
  form {
    margin-top: 40px;
  }
}
</style>
