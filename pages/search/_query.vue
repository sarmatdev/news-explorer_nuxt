<template>
  <NewsList />
</template>

<script>
import NewsList from '@/components/NewsList';

export default {
  components: {
    NewsList
  },
  async fetch({ store, params }) {
    await store.dispatch('searchNews', params.query);
  },
  head() {
    return {
      titleTemplate: `Search – ${this.$route.params.query}`,
      meta: [
        {
          name: 'description',
          content: `News by ${this.$route.params.query}`
        },
        {
          name: 'keywords',
          content: `${this.$route.params.query}`
        }
      ]
    };
  }
};
</script>

<style></style>
