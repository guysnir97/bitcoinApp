<template>
  <div v-if="loggedInUser" class="home-page">
    <div class="user-info">
      <h1>Hello {{ loggedInUser.name }}!</h1>
      <h1>coins: {{ loggedInUser.coins }}</h1>
      <h1>bitCoinRate {{ bitCoinRate }}</h1>
    </div>
  </div>
</template>

<script>
import userService from "../services/user.service";
import bitCoinService from "../services/bitcoin.service";
export default {
  name: "Home",
  data() {
    return {
      user: null,
      bitCoinRate: null,
    };
  },
  async created() {
    if (!this.$store.getters.loggedInUser) this.$router.push("/user");
    this.bitCoinRate = await bitCoinService.getRate();
  },
  computed: {
    loggedInUser() {
      console.log("log user", this.$store.getters.loggedInUser);
      return this.$store.getters.loggedInUser;
    },
    // islogin() {
    //   if (!this.loggedInUser) this.$router.push("/user");
    //   else return true;
    // },
  },
  methods: {
    async loadUser() {
      this.user = await userService.getUser();
    },
  },
};
</script>

