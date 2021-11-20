<template>
  <header class="bg-white shadow">
    <div
      class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center"
    >
      <ul class="flex justify-center">
        <li v-for="item in categories" :key="item">
          <NuxtLink :to="{ path: `/article/category/${item}` }" class="link">{{
            capitalizeLetter(item)
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import json from '../data/dummy.json';
export default {
  data() {
    return {
      categories: json.categories,
      articles: json.articles,
      article: [],
    };
  },
  created() {
    // console.log(this.articles);
    let dataArticles = [];
    this.articles.map((item) => {
      if (item.category == this.$route.params.category) {
        // console.log(item);
        dataArticles.push(item);
      }
    });
    // console.log(dataArticles);
  },
  methods: {
    capitalizeLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  .link {
    @apply ml-4 px-3 py-2 text-sm font-medium text-gray-400 hover:text-blue focus:text-blue;

    &.nuxt-link-exact-active {
      @apply text-blue;
    }
  }
}
</style>
