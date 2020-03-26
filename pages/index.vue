<template>
  <NewsList />
</template>

<script>
import NewsList from '@/components/NewsList';

export default {
  components: {
    NewsList
  },
  async fetch({ store }) {
    await store.dispatch('getNews');
  }
};
</script>

<style></style>
