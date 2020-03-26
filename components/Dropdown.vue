<template>
  <li class="menu__item" @click="isOpen = !isOpen">
    Categories
    <span>
      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </span>
    <div class="sub-menu" v-if="isOpen">
      <nuxt-link
        class="sub-menu__link"
        v-for="(category, i) in categories"
        :key="i"
        :to="category.link"
        >{{ category.title }}</nuxt-link
      >
    </div>
  </li>
</template>

<script>
export default {
  name: 'dropdown',
  data() {
    return {
      isOpen: false,
      categories: [
        {
          title: 'Business',
          link: '/business'
        },
        {
          title: 'Entertainment',
          link: '/entertainment'
        },
        {
          title: 'General',
          link: '/general'
        },
        {
          title: 'Health',
          link: '/health'
        },
        {
          title: 'Science',
          link: '/science'
        },
        {
          title: 'Sports',
          link: '/sports'
        },
        {
          title: 'Technology',
          link: '/technology'
        }
      ]
    };
  }
};
</script>

<style></style>
