<template>
  <div class="wrapper">
    <section class="whoWeAre-section" id="header">
      <whoWeAreComponent />
    </section>
    <section class="team-section" id="team">
      <teamComponent />
    </section>
    <section class="steps-section" id="steps">
      <stepsComponent />
    </section>
  </div>
</template>

<script>
import whoWeAreComponent from "../components/aboutUs/whoWeAre.vue";
import teamComponent from "../components/aboutUs/team.vue";
import stepsComponent from "../components/aboutUs/steps.vue";

export default {
  name: "IndexPage",
  components: {
    whoWeAreComponent,
    teamComponent,
    stepsComponent,
  },
};
</script>
