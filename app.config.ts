export default defineAppConfig({
  docus: {
    title: 'Station',
    description: 'The best place to start your season of Discovery',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'markdowngod',
      github: 'markdowngod',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'sod',
      owner: 'markdowngod',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
