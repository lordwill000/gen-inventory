<template>
  <div id="Admin">
    <Header />
    <aside>
      <Sidebar :routes="routes" />
    </aside>
    <main>
      <router-view />
    </main>
    <Modal
      v-if="modal.isVisible"
      ref="modal"
      :header="modal.header"
      :dimensions="modal.dimensions"
    >
      <component
        :is="modal.children"
        @contentChanged="onContentChanged"
        @closed="initModal({
          isVisible: false,
          children: null
        })"
      />
    </Modal>
    <Alert
      v-if="alert.isVisible"
      :dimensions="alert.dimensions"
    >
      <component
        :is="alert.children"
        @closed="initAlert({
          isVisible: false,
          children: null
        })"
      />
    </Alert>
  </div>
</template>


<script>
import { createNamespacedHelpers } from 'vuex';
import { types as appTypes } from '@/store/modules/app/actions';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Modal from '@/components/Modal.vue';
import Alert from '@/components/Alert.vue';
import adminRoutes from './routes';

const {
  mapGetters: mapAppGetters,
  mapActions: mapAppActions,
} = createNamespacedHelpers('app');

export default {
  name: 'Admin',
  components: {
    Header,
    Sidebar,
    Modal,
    Alert,
  },
  data() {
    return {
      routes: adminRoutes,
      component: null,
    };
  },
  computed: {
    ...mapAppGetters({
      modal: 'modal',
      alert: 'alert',
    }),
  },
  methods: {
    ...mapAppActions({
      initModal: appTypes.INIT_MODAL,
      initAlert: appTypes.INIT_ALERT,
    }),
    onContentChanged() {
      this.$refs.modal.$el.children[0].scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>

main {
  margin-left: 240px;
  margin-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
}

</style>
