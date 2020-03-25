<template>
  <section class="news-grid">
    <NewsItem v-for="(news, id) in news" :key="id" :news="news" />
  </section>
</template>

<script>
import NewsItem from '@/components/NewsItem';
export default {
  components: {
    NewsItem
  },
  computed: {
    news() {
      return this.$store.getters.news;
    }
  }
};
</script>

<style lang="scss">
.news-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  // justify-content: space-evenly;
  // align-content: space-between;
  // align-items: start;
  // padding: 4rem 0;
  // grid-gap: 2rem 1rem;
}
</style>
