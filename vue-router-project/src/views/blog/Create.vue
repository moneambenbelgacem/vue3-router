<template lang="">
  <div class="row">
    <div class="col-md-12 text-right">
      <router-link :to="{ name: 'Blog' }" class="btn btn-success"
        >Back to list
      </router-link>
    </div>
  </div>
  <div class="row my-4">
    <div class="col-md-6 mx-auto">
      <h1 class="my-2">New Post</h1>
      <form @submit.prevent="creatPost">
        <div class="form-group">
          <label for="Title">Title</label>
          <input v-model="title" id="Title" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="Content">Content</label>
          <textarea
            v-model="content"
            name=""
            id="Content"
            cols="30"
            rows="5"
            class="form-control"
          ></textarea>
        </div>
        <button class="btn btn-block btn-success">Add</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    url: 'http://localhost:5000/posts';
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    creatPost() {
      let post = {
        title: this.title,
        content: this.content,
      };
      fetch(this.url, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(post),
      })
        .then(() => this.$router.push('/posts'))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
<style lang=""></style>
