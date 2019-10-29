<template>
  <div>
    <p>overview</p>
    <ul v-if="users.length">
      <li
        v-for="(user, i) of users"
        :key="i"
      >
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/helpers/base';

export default {
  name: 'Overview',
  data: () => ({
    users: [],
  }),
  mounted() {
    api.get('/users').then(({ data }) => {
      this.users.push(...data.data);
    });
  },
};
</script>

<style>
</style>
