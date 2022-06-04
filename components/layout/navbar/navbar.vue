<template>
  <div class="navbar-component">
    <b-navbar toggleable="lg" type="dark">
      <div class="container-fluid">
        <b-navbar-brand to="/" class="brand">
          <img src="@/assets/images/logoW.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about-us">About US</b-nav-item>
            <b-nav-item to="/contact-us">Contact Us</b-nav-item>
            <b-nav-item to="/partners">Partners</b-nav-item>
            <b-nav-item to="/services">Services</b-nav-item>
            <b-nav-item to="/contact-us">Events</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
