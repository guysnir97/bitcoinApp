<template>
  <router-link :to="`contact/${contact._id}`" class="flex align-center gap20">
    <div class="img-info">
      <img :src="`https://robohash.org/${idx}}`" />
    </div>
    <h1 class="fs28">{{ contact.name }}</h1>
  </router-link>
</template>

<script>
export default {
  name: "ContactPreview",
  props: ["contact", "idx"],
};
</script>

<style lang="scss" >
.img-info {
  width: 3rem;
}

.contact-preview {
  background: #fbe5c8;
  width: 400px;
  border-radius: 2em;
  text-align: left;
  a {
    text-decoration: none;
    color: black;
    padding: 10px 20px;
  }
}
</style>


