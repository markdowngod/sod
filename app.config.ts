export default defineAppConfig({
  docus: {
    title: 'S3',
    description: 'The best place to start your Season of Discovery',
    image: '',
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
    },
    footer: {
      credits: false
      },
    },
})
