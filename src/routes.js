import Home from './components/Home.vue';
import HeaderAbout from './components/HeaderAbout.vue';
import HeaderWork from './components/HeaderWork.vue';


const About = resolve => {
  require.ensure(['./components/About.vue'], () => {
    resolve(require('./components/About.vue'));
  }, 'about');
};

const Work = resolve => {
  require.ensure(['./components/Work.vue'], () => {
    resolve(require('./components/Work.vue'));
  }, 'work');
};

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    name: 'about',
    components: {
      default: About,
      'header': HeaderAbout
    }
  },

  {
    path: '/work',
    name: 'work',
    components: {
      default: Work,
      'header': HeaderWork
    }
  },

  {
    path: '*',
    redirect: '/'
  }
];
