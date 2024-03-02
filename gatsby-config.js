/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: '岡山で探偵実績50年以上 │ 浮気調査は総合探偵社中央リサーチ岡山',
    keyword: '探偵,岡山,興信所,浮気調査,不倫調査,結婚調査,家出調査,中央リサーチ岡山',
    description: '岡山の探偵調査は信頼と実績の中央リサーチ岡山におまかせください。浮気・不倫調査・各調査も24時間受付。ご相談は無料。お客様のご相談内容に応じて、専門の相談・調査員がご対応し問題解決に向けて全力でお力になります。',
    image: '/images/chuou-okayama_ogp.jpg',
    url: 'https://detective-okayama.biz',
    siteUrl: 'https://detective-okayama.biz',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90, //デフォルトは50
        },
      },
    },

    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'detective-okayama',
        apis: [
          {
            endpoint: 'posts',
          },
          {
            endpoint: 'category',
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://detective-okayama.biz`,
      },
    },

    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/',
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'detective-okayama.biz', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `          
          ErrorDocument 404 /error_pages/404.html
        `,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 50000,
        resolveSiteUrl: () => 'https://detective-okayama.biz',
      },
    },

    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://detective-okayama.biz', // サイトのベースURLを指定
        sitemap: 'https://detective-okayama.biz/sitemap-index.xml', // サイトマップのURLを指定
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

    'gatsby-plugin-netlify',
  ],
};
