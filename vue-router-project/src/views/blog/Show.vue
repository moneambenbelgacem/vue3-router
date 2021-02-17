<template lang="">
  <div v-if="post">
    <h1>{{ post.title }}</h1>
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
