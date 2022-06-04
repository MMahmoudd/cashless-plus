<template>
  <div class="wrapper">
    <section class="partners-section" id="partners">
      <partnersComponent />
    </section>
  </div>
</template>

<script>
import partnersComponent from "../components/partners/partners.vue";

export default {
  name: "IndexPage",
  components: {
    partnersComponent,
  },
};
</script>
