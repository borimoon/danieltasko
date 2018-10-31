<template>
  <section class="home">
    <div class="illustration">
      <span></span>
      <div class="question">
        <img src="src/assets/question.svg" />
      </div>
    </div>

    <div class="intro-text">
      <h1 class="main-heading main-heading-home">Curious?</h1>
      <button class="my-button" @click="navigateToAbout">Hell yes!</button>
    </div>
  </section>
</template>

<script>
  export default {
    methods: {
      navigateToAbout() {
        this.$router.push({ name: 'about' });
      }
    }
  }
</script>
