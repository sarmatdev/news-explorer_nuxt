<template>
  <div class="error">
    <img class="error__img" src="/img/404.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.error {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__img {
    max-width: 80rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
