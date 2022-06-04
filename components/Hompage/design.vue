<template>
  <div class="design-component">
    <div class="container">
      <h2 class="headr-text">
        Product design is the reason why our partners first consult us, and we
        often enrich the project by exploring ux/ui
      </h2>
      <div class="row" data-aos="fade-up" data-aos-duration="1500">
        <div class="col-md-4">
          <h4>DEVELOPMENT</h4>
          <ul>
            <li v-for="(item, i) in devlopment" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>CREATIVE & DESIGN</h4>
          <ul>
            <li v-for="(item, i) in design" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>STRATEGY</h4>
          <ul>
            <li v-for="(item, i) in strategy" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid" data-aos="fade-up" data-aos-duration="1500">
      <div class="image">
        <img src="@/assets/images/about-1.jpg" alt="about" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devlopment: [
        "Responsive developement",
        "Websites & Web Applications",
        "Native Applications",
        "E-Commerce",
        "Creative Front & Back End",
        "CMS",
      ],
      design: [
        "Design Direction",
        "Wireframing & Prototyping",
        "Branding & Identity",
        "Storytelling",
        "Creative Concepts & Ideas",
        "Web and Mobile UI",
        "App Design",
        "User Experience",
      ],
      strategy: [
        "Digital Strategy",
        "Content Strategy",
        "Social Media Campaigns",
        "Sharable Content",
        "Customer Journey Map",
        "User Research",
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
