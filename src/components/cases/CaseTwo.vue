<template>
  <article class="article">
    <article-header>
      <h1 class="heading-case">New Harmony</h1>
    </article-header>

    <h2 class="subheading-case">Redesigning a website of the Harmonie dance studio</h2>

    <div class="image image-hero">
      <img src="src/assets/cases/harmonie/harmo.png" alt="Harmonie tánc hero animation">
    </div>

    <div class="article-content">
      <h4>Background</h4>
      <p class="text">
        Harmonie tánc is a Budapest based dance studio focusing on art jazz and contemporary dance technics. Founder and lead teacher Ildikó Szabó (a.k.a. Ditta) contacted us to improve the website of her studio in May 2018.
      </p>

      <h4>My role and team</h4>
      <p>
        In this project, I mainly focused on the UX thinking while Bori Tenger worked on the visual design and did the front-end development.
      </p>

      <h3 class="article-heading">Discovery</h3>

      <h4>Competitive analysis</h4>
      <p class="text">
        For the early stage of research, we made a competitive analysis to take a comprehensive look at the contemporary dance scene and dance school market.
      </p>

      <h4>Interviews</h4>
      <p class="text">
        We conducted a stakeholder interview with Ditta. The fundamental insight of this interview was to know her approach to the course structure. She always adopts the selection of the courses and the schedule of the lessons to the student's actual needs. Therefore changes happen frequently in the timetable or in course descriptions. Also, valuable information was that most of the new students asked for her advice via email before applying on any of the courses.
        Then we carried out several interviews with people from the target audience as well as the current students of the studio.
      </p>

      <h4>User test</h4>
      <p>
        We also completed moderated user tests of the old website. This led us to the conclusions that finding a particular class in the timetable is challenging for our users.
      </p>

      <h3 class="article-heading">Design</h3>

      <h4>Content first</h4>
      <p class="text">
        Although it was a redesign process, we found crucial to rethink the existing content. We changed the tone of voice and added more detailed information to create valuable content before designing the UI.
      </p>

      <h4>Using video content more efficiently</h4>
      <p class="text">
        Even though Harmonie Dance owns a wide selection of excellent videos of their work, it was well under-represented on the old website. Focusing more on the video content seemed to be the ideal solution for giving an insight into the atmosphere of the studio's dance lessons.
      </p>

      <h4>Wireframe</h4>
      <p class="text">
        Based on the insights of our research, we made many design decisions during the wireframing process. Here are some examples:
      </p>

      <h5>Informative home page</h5>
      <p class="text">
        The Home screen of the old website contained only a single hero image and a logo. It was practically empty. We felt it vital to inform the users, to where they have arrived, and what kind of content they can expect here.
      </p>

      <div class="image image-article-inner">
        <img src="src/assets/cases/harmonie/hcs-1.jpg" alt="Restructuring the home page">
      </div>

      <h5>Rethinking the class schedule</h5>
      <p>
        A clear and comprehensible timetable was the principal feature we wanted to put in the new website. Instead of using just a traditional table format we decided to add a short class description along with the available dates and times.
      </p>

      <div class="image image-article-inner">
        <img src="src/assets/cases/harmonie/hcs-2.jpg" alt="rethinking the class schedule">
      </div>

      <h4>Look and feel</h4>
      <p>
        The students of the Harmonie dance studio are mainly female. Therefore we wanted to keep the entire design feminine and minimalistic but also dynamic.
      </p>
    </div>

    <div class="image image-article">
      <img src="src/assets/cases/harmonie/hcs-3.jpg" alt="detailed design screens">
    </div>

    <div class="article-content">
      <div class="image image-article-inner">
        <img src="src/assets/cases/harmonie/colours.svg" alt="used colours">
      </div>

      <h3 class="article-heading">Evaluation</h3>

      <p class="text">
        Instead of creating prototypes, we decided to launch and test the actual minimal viable product and improve it continuously.
      </p>

      <h4>Heatmap analysis</h4>
      <p>
        The heatmap analysis validated our design in many respects and revealed some pain points too.
        Users spent most of their time viewing video content. That fact met our former hypothesis.
      </p>

      <div class="image image-article-inner">
        <img src="src/assets/cases/harmonie/attention.jpg" alt="attention heatmap">
      </div>

      <p>
        We have also learned from the analysis that most people interested in the beginner lessons. Due to this insights, the studio doubled the beginners' classes, which filled up fast with new pupils.
      </p>

      <div class="image image-article-inner" style="max-width: 412px;">
        <img src="src/assets/cases/harmonie/attention-2.jpg" alt="attention heatmap">
      </div>

      <p>
        Heatmaps also pointed our attention to the address section. The first version of the new website did show the address, but it not contained a map. There were lots of movement and clicks in this area so we placed an embedded map to show the studio location visually. movement and clicks in this area. When we placed a map, most of the clicks were relocated to the map area.
      </p>

      <h3 class="article-heading">Learnings and result</h3>
      <h4>Our client's feedback</h4>
      <p class="quote">
        <q>
          I love every part of it, it's just amazing! I have opened it since yesterday more than it is normal!
        </q>
      </p>

      <h3 class="article-heading">Project details</h3>
      <h4>Project date</h4>
      <p class="text">
        2018
      </p>

      <h4>Tools used</h4>
      <p class="text">
        Brain, post-its and pencils, Axure, Sketch, Mouseflow
      </p>

      <h4>Methodology used</h4>
      <p class="text">
        Competitive analysis, interviews, usability test, user journey, wireframes, heatmap analytics
      </p>

      <h4>Project url</h4>
      <p class="text">
        <a href="http://www.harmonietanc.hu" target="blank">http://www.harmonietanc.hu</a>
      </p>
    </div>

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
