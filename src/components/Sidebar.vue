<template>
  <div class="sidebar">
    <router-link to="/admin">
      <img
        :src="mdLogo"
        alt="md_logo"
      >
    </router-link>
    <div class="menu__wrapper">
      <ul>
        <li
          v-for="route in routes[0].children"
          ref="links"
          :key="route.name"
        >
          <router-link
            :to="route"
          >
            {{ replaceString(route.name, '-', ' ') }}
          </router-link>
        </li>
      </ul>
      <img
        ref="indicator"
        class="indicator"
        src="~@/assets/images/indicator.svg"
      >
    </div>
  </div>
</template>

<script>
import adminRoutes from '@/modules/admin/routes';
import { helpers } from '@/mixins';

export default {
  name: 'Sidebar',
  mixins: [helpers],
  data: () => ({
    mdLogo: require('@/assets/images/md-logo-light.svg'),
    routes: adminRoutes,
  }),
  watch: {
    $route() {
      this.onRouteChange();
    },
  },
  mounted() {
    this.onRouteChange();
  },
  methods: {
    onRouteChange() {
      this.$nextTick(() => {
        const { links, indicator } = this.$refs;
        const activeLink = links.filter(link => link.children[0].classList.contains('router-link-active'));

        indicator.style.top = `${activeLink[0].offsetTop - 15}px`;
      });
    },
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
  img:not(.indicator) {
    display: block;
    margin: 0 auto;
  }
  .menu__wrapper {
    position: relative;
    ul {
      list-style-type: none;
      margin-bottom: 0;
      margin-top: 120px;
      padding-left: 0;
      li {
        padding-left: 50px;
        padding-right: 50px;
        position: relative;
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
          }
        }
        &:not(:last-of-type) {
          padding-bottom: 40px;
        }
      }
    }
    .indicator {
      position: absolute;
      transition: all 0.2s ease-in-out;
    }
  }
}
</style>
