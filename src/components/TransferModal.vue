<template>
  <div class="transfer-modal-container">
    <h1>Transfer to {{ contact.name }}</h1>
    <form @submit.prevent="onTransfer">
      <label for="amount">How much?</label>
      <input v-model="transferAmount" type="number" id="amount" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transferAmount: 0,
    };
  },

  props: ["contact"],

  methods: {
    onTransfer() {
      if (this.transferAmount > this.$store.getters.loggedInUser.coins) return console.log('insufficient bunds');
       else this.$store.dispatch({type: 'transfer', transferData: {amount: this.transferAmount, to: this.contact._id}});
    },
  },
};
</script>

<style>
</style>