<template>
  <div class="alert__container">
    <div
      v-on-clickaway="onAlertClose"
      class="alert__content"
      :style="dimensions"
    >
      <div class="alert__content--heading">
        <img
          src="@/assets/images/ic_close.svg"
          alt="close_icon"
          @click="onAlertClose"
        >
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { mixin as clickaway } from 'vue-clickaway';
import { types as appTypes } from '@/store/modules/app/actions';

const {
  mapActions: mapAppActions,
} = createNamespacedHelpers('app');

export default {
  name: 'Alert',
  mixins: [clickaway],
  props: {
    dimensions: {
      type: Object,
      default: () => ({
        maxHeight: '540px',
        width: '616px',
      }),
    },
  },
  mounted() {
    document.addEventListener('keydown', this.onKeyDown);
  },
  destroyed() {
    document.removeEventListener('keydown', this.onKeyDown);
  },
  methods: {
    ...mapAppActions({
      initAlert: appTypes.INIT_ALERT,
    }),
    onKeyDown(e) {
      if (e.keyCode === 27) {
        this.onAlertClose();
      }
    },
    onAlertClose() {
      this.initAlert({
        isVisible: false,
        children: null,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.alert__container {
  align-items: center;
  background-color: rgba(0,0,0,.4);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow-x: hidden;
  padding: 0.625em;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  .alert__content {
    animation: scaleBounce 0.4s ease;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.12);
    margin: auto;
    overflow-y: auto;
    padding: 40px;
    position: relative;
    &--heading {
      text-align: right;
      img {
        cursor: pointer;
        opacity: .8;
        transition: opacity 0.2s ease;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

@keyframes scaleBounce {
  0% {
    transform: scale(.7);
  }
  45% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(.95);
  }
  100% {
    transform: scale(1);
  }
}

</style>
