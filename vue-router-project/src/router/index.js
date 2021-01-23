import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/blog/blogHome.vue';
import Show from '../views/blog/Show.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/posts',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/posts/:id/:slug',
    name: 'post-show',
    component: Show,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
