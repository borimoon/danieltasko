<template>
  <section class="about">
    <main class="main">
      <h1 class="main-heading">Hi, I'm Daniel</h1>
      <p class="side-text-main"><small><strong>Tasko</strong> [:taʃkəʊ]</small></p>

      <div class="main-text">
        <p class="text">
          I am a designer, and I am incurably curious. I think curiosity is one of the best qualities a designer can have. I am obsessed with discovering, learning and understanding the world around us.
        </p>

        <p class="text">
          I'm driven by a constant need for improving things whether it means challenging stereotypes, leaving the status quo behind and doing things differently.
        </p>
      </div>

      <p class="text-center">
        Are you still curious?
      </p>

      <button class="my-button primary-button" @click="navigateToWorks">Explore my works</button>
    </main>

    <div class="retro-logo" @click="navigateToHome">
      <img src="src/assets/td-retro-logo.svg" />
    </div>

    <my-footer></my-footer>
  </section>
</template>

<script>
import Footer from './Footer.vue';
  export default {
    components: {
      myFooter: Footer
    },

    methods: {
      navigateToWorks() {
        this.$router.push({ name: 'work' });
      },

      navigateToHome() {
        this.$router.push({ name: 'home' });
      }
    }
  }
</script>
