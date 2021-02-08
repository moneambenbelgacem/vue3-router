<template lang="">
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>
<script>
export default {
  props: ['id', 'slug'],
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    fetch(`http://localhost:5000/posts/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err));
  },
};
</script>
<style lang=""></style>
