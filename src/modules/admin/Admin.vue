<template>
  <div id="Admin">
    <Header />
    <aside>
      <Sidebar :routes="routes" />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import adminRoutes from './routes';

export default {
  name: 'Admin',
  components: {
    Header,
    Sidebar,
  },
  data: () => ({
    routes: adminRoutes,
  }),
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
