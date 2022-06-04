import Vue from "vue";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
import Splitting from "splitting/dist/splitting";
// import ScrollOut from "scroll-out";

Vue.use(
    Splitting({
        whitespace: true,
        targets: "[data-splitting]",
        by: "chars",
        key: null,
    })

    // ScrollOut({
    //     targets: "[data-splitting]",
    // })
);
