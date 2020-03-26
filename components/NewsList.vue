<template>
  <section class="news-grid">
    <p class="news-grid__title">
      {{ title }}
    </p>
    <img
      v-if="notFound"
      class="news-grid__not-found"
      src="/img/not-found.svg"
      alt=""
    />
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
    },
    title() {
      if (this.$route.params.categories) {
        return `${this.$route.params.categories} news`;
      } else if (this.$route.params.query) {
        return `News by "${this.$route.params.query}"`;
      }
      return 'Top Headlines';
    },
    notFound() {
      if (this.news.length === 0) {
        return true;
      }
      return false;
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

  &__title {
    font-size: 2rem;
    text-transform: uppercase;
    color: $color-secondary;
    background-color: $color-primary;
    padding: 1rem;
    transform: skewY(-2deg);
    margin-bottom: 1rem;
  }

  &__not-found {
    max-width: 80rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
