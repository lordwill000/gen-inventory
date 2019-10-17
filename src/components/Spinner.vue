<template>
  <div
    class="spinner"
    :class="center && 'center'"
    :style="{...customStyle, fontSize: `${size}px`}"
  >
    Loading...
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 5,
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner,
.spinner:after {
  border-radius: 50%;
  height: 10em;
  width: 10em;
}
.spinner {
  animation: load8 1.1s infinite linear;
  position: relative;
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
  border-left: 1.1em solid $accent;
  border-right: 1.1em solid rgba(0, 0, 0, 0.2);
  border-top: 1.1em solid rgba(0, 0, 0, 0.2);
  text-indent: -9999em;
  transform: translateZ(0);
  &.center {
    margin: auto;
  }
}
@-webkit-keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
