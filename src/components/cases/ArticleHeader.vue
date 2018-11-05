<template>
  <header id="header" class="article-title" v-on:scroll="handleScroll">
    <slot></slot>
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
    padding-top: 10em;
    position: fixed;
    top: 0;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    width: 100%;
    z-index: 9;
  }

  .article-title .heading-case {
    font-size: 4.7rem;
    -webkit-transition: font-size .2s ease-in-out;
    -moz-transition: font-size .2s ease-in-out;
    -o-transition: font-size .2s ease-in-out;
    transition: font-size .2s ease-in-out;
  }

  @media (min-width: 900px) {
    .article-title .heading-case {
      font-size: 7rem;
      text-align: center;
    }
  }

  .article-title.smaller {
    background-color: #fff;
    padding-bottom: 2em;
    padding-top: 2em;
  }

  .article-title.smaller .heading-case {
    font-size: 1.8rem;
  }
</style>
