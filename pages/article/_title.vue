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
export default {
  data() {
    return {
      data: this.$store.state.articles,
      article: {},
    };
  },
  head() {
    return {
      title: this.article?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article?.description,
        },
        {
          name: 'author',
          content: this.article?.author,
        },
        {
          name: 'keywords',
          content: 'HTML, CSS, JavaScript',
        },
      ],
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
