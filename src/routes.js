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

const Cases = resolve => {
  require.ensure(['./components/cases/Cases.vue'], () => {
    resolve(require('./components/cases/Cases.vue'));
  }, 'case');
};

const CaseOne = resolve => {
  require.ensure(['./components/cases/CaseOne.vue'], () => {
    resolve(require('./components/cases/CaseOne.vue'));
  }, 'case');
};

const CaseTwo = resolve => {
  require.ensure(['./components/cases/CaseTwo.vue'], () => {
    resolve(require('./components/cases/CaseTwo.vue'));
  }, 'case');
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
    path: '/cases',
    name: 'cases',
    component: Cases,
    redirect: '/mi',
    children:
    [
      {
        path: '/mi',
        component: CaseOne
      },

      {
        path: '/harmony',
        component: CaseTwo
      }
    ]
  },

  {
    path: '*',
    redirect: '/'
  }
];
