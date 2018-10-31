<template>
  <header class="navigation main-navigation">
    <ul class="menu main-menu">
      <router-link to="/about" tag="li" active-class="active"><a class="to-about">About</a></router-link>
      <router-link to="/work" tag="li" active-class="active"><a class="to-work">Work</a></router-link>
    </ul>
  </header>
</template>

<style scoped>
.menu li.active > a::before,
.menu li.active > a::before,
.menu li.active > a::before {
  background-color: #FFE300;
}
</style>
