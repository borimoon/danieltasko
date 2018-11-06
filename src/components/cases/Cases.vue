<template>
  <section class="case-studies">
    <transition name="fade" appear>
      <nav class="go-back">
        <router-link to="/work"><span></span></router-link>
      </nav>
    </transition>

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .2s;
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity .2s;
    opacity: 0;
  }
</style>
