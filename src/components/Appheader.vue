<template>
  <header class="main-header main-container">
    <div class="header-container flex space-between align-center">
      <div class="logo">
        <h1>MisterBitCoin</h1>
      </div>
      <nav class="main-nav flex gap10">
        <router-link to="/">home</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/user">login</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>

<style>
</style>