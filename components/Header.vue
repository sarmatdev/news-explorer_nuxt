<template>
  <header class="header">
    <h1 class="header__title">News Explorer</h1>
    <nav>
      <ul class="menu">
        <nuxt-link tag="li" class="menu__item" to="/">
          Top Headlines
        </nuxt-link>
        <Dropdown />
      </ul>
    </nav>
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown';
export default {
  components: {
    Dropdown
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-secondary;
  height: 5rem;
  position: relative;

  &__title {
    font-size: 1.6rem;
    font-weight: 300;
    color: $color-white;
  }
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
