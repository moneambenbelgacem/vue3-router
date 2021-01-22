<template lang="">
  <div>
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>
    <div class="row">
      <div class="col-md-6" v-for="post in posts">
        <h1>{{ post.title }}</h1>
        <p class="lead">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'learn Angular',
          slug: 'learn-angular ',
          content:
            'It uses utility classes for typography and spacing to space conte',
        },
        {
          id: 2,
          title: 'learn vue',
          slug: 'learn-vue ',
          content:
            'It uses utility classes for typography and spacing to space conte',
        },
        {
          id: 3,
          title: 'learn js',
          slug: 'learn-javascript ',
          content:
            'It uses utility classes for typography and spacing to space conte',
        },
        {
          id: 4,
          title: 'learn git',
          slug: 'learn-git ',
          content:
            'It uses utility classes for typography and spacing to space conte',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
