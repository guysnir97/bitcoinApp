<template>
  <div id="app">
    <AppHeader :loggedInUser="loggedInUser" />
    <router-view class="layout main-container" />
    <AppFooter />
  </div>
</template>


<script>
import AppHeader from "./components/Appheader";
import userService from "./services/user.service";
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  async created() {
    const loggedUser = await userService.getLoggedInUser();
    this.$store.dispatch({ type: "loadUser", loggedUser });
    this.$store.dispatch({ type: "loadContacts"});
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.layout {
  height: calc(100vh - 98px);
}
</style>
