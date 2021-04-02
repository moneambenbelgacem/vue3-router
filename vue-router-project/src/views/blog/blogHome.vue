<template lang="">
  <div>
    <div class="row">
      <div class="col-md-12 text-right">
        <router-link :to="{ name: 'New' }" class="btn btn-primary"
          >New</router-link
        >
      </div>
    </div>
    <div class="row" v-if="posts.length">
      <div class="col-md-12" v-for="post in posts">
        <OnePost @delete="handelDelete" :post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import OnePost from '/src/views/blog/OnePost.vue';
export default {
  components: {
    OnePost,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch('http://localhost:5000/posts')
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log('ERROR'));
  },
  methods: {
    handelDelete(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
};
</script>
<style lang=""></style>
