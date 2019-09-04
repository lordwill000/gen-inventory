<template>
  <div class="sidebar">
    <router-link to="/admin">
      <img :src="mdLogo" alt="md_logo">
    </router-link>
    <ul>
      <li v-for="route in routes[0].children" :key="route.name">
        <router-link :to="route">
          {{replaceString(route.name, '-', ' ')}}
          <img :src="indicator"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import adminRoutes from '../routes';
import mix from '@/mixins/mixins.vue';

export default {
  name: 'Sidebar',
  mixins: [mix],
  data: () => ({
    mdLogo: require('@/assets/images/md-logo-light.svg'),
    indicator: require('@/assets/images/indicator.svg'),
    routes: adminRoutes,
  }),
  mounted() {
    console.log(adminRoutes[0].children);
    // console.log(mix.methods.capitalize('tete'));
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: $primary;
  border-left: 10px solid $accent;
  left: 0;
  min-height: 100vh;
  padding: 60px 0;
  position: fixed;
  top: 0;
  width: 260px;
  img {
    display: block;
    margin: 0 auto;
  }
  ul {
    list-style-type: none;
    margin-bottom: 0;
    margin-top: 120px;
    padding-left: 0;
    li {
      padding-left: 50px;
      padding-right: 50px;
      position: relative;
      img {
        display: block;
        height: 60px;
        left: -15px;
        position: absolute;
        top: -18px;
        transition: all 0.2s ease-in-out;
        width: 15px;
      }
      a {
        color: $gray1;
        display: block;
        font-family: 'RedHatMed';
        @include font-size(18);
        text-transform: capitalize;
        transition: all 0.2s ease;
        &.router-link-active,
        &:hover {
          color: #fff;
          font-family: 'RedHatBold';
          text-decoration: none;
          img {
            left: 0;
          }
        }
      }
      &:not(:last-of-type) {
        padding-bottom: 40px;
      }
    }
  }
}
</style>
