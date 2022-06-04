export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    // import: "splitting/dist/splitting.css",
    // import: "splitting/dist/splitting-cells.css",
    head: {
        title: "cashless-plus",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/logo.png" },
            {
                rel: "stylesheet",
                href: "https://use.fontawesome.com/releases/v5.9.0/css/all.css",
            },
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css",
            },
            // {
            //     rel: "stylesheet",
            //     href: "https://unpkg.com/splitting/dist/splitting.css",
            // },
            // {
            //     rel: "stylesheet",
            //     href: "https://unpkg.com/splitting/dist/splitting-cells.css",
            // },
        ],
        // script: [{ src: "https://unpkg.com/splitting/dist/splitting.min.js" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/style/main.scss",
        "swiper/dist/css/swiper.css",
        "splitting/dist/splitting.css",
        "splitting/dist/splitting-cells.css",
        "animate.css/animate.min.css",
        "aos/dist/aos.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/swiper", ssr: false },
        { src: "~/plugins/scroll", ssr: false },
        { src: "~/plugins/splitting", ssr: false },
        { src: "~/plugins/scrollOut", ssr: false },
        { src: "~/plugins/aos", ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        "@nuxtjs/pwa",
    ],
    pwa: {
        meta: {
            title: "Cashless Plus",
            author: "Cashless Plus",
        },
        manifest: {
            name: "Cashless Plus",
            short_name: "Cashless Plus",
            description: "Welcome in Cashless Plus",
            lang: "en",
            display: "standalone",
            start_url: "/?standalone=true",
        },
        icon: {
            source: "@/static/logo.png",
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};