<template>
  <div class="auth" :style="{backgroundImage: `url(${authBg})`}">
    <div class="auth__content">
      <img :src="mdLogo" alt="">
      <Form @submitted="onAuthSubmit" />
      <p class="text-center auth__footer">{{poweredBy}}</p>
    </div>
  </div>
</template>

<script>
import Form from './elements/Form.vue';

export default {
  name: 'Auth',
  components: {
    Form,
  },
  data: () => ({
    mdLogo: require('@/assets/images/md-logo.svg'),
    authBg: require('@/assets/images/auth-bg.jpg'),
    poweredBy: 'Powered by The6thProject',
  }),
  methods: {
    onAuthSubmit() {
      console.log('Form submitted');
      this.$router.push({ name: 'admin' });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100%;
  padding: 20px 15px;
  &__content {
    background-color: transparent;
    margin: auto;
    max-width: 500px;
    img {
      display: block;
      margin: 0 auto 50px;
    }
  }
  &__footer {
    color: #fff;
    margin-bottom: 0;
  }
}
</style>
