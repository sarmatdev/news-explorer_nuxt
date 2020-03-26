<template>
  <header class="header">
    <nav>
      <ul class="menu">
        <nuxt-link tag="li" class="menu__item" to="/">
          <span>
            Top Headlines
          </span>
        </nuxt-link>
        <Dropdown />
      </ul>
    </nav>
    <Search />
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown';
import Search from '@/components/Search';
export default {
  components: {
    Dropdown,
    Search
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $color-secondary;
  height: 5rem;
}

.menu {
  margin-left: 2rem;
  display: flex;
  align-items: center;

  &__item {
    text-decoration: none;
    cursor: pointer;
    color: $color-white;
    list-style: none;
    margin-right: 1rem;
    transition: all 0.2s ease;

    &:hover {
      color: $color-primary;
    }
  }

  .sub-menu {
    position: absolute;
    background-color: $color-primary;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    z-index: 99;

    &__link {
      transition: all 0.2s ease;
      color: $color-white;
      text-decoration: none;
      margin-bottom: 0.5rem;

      &:hover {
        color: $color-secondary;
      }
    }
  }
}
</style>
