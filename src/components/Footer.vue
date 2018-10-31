<template>
  <footer class="footer">
    <div class="image logo">
      <img src="src/assets/TD-logo.svg" alt="daniel tasko logo">
    </div>

    <div class="links">
      <ul class="hire-me">
        <li v-for="myLink in myLinks">
          <a :href="myLink.url" target="blank">
            <small><strong>{{ myLink.name }}</strong></small>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        myLinks: [
          {
            name: 'email',
            url: 'mailto:dani@danieltasko.hu'
          },

          {
            name: 'resume',
            url: 'src/assets/cv-dt.pdf'
          },

          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/danieltasko/'
          },

          {
            name: 'behance',
            url: 'https://www.behance.net/danieltasko'
          }
        ]
      };
    }
  }
</script>
