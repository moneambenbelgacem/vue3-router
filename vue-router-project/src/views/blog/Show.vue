<template lang="">
  <div class="row">
    <div class="col-md-12 text-right ">
      <router-link :to="{ name: 'Blog' }" class="btn btn-success"
        >Back to list
      </router-link>
    </div>
  </div>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <h2>id:{{ id }}_ slug: {{ slug }}</h2>
    <p>{{ post.content }}</p>
  </div>
  <div v-else class="text-centre">Loding...</div>
</template>
<script>
export default {
  props: ['id', 'slug'],
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    setTimeout(() => {
      fetch(`http://localhost:5000/posts/${this.id}`)
        .then((res) => res.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err));
    }, 3000);
  },
};
</script>
<style lang=""></style>
