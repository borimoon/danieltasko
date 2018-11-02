<template>
  <article class="article">
    <article-header>
      <h1 class="main-heading heading-case">Harmonie tánc</h1>
    </article-header>

    <h2 class="subheading subheading-case">UX/UI design for Harmonie tánc Studio</h2>

    <div class="bottom-navigation">
      <router-link class="bottom-nav-link prev" to="/mi">Previous case study</router-link>
    </div>
  </article>
</template>

<script>
import ArticleHeader from './ArticleHeader.vue';
export default {
  components: {
    'articleHeader': ArticleHeader
  }
}
</script>
