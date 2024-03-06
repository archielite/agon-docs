import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/agon/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/agon/releases' },
      { text: 'Upgrade Guide', link: '/agon/upgrade' },
    ]
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/agon/installation' },
      { text: 'SSL', link: '/agon/ssl' },
      { text: 'License', link: '/agon/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage',  link: '/agon/usage-homepage' },
      { text: 'Setup menus',  link: '/agon/usage-menus' },
      { text: 'Setup theme options',  link: '/agon/usage-theme-options' },
      { text: 'Widgets', link: '/agon/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/agon/usage-custom-css-js' },
      { text: 'Translation', link: '/agon/usage-translation' },
      { text: 'Multi-language', link: '/agon/usage-multi-language' },
      { text: 'Currencies', link: '/agon/usage-currencies' },
      { text: 'Location', link: '/agon/usage-location' },
      { text: 'Analytics', link: '/agon/usage-analytics' },
      { text: 'Media - Setup Amazon S3', link: '/agon/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/agon/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/agon/usage-media-wasabi' },
      { text: 'Setup email', link: '/agon/usage-email' },
      { text: 'Invoice template', link: '/agon/invoice-template' },
    ],
  }
] satisfies DefaultTheme.SidebarItem[]
