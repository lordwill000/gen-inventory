<template>
  <div id="Admin">
    <Header />
    <aside>
      <Sidebar :routes="routes" />
    </aside>
    <main>
      <router-view />
    </main>
    <Modal v-if="modal.isVisible">
      <!-- {{ modal.children }} -->
      <component
        :is="component"
      />
    </Modal>
  </div>
</template>


<script>
import { createNamespacedHelpers } from 'vuex';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Modal from '@/components/Modal.vue';
import adminRoutes from './routes';

const {
  mapGetters: mapAppGetters,
} = createNamespacedHelpers('app');

export default {
  name: 'Admin',
  components: {
    Header,
    Sidebar,
    Modal,
  },
  data() {
    return {
      routes: adminRoutes,
      component: null,
    };
  },
  computed: {
    ...mapAppGetters({
      modal: 'getModal',
    }),
  },
  watch: {
    modal(modal) {
      this.component = modal.children;
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
