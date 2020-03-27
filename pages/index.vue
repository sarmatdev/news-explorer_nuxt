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
  },
  head() {
    return {
      titleTemplate: '%s | Top Headlines',
      meta: [
        {
          name: 'description',
          content: 'News Explorer app'
        },
        {
          name: 'keywords',
          content: 'news, app, nuxt, ssr'
        }
      ]
    };
  }
};
</script>

<style></style>
