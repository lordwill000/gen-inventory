<template>
  <div class="table__controls-wrapper">
    <div
      v-if="controlsVisibility.controls"
      class="table__controls-col tabs-wrapper"
    >
      <TabsWrapper
        :tabs="tabs"
        @tabChanged="handleTabChanged"
      />
    </div>
    <SearchBar
      v-if="controlsVisibility.search"
      v-model="searchTerm"
      style="width: 600px;"
    />
    <div class="table__controls-col btns-wrapper">
      <div
        v-if="controlsVisibility.controls"
        class="main-controls"
      >
        <Button
          v-for="control in controls"
          :key="control.id"
          label=""
          class="w-auto d-inline"
          :mode="control.mode"
          @clicked="onControlClicked(control.event)"
        >
          <img
            v-if="control.img"
            :src="require(`@/assets/images/${control.img}`)"
            :alt="`${control.event}_icon`"
          >
          {{ control.label }}
        </Button>
      </div>
      <Button
        v-if="controlsVisibility.search"
        class="d-inline-block w-auto"
        style="min-width: 80px"
        :mode="'muted'"
        label="Cancel"
        @clicked="onControlClicked('close-search')"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import TabsWrapper from '@/components/Tabs/TabsWrapper.vue';
import Button from '@/components/Button.vue';
import AddEmployeeForm from './AddEmployeeForm/AddEmployeeForm.vue';
import SearchBar from '@/components/SearchBar.vue';

const {
  mapActions: mapAppActions,
} = createNamespacedHelpers('app');

export default {
  name: 'TableControls',
  components: {
    Button,
    TabsWrapper,
    SearchBar,
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
  data: () => ({
    controlsVisibility: {
      controls: true,
      search: false,
    },
    searchTerm: '',
  }),
  watch: {
    searchTerm(term) {
      this.$emit('onSearchTermInput', term);
    },
  },
  methods: {
    ...mapAppActions({
      initModal: appTypes.INIT_MODAL,
    }),
    handleTabChanged(tab) {
      this.$emit('onTabChanged', tab);
    },
    onControlClicked(control) {
      switch (control) {
        case 'add_employee':
          this.initModal({
            isVisible: true,
            header: 'Add Employee',
            children: AddEmployeeForm,
          });
          break;
        case 'search':
          this.controlsVisibility = {
            ...this.controlsVisibility,
            search: true,
            controls: false,
          };
          break;
        case 'close-search':
          this.controlsVisibility = {
            ...this.controlsVisibility,
            search: false,
            controls: true,
          };
          break;
        default:
          console.log(control);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.table__controls {
  &-wrapper {
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
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
      .main-controls {
        display: flex;
      }
    }
  }
}
</style>
