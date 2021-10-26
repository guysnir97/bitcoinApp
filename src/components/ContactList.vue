<template>
  <section class="contact-container flex align-center justify-center">
    <ul class="contact-list flex column gap10 align-center">
      <router-link class="fs18" :to="`/contact/edit`">+</router-link>
      <li class="contact-preview" v-for="(contact, idx) in contacts" :key="idx">
        <ContactPreview :contact="contact" :idx="idx" />
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "../components/ContactPreview";
export default {
  name: "contact-list",
  props: ["contacts"],

  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss" >
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.contact-list {
  background: aliceblue;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  line-height: 45px;
}
</style>
