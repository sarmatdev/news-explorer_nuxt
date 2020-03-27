<template>
  <NewsList />
</template>

<script>
import NewsList from '@/components/NewsList';

export default {
  components: { NewsList },
  async fetch({ store, params }) {
    await store.dispatch('getNewsByСategory', params.categories);
  },
  head() {
    return {
      titleTemplate: `${this.$route.params.categories} news`,
      meta: [
        {
          name: `description`,
          content: `${this.$route.params.categories} news`
        },
        {
          name: `keywords`,
          content: `${this.$route.params.categories}`
        }
      ]
    };
  }
};
</script>

<style></style>
