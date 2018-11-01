<template>
  <footer class="footer">
    <ul class="links">
      <li v-for="myLink in myLinks">
        <a :href="myLink.url" :target="myLink.target">
          <small>{{ myLink.name }}</small>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        myLinks: [
          {
            name: 'email',
            url: 'mailto:dani@danieltasko.hu',
            target: 'self'
          },

          {
            name: 'resume',
            url: 'src/assets/cv-dt.pdf',
            target: 'blank'
          },

          {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/danieltasko/',
            target: 'blank'
          },

          {
            name: 'behance',
            url: 'https://www.behance.net/danieltasko',
            target: 'blank'
          }
        ]
      };
    }
  }
</script>
