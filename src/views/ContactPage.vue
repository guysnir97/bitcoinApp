<template>
  <main class="contact-page flex column gap10 align-center justify-center">
    <h1>Contacts</h1>
    <ContactFilter @filterList="onSetFilter" />
    <ContactList :contacts="contactsToDisplay" />
  </main>
</template>

<script>
import ContactList from "../components/ContactList";
import ContactFilter from "../components/ContactFilter";
export default {
  name: "ContactPage",
  data() {
    return {
      filterBy: null,
    };
  },
  computed: {
    contactsToDisplay() {
      const contacts = this.$store.getters.contacts;
      if (!this.filterBy) return contacts;

      const contactsToDisplay = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.filterBy.txt.toLowerCase())
      );
      return contactsToDisplay;
    },
  },
  methods: {
    onSetFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>
