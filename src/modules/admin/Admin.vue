<template>
  <div id="Admin">
    <aside>
      <Sidebar/>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>


<script>
import Sidebar from './elements/Sidebar.vue';

export default {
  name: 'Admin',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>

main {
  margin-left: 260px;
}

</style>
