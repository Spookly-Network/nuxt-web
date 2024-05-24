// https://nuxt.com/docs/api/configuration/nuxt-config

import {createResolver} from '@nuxt/kit';
import path from "node:path";

const {resolve} = createResolver(import.meta.url)

export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        '~/assets/css/main.css',
        '~/assets/css/poppins.css',
        '~/assets/css/grid/bootstrap-grid.css',
        '~/assets/css/fonts/brands.min.css',
        '~/assets/css/fonts/regular.min.css',
        '~/assets/css/fonts/fontawesome.min.css'
    ],

    plugins: ['~/plugins/v-click-outside.ts'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ['@nuxtjs/sitemap', '@nuxt/content', '@nuxtjs/i18n', "@nuxt/image", '@nuxtjs/seo'],

    image: {
        format: ['webp'],
        screens: {
            'xs': 320,
            'sm': 576,
            'md': 768,
            'lg': 992,
            'xl': 1200,
            'xxl': 1400,
            '2xl': 1400
        },
    },

    i18n: {
        locales: [
            {
                code: 'de',
                iso: 'de-DE',
                name: 'Deutsch',
                file: resolve('./lang/de.json'),
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: resolve('./lang/en.json'),
            }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        langDir: './lang',
    },

    content: {
        contentHead: true,
        sources: {
            // en: {
            //     driver: 'fs',
            //     prefix: '/blog',
            //     base: path.resolve('./content')
            // },
            // de: {
            //     driver: 'fs',
            //     prefix: '/de/blog',
            //     base: path.resolve('./content')
            // },
            github_en: {
                prefix: '/blog', // Prefix for routes used to query contents
                driver: 'github', // Driver used to fetch contents (view unstorage documentation)
                repo: "Spookly-Network/blog",
                branch: "main",
                dir: "en", // Directory where contents are located. It could be a subdirectory of the repository.
            },
            github_de: {
                prefix: '/de/blog', // Prefix for routes used to query contents
                driver: 'github', // Driver used to fetch contents (view unstorage documentation)
                repo: "Spookly-Network/blog",
                branch: "main",
                dir: "de", // Directory where contents are located. It could be a subdirectory of the repository.
            },
        }
    }
})