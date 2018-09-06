module.exports = {
    title: "it's me",
    description: "portfolio",
    base: "/",
    themeConfig: {
        search: false,
      logo: "/logo.png",
      footer: "Ⓒ 2018",
      nav: [
        { text: "About", link: "/", position: "left", external: false },
        { text: "Projects", link: "/projects/", position: "left", external: false },
        { text: "Twitter", link: "https://www.twitter.com/itsnunolemos/", position: "left", external: true }
      ]
    },
    head: [
      ['link', { rel: "icon", href: "logo.png" }]
    ],
    markdown: {
      anchor: {
        permalink: false
      }
    }
  };