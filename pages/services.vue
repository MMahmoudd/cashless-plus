<template>
  <div class="wrapper">
    <section class="services-section" id="services">
      <servicesComponent />
    </section>
    <section class="technology-section" id="technology">
      <technologyComponent />
    </section>
  </div>
</template>

<script>
import servicesComponent from "../components/servicesPage/services.vue";
import technologyComponent from "../components/servicesPage/technology.vue";

export default {
  name: "IndexPage",
  components: {
    servicesComponent,
    technologyComponent,
  },
};
</script>
