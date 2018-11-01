<template>
  <header id="header" class="article-title" v-on:scroll="handleScroll">
    <h1 class="main-heading heading-case">Mindful Minimalism</h1>
  </header>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      const header = document.getElementById("header");
      const shrinkHeader = 30;
      const scroll = window.pageYOffset;
      if (scroll > shrinkHeader) {
        header.classList.add("smaller");
      } else {
        header.classList.remove("smaller");
      }
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style scoped>
  .article-title {
    background-color: transparent;
    height: 25rem;
    position: fixed;
    top: 0;
    transition: height .2s ease-in-out;
    width: 100%;
  }

  .article-title.smaller {
    background-color: #fff;
    height: 5rem;
  }

  .article-title.smaller .heading-case {
    font-size: 1.8rem;
  }
</style>
