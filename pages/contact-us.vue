<template>
  <div class="wrapper">
    <section class="contact-section" id="header">
      <contactComponent />
    </section>
  </div>
</template>

<script>
import contactComponent from "../components/contact-us/contact.vue";

export default {
  name: "IndexPage",
  components: {
    contactComponent,
  },
};
</script>
