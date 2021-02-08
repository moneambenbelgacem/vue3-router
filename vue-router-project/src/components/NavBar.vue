<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav  -auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Blog' }"
              >Blog</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <button type="button" @click="previous" class="btn btn-success">
          Previous
        </button>
        <button type="button" @click="redirect" class="btn btn-warning">
          Redirect
        </button>
        <button type="button" @click="next" class="btn btn-danger">
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    previous() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.go(1);
    },
    next() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.router-link-active {
  color: black !important;
  background: white;
}
</style>
