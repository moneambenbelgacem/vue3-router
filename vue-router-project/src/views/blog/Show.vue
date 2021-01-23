<template lang="">
  <div>
    <h1>show post</h1>
    <h2>id :{{ id }} == slug : {{ slug }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.</p>
  </div>
</template>
<script>
export default {
  props: ['id', 'slug'],
};
</script>
<style lang=""></style>
