<template>
  <main class="contact-page">
    <ContactFilter @filterList="onSetFilter" />
    <ContactList :contacts="contactsToDisplay" />
  </main>
</template>

<script>
import ContactList from "../components/ContactList";
import ContactFilter from "../components/ContactFilter";
import contactSerivce from "../services/contact.service";
export default {
  name: "ContactPage",
  data() {
    return {
      contacts: [],
      filterBy: null,
    };
  },

  created() {
    this.loadContacts();
  },
  computed: {
    contactsToDisplay() {
      const { filterBy, contacts } = this;

      if (!filterBy) return this.contacts;

      const contactsToDisplay = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterBy.txt.toLowerCase())
      );
      return contactsToDisplay;
    },
  },
  methods: {
    async loadContacts() {
      this.contacts = await contactSerivce.query();
    },
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
