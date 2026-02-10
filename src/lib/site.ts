export type InsightItem = {
  title: string;
  summary: string;
  tags: string[];
  url: string;
};

export const siteConfig = {
  contactEmail: "mar@robotsgoodorbad.com",
  insights: [
    {
      title: "Robot Readiness Overview",
      summary:
        "A broad introduction to how people assess readiness for robots in everyday environments.",
      tags: ["Readiness", "Overview"],
      url: "https://robotsgoodorbad.com/robot-readiness/",
    },
    {
      title: "Robot Readiness Research",
      summary:
        "A research-focused look at readiness themes and what they reveal about adoption decisions.",
      tags: ["Research", "Readiness"],
      url: "https://robotsgoodorbad.com/robot-readiness-research/",
    },
    {
      title: "Life With Robots",
      summary:
        "A practical view of how robots are perceived in day-to-day life and routines.",
      tags: ["Daily life", "Usage"],
      url: "https://robotsgoodorbad.com/life-with-robots/",
    },
    {
      title: "Robot Discussion Themes",
      summary:
        "A synthesis of recurring conversation themes that shape public sentiment about robots.",
      tags: ["Sentiment", "Themes"],
      url: "https://robotsgoodorbad.com/robot-discussion-themes/",
    },
    {
      title: "Robot Enthusiast",
      summary:
        "A profile of people who are highly positive about robot adoption and use.",
      tags: ["Audience segment", "Positive"],
      url: "https://robotsgoodorbad.com/robot-enthusiast/",
    },
    {
      title: "Robot Practical",
      summary:
        "A profile of people who evaluate robots mainly through practical value and utility.",
      tags: ["Audience segment", "Practical"],
      url: "https://robotsgoodorbad.com/robot-practical/",
    },
    {
      title: "Robot Curious",
      summary:
        "A profile of people who are open to robots but still forming clear expectations.",
      tags: ["Audience segment", "Curious"],
      url: "https://robotsgoodorbad.com/robot-curious/",
    },
    {
      title: "Robot Hesitant",
      summary:
        "A profile of people who see potential but remain cautious about adoption.",
      tags: ["Audience segment", "Hesitant"],
      url: "https://robotsgoodorbad.com/robot-hesitant/",
    },
    {
      title: "Robot Phobic",
      summary:
        "A profile of people who express strong concern or fear about robots in daily life.",
      tags: ["Audience segment", "Concern"],
      url: "https://robotsgoodorbad.com/robot-phobic/",
    },
    {
      title: "Robot Hater",
      summary:
        "A profile of people who are firmly opposed to robot adoption and integration.",
      tags: ["Audience segment", "Opposition"],
      url: "https://robotsgoodorbad.com/robot-hater/",
    },
  ] as InsightItem[],
};
