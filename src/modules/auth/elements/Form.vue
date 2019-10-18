<template>
  <div class="form__wrapper">
    <h3 class="form__title">
      {{ formTitle }}
    </h3>
    <p class="form__subtitle">
      {{ formSubtitle }}
    </p>
    <form @submit.prevent="$emit('submitted')">
      <Input
        v-model="formData.username"
        label="Username"
        type="text"
        placeholder="Type your username"
      />
      <Input
        v-model="formData.password"
        label="Password"
        type="password"
        :placeholder="passwordPlaceholder"
      />
      <div
        class="row align-items-center"
        style="margin-bottom: 88px;"
      >
        <div class="col-6">
          <Checkbox label="Remember Me" />
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
import { Input, Checkbox } from '@/components/form-controls';
import Button from '@/components/Button.vue';

export default {
  name: 'Form',
  components: {
    Button,
    Input,
    Checkbox,
  },
  data: () => ({
    formTitle: 'Sign in',
    formSubtitle: 'Use your Merch District Account',
    passwordPlaceholder: '•'.repeat(Math.floor(Math.random() * 14) + 8),
    formData: {
      username: '',
      password: '',
    },
  }),
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
