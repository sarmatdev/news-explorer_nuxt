<template>
  <header class="header">
    <nav class="inner">
      <h1 class="header__title">News Explorer</h1>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: $color-primary;
  background-color: $color-secondary;

  &__title {
    font-size: 2rem;
    font-weight: 300;
    color: $color-white;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    max-width: 80rem;
  }
}
</style>
