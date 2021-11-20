<template>
  <header class="bg-white shadow">
    <div
      class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center"
    >
      <ul class="flex justify-center flex-wrap">
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
export default {
  data() {
    return {
      categories: this.$store.state.categories,
    };
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
