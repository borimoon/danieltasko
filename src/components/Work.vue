<template>
  <section class="work">
    <div class="work-content">
      <div class="work-title">
        <h1 class="main-heading">Case studies</h1>
        <h2 class="subheading">(Freelance projects)</h2>
      </div>

      <ul class="cases">
        <router-link :to="caseStudy.href" tag="li" v-for="caseStudy in caseStudies" :key="caseStudy.title">
          <a>
            <img class="image" :src="caseStudy.src" :alt="caseStudy.title">
            <p><strong>{{ caseStudy.title }}</strong></p>
            <p>{{ caseStudy.role }}</p>
            <small>{{ caseStudy.time }}</small>
          </a>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        caseStudies: [
          {
            title: 'Mindful minimalism',
            href: '/mi',
            src: 'src/assets/cs-mi.svg',
            role: 'UX/UI',
            time: '5 minutes read'
          },

          {
            title: 'The new harmony',
            href: '/harmony',
            src: 'src/assets/cs-har.svg',
            role: 'UX/UI',
            time: '4 minutes read'
          }
        ]
      };
    }
  }
</script>
