<template>
  <div class="header-component">
    <!-- Swiper -->
    <div class="swiper-container">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/slider-1.jpg" alt="screen-1" />
            <div class="content">
              <div class="overlay">
                <div class="splitting d-flex">
                  <span v-for="(char, i) in text1" :key="i">
                    <div
                      class="char"
                      v-for="(item, n) in char.split('')"
                      :key="n"
                    >
                      {{ item != " " ? item : "&nbsp;" }}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/slider-2.jpg" alt="screen-2" />
            <div class="content">
              <div class="overlay">
                <div class="splitting d-flex">
                  <span v-for="(char, i) in text1" :key="i">
                    <div
                      class="char"
                      v-for="(item, n) in char.split('')"
                      :key="n"
                    >
                      {{ item != " " ? item : "&nbsp;" }}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/slider-3.jpg" alt="screen-3" />
            <div class="content">
              <div class="overlay">
                <div class="splitting d-flex">
                  <span v-for="(char, i) in text1" :key="i">
                    <div
                      class="char"
                      v-for="(item, n) in char.split('')"
                      :key="n"
                    >
                      {{ item != " " ? item : "&nbsp;" }}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: ["a ", "digital ", "agency ", "based ", "in ", "Newyork"],
      swiperOption: {
        loop: true,
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 5000,
        },
      },
    };
  },
  created() {},
  methods: {},
};
</script>
