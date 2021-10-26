<template>
  <section class="filter-container">
    <form>
      <input
        type="search"
        placeholder="search for a user here"
        v-model="filterBy.txt"
        @input="filter"
      />
    </form>
  </section>
</template>
<script>
export default {
  name: "contact-filter",
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
    filter() {
      console.log(this.filterBy);
      this.$emit("filterList", { ...this.filterBy });
    },
  },
};
</script>