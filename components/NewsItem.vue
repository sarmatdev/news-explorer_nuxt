<template>
  <div class="news-card">
    <h1 class="news-card__title">
      <a :href="news.url" target="_blank">
        {{ news.title }}
      </a>
      <span>({{ news.source.name }})</span>
    </h1>
    <p class="news-card__published">Published {{ news.published }} ago</p>
    <!-- <font-awesome-icon
      class="news-card__icon"
      :class="{ rotate: active }"
      @click="expand"
      :icon="['fas', 'chevron-down']"
    /> -->
    <!-- <article class="news-card__description" :class="{ active }">
      {{ news.description }}
    </article> -->
  </div>
</template>

<script>
export default {
  props: ['news'],
  data() {
    return {
      active: false
    };
  },
  methods: {
    expand() {
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss">
.news-card {
  min-height: 8rem;
  height: 100%;
  max-width: 80rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: $color-white;
  padding: 2rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  &__published {
    font-size: 1.4rem;
    color: $color-grey;
  }

  &__description {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  &__icon {
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .rotate {
    transform: rotate(180deg);
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 400;
    color: $color-secondary;

    span {
      color: $color-primary;
    }

    a {
      text-decoration: none;
      color: $color-secondary;

      &:visited {
        color: $color-secondary;
      }
    }
  }
}
.active {
  max-height: 100%;
}
</style>
