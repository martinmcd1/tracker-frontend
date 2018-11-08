import Vue from 'vue';

Vue.component('Home', () => import('@/components/page_types/Home.vue'));
Vue.component('Blog', () => import('@/components/page_types/BlogPage.vue'));
Vue.component('BlogPostPage', () =>
  import('@/components/page_types/BlogPostPage.vue')
);
Vue.component('StandardPage', () =>
  import('@/components/page_types/StandardPage.vue')
);
Vue.component('ContentPage', () =>
  import('@/components/page_types/ContentPage.vue')
);
