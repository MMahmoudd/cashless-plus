<template>
  <div class="services-component team-component contactForm-component">
    <P class="hint" data-aos="fade-up" data-aos-duration="1500">Contact us</P>
    <h1 class="headr-text" data-aos="fade-up" data-aos-duration="1500">
      Let’s Talk
    </h1>
    <div class="map" data-aos="fade-left" data-aos-duration="1500">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.804931800028!2d31.3671735148235!3d30.09977252291223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458161249e63a21%3A0xe64eae8a320c7875!2sEl-Mosheer%20Ahmed%20Ismail%20St%2C%20Sheraton%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1627752451453!5m2!1sen!2seg"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-7 form-color"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <b-form v-if="show">
            <div class="row">
              <div class="col-md-6">
                <b-form-group
                  id="input-group-2"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="You`ll never See Any Ads"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group
                  id="input-group-3"
                  label="Phone Number"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.phone"
                    placeholder="Your Phone Number"
                    required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-12">
                <b-form-group
                  id="input-group-1"
                  label="Your message (optional)"
                  label-for="textarea"
                >
                  <b-form-textarea
                    id="textarea"
                    v-model="form.message"
                    rows="4"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </div>
            </div>

            <b-button type="submit" variant="primary">Get a quote</b-button>
          </b-form>
        </div>
        <div
          class="col-md-5 form-color"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div class="infoData">
            <div class="d-flex justify-content-between py-5">
              <div class="email">
                <h4>Email us</h4>
                <a href="mailto:hello@varberg.com">hello@varberg.com</a>
              </div>
              <div class="phone">
                <h4>Call us</h4>
                <a href="tel:+987-432-0023">987-432-0023</a>
              </div>
            </div>
            <div class="office py-5">
              <h4>Our Office</h4>
              <p class="address">
                1444 S. Alameda Street Los Angeles, California 90021
              </p>
            </div>
            <div class="social py-5">
              <h4>Social Media</h4>
              <div class="d-flex justify-content-between">
                <a href="#" rel="noopener noreferrer">Facebook</a>
                <a href="#" rel="noopener noreferrer">Twitter</a>
                <a href="#" rel="noopener noreferrer">instagram</a>
                <a href="#" rel="noopener noreferrer">Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        phone: "",
        message: "",
      },
      show: true,
    };
  },
  created() {},
  methods: {},
};
</script>
