<template>
  <section class="signup-container">
    <div class="info-modal">
      <form @submit.prevent="showForm" class="flex align-cneter gap10 column">
        <div class="flex align-cneter gap20 column">
          <input
            type="text"
            placeholder="name"
            v-model="user.name"
            class="fh26"
            required
          />
          <input
            type="password"
            placeholder="password"
            v-model="user.password"
            required
            class="fh26"
          />
          <input
            v-if="isSignup"
            type="email"
            placeholder="email"
            v-model="user.email"
            required
            class="fh26"
          />
        </div>
        <div class="btn flex space-between column align-center gap10">
          <button v-if="!isSignup" @click="onToggleForm">
            Dont have an account? Sign Now!
          </button>
          <button>{{ isSignup ? "signup" : "login" }}</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: "",
      },
      isSignup: false,
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch({ type: "submit", user: this.user });
      this.$router.push("/");
    },
    async onLogin() {
      const user = {
        name: this.user.name,
        password: this.user.password,
      };
      await this.$store.dispatch({ type: "login", user });
      this.$router.push("/");
    },
    onToggleForm() {
      this.isSignup = !this.isSignup;
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    showForm() {
      return this.isSignup ? this.onSubmit : this.onLogin;
    },
  },
};
</script>

<style>
</style>