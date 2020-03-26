<template>
  <form class="search">
    <input
      class="search__input"
      type="text"
      placeholder="Search News..."
      v-model="query"
    />
    <button @click.prevent="search" class="search__button">
      <font-awesome-icon color="white" :icon="['fas', 'search']" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    search() {
      if (this.query.length === 0) {
        return;
      } else {
        this.$router.push(`/search/${this.query}`);
        this.query = '';
      }
    }
  }
};
</script>

<style lang="scss">
.search {
  display: flex;
  align-items: center;
  justify-content: center;

  &__input {
    font-size: 1.4rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    width: 70%;
    border-radius: 0.5rem;
    transition: all 0.4s ease;

    &:focus {
      width: 100%;
    }
  }

  &__button {
    margin-left: -1rem;
    padding: 1rem;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: $color-primary;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }
}
</style>
