<template>
  <div class="modal modal__container">
    <div
      v-on-clickaway="onModalClose"
      class="modal__content"
      :style="dimensions"
    >
      <div class="modal__content--heading">
        <h2>{{ header }}</h2>
        <img
          src="@/assets/images/ic_close.svg"
          alt="close_icon"
          @click="onModalClose"
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
  name: 'Modal',
  mixins: [clickaway],
  props: {
    header: {
      type: String,
      default: 'Header',
    },
    dimensions: {
      type: Object,
      default: () => ({
        maxHeight: '610px',
        width: '615px',
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
      initModal: appTypes.INIT_MODAL,
    }),
    onKeyDown(e) {
      if (e.keyCode === 27) {
        this.onModalClose();
      }
    },
    onModalClose() {
      this.initModal({
        isVisible: false,
        children: null,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  animation: fadeInUp 0.2s ease-in-out;
  &__container {
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
    .modal__content {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.12);
      margin: auto;
      overflow-y: auto;
      padding: 40px;
      position: relative;
      &--heading {
        display: flex;
        justify-content: space-between;
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
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    top: -15px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

</style>
