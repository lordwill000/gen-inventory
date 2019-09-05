<template>
  <header>
    <h1>{{ heading }}</h1>
    <div class="user">
      <div
        v-on-clickaway="onClickAway"
        class="user__wrapper"
        :class="{'is-dropped': isDropped}"
        @click="isDropped = !isDropped"
      >
        <img
          class="user__avatar"
          src="~@/assets/images/avatar-1.png"
          alt="avatar"
        >
        <div class="user__info">
          <h3>
            {{ user.name }}
            <img
              class="ic_dropdown"
              src="~@/assets/images/ic_dropdown.svg"
              alt="dropdown_icon"
            >
          </h3>
          <p>{{ user.role }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { helpers } from '@/mixins';

export default {
  name: 'Header',
  mixins: [helpers, clickaway],
  data: () => ({
    heading: '',
    user: {
      name: 'Carl Angelo Agliam',
      role: 'Administrator',
    },
    isDropped: false,
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
    onClickAway() {
      this.isDropped = false;
    },
    onRouteChange() {
      this.heading = this.$route.name === 'overview' ? 'Welcome to Merch District' : this.toTitleCase(this.replaceString(this.$route.name, '-', ' '));
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  margin-left: 260px;
  padding: 85px 60px 0;
  h1 {
    font-family: 'RedHatBold';
    @include font-size(30);
    margin-bottom: 0;
    width: 50%;
  }
  .user {
    display: flex;
    width: 50%;
    .user__wrapper {
      cursor: pointer;
      display: flex;
      margin-left: auto;
      position: relative;
      &:before {
        background-color:$tertiary;
        border-radius: 10px;
        content: '';
        left: 0;
        height: 100%;
        position: absolute;
        top: 0;
        transition: transform 0.25s ease-in-out;
        transform: scale(0);
        width: 100%;
        z-index: -1;
      }
      &:hover,
      &.is-dropped {
        &:before {
          transform: scale(1.07, 1.3);
        }
      }
      &.is-dropped {
        .ic_dropdown {
          transform: rotate(180deg);
        }
      }
    }
    .user__avatar {
      border-radius: 50%;
      display: block;
      height: 50px;
      margin-right: 20px;
      width: 50px;
    }
    .user__info {
      margin-right: 10px;
      h3 {
        font-family: 'RedHatMed';
        @include font-size(18);
        margin-bottom: 5px;
      }
      p {
        color: $secondary;
        @include font-size(12);
        margin-bottom: 0;
      }
    }
    .ic_dropdown {
      margin-left: 10px;
    }
  }
}

</style>
