<template>
  <div v-if="islogin" class="home-page">
    <div class="user-info">
      <h1>Hello {{ user.name }}!</h1>
      <h1>coins: {{ user.coins }}</h1>
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
    this.bitCoinRate = await bitCoinService.getRate();
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    islogin() {
      if (!this.loggedInUser) this.$router.push("/user");
    },
  },
  methods: {
    async loadUser() {
      this.user = await userService.getUser();
    },
  },
};
</script>

