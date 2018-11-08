<template>
    <ul class="Menu">
    <li class="Menu__Item">
      <nuxt-link class="Menu__Item__Link" to="/">
        Home
      </nuxt-link>
    </li>
    <li class="Menu__Item" v-for="(link,index) in links" :key="index" >
      <nuxt-link class="Menu__Item__Link" :to="link.pageUrl">
        {{ link.pageName }}
      </nuxt-link>
    </li>

  </ul>
</template>
<script>
export default {
  props: ['links']
};
</script>
