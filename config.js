const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://trustle.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.trustle.com/icons/icon-48x48.png',
    logoLink: 'https://trustle.io',
    title:
      "<a href='https://trustle.io'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",    
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/TrustleSecurity" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'dev_learn',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Trustle', link: 'https://trustle.io' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://hasura.io/learn/'>Trustle </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>-</a>",
  },
  siteMetadata: {
    title: 'Learn | Trustle',
    description: 'Documentation for Trustle ',
    ogImage: null,
    docsLocation: '', // disabled Edit on Github link
    favicon: 'https://www.trustle.com/icons/icon-48x48.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
