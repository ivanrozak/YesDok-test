<template>
  <div>
    <Categories />
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <header>
        <div class="text-3xl font-bold text-blue mb-3">
          Artikel {{ this.$route.params.category }}
        </div>
      </header>
      <div class="flex md:flex-wrap-reverse flex-wrap">
        <div
          class="w-full sm:w-4/6 md:pr-4 mb-3"
          v-for="item in articles"
          :key="item.id"
        >
          <div
            class="
              w-full
              bg-white
              rounded-lg
              sahdow-lg
              overflow-hidden
              flex flex-col
              md:flex-row
            "
          >
            <div class="w-full md:w-2/5">
              <img
                class="object-center object-cover w-full h-full"
                :src="item.url"
                alt="photo"
              />
            </div>
            <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
              <p
                class="
                  text-xl text-blue
                  font-bold
                  cursor-pointer
                  hover:text-blue-light
                "
                @click.prevent="toDetailArticle(item.title)"
              >
                {{ item.title }}
              </p>
              <p class="text-base leading-relaxed text-gray-500 font-normal">
                {{ item.description }}
              </p>
              <div class="flex justify-start space-x-2">
                <div class="bg-yellow-600 px-5 text-white rounded-full">
                  {{ item.category }}
                </div>
                <div class="border-blue border-2 px-5 text-blue rounded-full">
                  {{ item.created }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-2/6 mb-3">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      articles: this.$store.state.articles,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    };
  },
  methods: {
    ...mapMutations(['increment']),
    addData() {
      this.increment();
    },
    toDetailArticle(value) {
      this.$router.push(`/article/${value}`);
    },
  },
};
</script>
