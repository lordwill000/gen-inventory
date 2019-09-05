<template>
  <div id="Admin">
    <Header />
    <aside>
      <Sidebar />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script>
import Header from './elements/Header.vue';
import Sidebar from './elements/Sidebar.vue';

export default {
  name: 'Admin',
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>

main {
  margin-left: 260px;
  margin-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
}

</style>
