<template>
  <article class="article">
    <article-header>
      <h1 class="main-heading heading-case">Mi műhely</h1>
    </article-header>

    <h2 class="subheading-case">UX/UI design for Mi Műhely Architect Studio</h2>

    <div class="article-content">
      <p>
        Mi Műhely is an architecture and design studio based in Dunakeszi Hungary. The studio is founded and owned by two young and talented architects, András Nagy and Kornél Gáhy. They are both passionate in minimalist forms, noble materials and the people they design for.
      </p>

      <h3 class="article-heading">Background</h3>

      <p>
        András and Kornél contacted me to design and develop a website for them in November 2017. They needed a portfolio, where they can present their work and a blog for publishing their thoughts.
        Working with our clients was very easy because they like as much thinking and experimenting with several ideas as we do. The everyday communications went via email, which we used for keeping track of progress and getting quick questions and answers regarding the process. For design presentations and discussing the main topics we always met in person.
      </p>
    </div>

    <img class="image article-image" src="src/assets/cases/mi/mcs-3.jpg" alt="Mi műhely ui screens" />

    <div class="article-content">
      <h4>The Game</h4>
      <p class="text">
        In addition to the Home page, we were thinking of an extra feature, which leads the user's first impression of the company, and which is also amusing. After several brainstorming sessions, we began with sketching a little game which is somehow connected to architecture and represents the Mi-team's "Let's make together"-attitude. The first results were three different ideas:
      </p>
    </div>

    <div class="bottom-navigation">
      <router-link class="bottom-nav-link next" to="/harmony">Next case study</router-link>
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
