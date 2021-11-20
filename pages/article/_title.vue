<template>
  <div>
    <Categories />
    <div class="max-w-3xl py-6 px-4 sm:px-6 lg:px-8 mx-auto">
      <img :src="article.url" alt="" />
      <div class="mx-4 py-4">
        <p class="bg-yellow-700 text-white w-28 px-4 text-center">
          {{ article.category.toUpperCase() }}
        </p>

        <h1 class="text-3xl font-bold py-2">{{ article.title }}</h1>
        <div v-html="article.content" class="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import json from '../../data/dummy.json';
export default {
  data() {
    return {
      data: json.articles,
      article: {},
    };
  },
  created() {
    this.data.map((item) => {
      if (item.title == this.$route.params.title) {
        this.article = item;
      }
    });
  },
};
</script>
