<template>
  <header class="main-header main-container">
    <div class="header-container flex space-between align-center">
      <div class="logo">
        <h1>MisterBitCoin</h1>
      </div>
      <nav class="main-nav align-center flex gap10">
        <template v-if="loggedInUser">
          <router-link to="/">home</router-link>
          <router-link to="/contact">contact</router-link>
        </template>
        <template v-if="loggedInUser">
          <button class="btn-logout" @click="onLogout">logout</button>
        </template>
        <router-link v-else to="/user">login</router-link>
      </nav>
    </div>
  </header>
</template>
 
<script>
export default {
  name: "AppHeader",

  methods: {
    async onLogout() {
      await this.$store.dispatch({ type: "logout" });
      this.$router.push("/user");
    },
  },
  computed: {
    loggedInUser() {
     
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>

<style>
</style>