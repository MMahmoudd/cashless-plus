<template>
  <div class="wrapper">
    <section class="header-section" id="header">
      <headerComponent />
    </section>
    <section class="design-section" id="design">
      <designComponent />
    </section>
    <section class="service-section" id="service">
      <servicesComponent />
    </section>
    <section class="clients-section" id="contact">
      <clientsComponent />
    </section>
  </div>
</template>

<script>
import headerComponent from "../components/Hompage/header.vue";
import designComponent from "../components/Hompage/design.vue";
import servicesComponent from "../components/Hompage/services.vue";
import clientsComponent from "../components/Hompage/clients.vue";

export default {
  name: "IndexPage",
  components: {
    headerComponent,
    designComponent,
    servicesComponent,
    clientsComponent,
  },
};
</script>
