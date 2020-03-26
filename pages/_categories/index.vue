<template>
  <NewsList />
</template>

<script>
import NewsList from '@/components/NewsList';

export default {
  components: { NewsList },
  async fetch({ store, params }) {
    await store.dispatch('getNewsByСategory', params.categories);
  }
};
</script>

<style></style>
