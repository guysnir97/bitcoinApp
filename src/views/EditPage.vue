<template>
  <section v-if="contact" class="edit-page flex justify-center">
    <form
      @submit.prevent="onSaveContact"
      class="flex column align-center justify-center fh20 gap10"
    >
      <input
        type="text"
        placeholder="fullname"
        v-model="contact.name"
        required
      />
      <input type="text" placeholder="email" v-model="contact.email" required />
      <input type="text" placeholder="phone" v-model="contact.phone" required />
      <input
        type="text"
        placeholder="password"
        v-model="contact.password"
        required
      />
      <label>
        <span>Is Admin</span>
        <input type="checkbox" v-model="contact.isAdmin" />
      </label>
      <div class="btn wide flex align-center space-between">
        <template v-if="this.$route.params.contactId">
          <button type="button" @click="onRemoveContact">Delete</button>
        </template>
        <button type="submit">Save</button>
        <router-link to="/contact">go back</router-link>
      </div>
    </form>
  </section>
</template>

<script>
import contactSerivce from "../services/contact.service";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const { contactId } = this.$route.params;
    if (!contactId) {
      this.contact = contactSerivce.getEmptyContact();
    } else {
      this.contact = await contactSerivce.getById(contactId);
    }
  },
  methods: {
    async onSaveContact() {
      await this.$store.dispacth({
        type: "saveContact",
        contact: this.contact,
      });
      this.$router.push("/contact");
    },

    async onRemoveContact() {
      await contactSerivce.remove(this.contact._id);
      this.$router.push("/contact");
    },
  },
};
</script>

<style></style>
