<template>
  <div class="form__wrapper">
    <h3 class="form__title">
      {{ formTitle }}
    </h3>
    <p class="form__subtitle">
      {{ formSubtitle }}
    </p>
    <form @submit.prevent="$emit('submitted')">
      <div class="form__group">
        <label class="form__label">Username</label>
        <input
          type="text"
          placeholder="Type your username"
          class="form__control"
        >
      </div>
      <div class="form__group">
        <label class="form__label">Password</label>
        <input
          type="password"
          :placeholder="passwordPlaceholder"
          class="form__control"
        >
      </div>
      <div class="form__flex">
        <div class="form__group">
          <label class="chbx-label">
            <input
              type="checkbox"
              name="rememberMe"
            >
            Remember Me
          </label>
        </div>
        <div class="form__group">
          <a href="#">Forgot password?</a>
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
import Button from '@/components/Button.vue';

export default {
  name: 'Form',
  components: {
    Button,
  },
  data: () => ({
    formTitle: 'Sign in',
    formSubtitle: 'Use your Merch District Account',
    passwordPlaceholder: '•'.repeat(Math.floor(Math.random() * 14) + 8),
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
  form {
    margin-top: 40px;
    .form__group {
      margin-bottom: 20px;
      label {
        &:not(.chbx-label) {
          display: block;
        }
      }
      input {
        &:not([type="checkbox"]) {
          background-color: $tertiary;
          color: #9D9D9D;
          display: block;
          border: none;
          outline-color: $accent;
          padding: 15px 20px;
          width: 100%;
        }
      }
    }
    .form__flex {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 60px;
      .form__group {
        width: 50%;
        @media(max-width: 767px) {
          width: 100%;
        }
        &:last-of-type {
          text-align: right;
          @media(max-width: 767px) {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
