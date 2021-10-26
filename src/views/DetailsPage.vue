<template>
  <section v-if="contact" class="contact-details flex align-center column">
    <div class="details-container">
      <div class="info flex justify-center column fh26">
        <h1>{{ contact.name }}</h1>
        <h1>{{ contact.phone }}</h1>
        <h1>{{ contact.email }}</h1>
      </div>
      <div class="btn-preview flex space-between">
        <router-link :to="`/contact`">go back</router-link>
        <router-link :to="`/contact/edit/${contact._id}`">edit</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import contactService from "../services/contact.service";
export default {
  name: "detailsPage",
  data() {
    return {
      contact: null,
    };
  },
  created() {
    this.loadContact();
  },
  methods: {
    async loadContact() {
      const { contactId } = this.$route.params;
      const contact = await contactService.getById(contactId);
      this.contact = contact;
    },
  },
};
</script>