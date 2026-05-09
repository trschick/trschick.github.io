export const SITE = {
  website: "https://trschick.github.io/",
  author: "trschick",
  profile: "https://github.com/trschick",
  desc: "A personal blog and portfolio.",
  title: "trschick's Website",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Bangkok",
} as const;
