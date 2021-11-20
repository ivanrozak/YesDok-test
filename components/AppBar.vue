<template>
  <nav class="bg-blue sticky top-0 z-50 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/">
          <img class="h-9" src="/yesdok.png" alt="Workflow logo" />
        </NuxtLink>

        <div class="hidden md:block">
          <div class="flex items-center">
            <div class="ml-10 flex items-baseline">
              <NuxtLink to="/" class="link">Beranda</NuxtLink>
              <NuxtLink to="/store" class="link">Store</NuxtLink>
              <NuxtLink to="#" class="link">Karir</NuxtLink>
              <NuxtLink to="/about-us" class="link">Tentang Kami</NuxtLink>
              <NuxtLink to="/contact-us" class="link">Hubungi Kami</NuxtLink>
            </div>
            <NuxtLink to="/auth/login" class="btn md:ml-6"
              >Login/Register</NuxtLink
            >
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-blue-light
              focus:outline-none focus:bg-gray-700 focus:text-white
            "
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <NuxtLink to="/" class="link-sm">Beranda</NuxtLink>
        <NuxtLink to="/store" class="link-sm">Store</NuxtLink>
        <NuxtLink to="#" class="link-sm">Karir</NuxtLink>
        <NuxtLink to="/contact-us" class="link-sm">Tentang Kami</NuxtLink>
        <NuxtLink to="/" class="link-sm">Hubungi Kami</NuxtLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="my-3 text-center">
          <NuxtLink to="/auth/login" class="btn">Login/Register</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  .btn {
    @apply px-3 py-2 rounded-md text-sm font-medium text-white border-blue-light border-2 focus:outline-none focus:text-white focus:bg-blue-light;
  }

  .link {
    @apply ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-light focus:outline-none focus:text-white focus:bg-blue-light;

    &.nuxt-link-exact-active {
      @apply text-white bg-blue-light;
    }
  }

  .link-sm {
    @apply mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-light focus:outline-none focus:text-white focus:bg-blue-light;

    &.nuxt-link-exact-active {
      @apply text-white bg-blue-light;
    }
  }
}
</style>
