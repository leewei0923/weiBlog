import { TConfig } from "@/types/config.type";

export const Config: TConfig = {
  // Image url for avatar.
  AvatarURL: "/images/avatar.jpg",
  // Your favorite motto, or a brief self-introduction, for homepage display
  Sentence:
    "do you want to do, don't tell anyone.",
  // Your nickname, or pen name here.
  Nickname: "leewei",

  // Website main title.
  SiteTitle: "LEEWEI BLOG",
  // Your domain for website.
  SiteDomain: "",

  // For the cover image displayed on the homepage, the recommended image aspect ratio is 4:1.
  PageCovers: {
    websiteCoverURL: "/images/cover.jpg",
  },

  // Your social platform IDs, and email address.
  SocialLinks: {
    twitter: "Leewei60269181", // Twitter ID
    // instagram: "example", // Instagram ID
    github: "leewei0923", // Github ID
    // facebook: "example", // Facebook ID
    // linkedin: "example", // Linkedin ID
    // mastodon: "https://mas.to/@example", // Mastodon link
    email: "leewei2547@gmail.com", // Email address, required.
  },

  // Giscus Configure. Please refer to the https://giscus.app for entire instruction
  Giscus: {
    enabled: true,
    repo: ``,
    repoId: "",
    category: "",
    categoryId: "",
  },

  // Enable the RSS Feed? If not, the feed file will not be generated and the feed entrance will be closed.
  RSSFeed: {
    enabled: false,
  },

  // The supported sponsor ways are wechat-pay, alipay and paypal.
  SponsorLink: {
    // Your WechatPay QRCode Content.
    wechatPay: "",
    // Your Alipay Link.
    alipay: "",
    // Your Paypal Account Link.
    paypal: "",
  },

  // Website establishment year.
  YearStart: 2023,
  // Please enter your legal name for use with the copyright mark.
  AuthorName: "leewei",
};
