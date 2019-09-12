<template>
  <div>
    <Auth />
    <router-view />
  </div>
</template>

<script>
import { Auth } from '@/modules/auth';

export default {
  name: 'Home',
  components: {
    Auth,
  },
};
</script>
