<template lang="">
  <div>
    <h1>show post</h1>
    <h2>id :{{ id }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
<style lang=""></style>
