<template>
  <div class="table__controls-wrapper">
    <div class="table__controls-col tabs-wrapper">
      <TabsWrapper :tabs="tabs" />
    </div>
    <div class="table__controls-col btns-wrapper">
      <Button
        v-for="control in controls"
        :key="control.id"
        label=""
        class="w-auto d-inline"
        :mode="control.mode"
        @clicked="onTableControlClick(control.event)"
      >
        <img
          v-if="control.img"
          :src="require(`@/assets/images/${control.img}`)"
          :alt="`${control.event}_icon`"
        >
        {{ control.label }}
      </Button>
    </div>
  </div>
</template>

<script>
import TabsWrapper from './TabsWrapper/TabsWrapper.vue';
import Button from './Button.vue';

export default {
  name: 'TableControls',
  components: {
    Button,
    TabsWrapper,
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    controls: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
  },
  methods: {
    onTableControlClick: (event) => {
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
.table__controls {
  &-wrapper {
    display: flex;
  }
  &-col {
    &.tabs-wrapper {
      width: 55%;
    }
    &.btns-wrapper {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      width: 45%;
      button {
        &:not(:last-of-type) {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
