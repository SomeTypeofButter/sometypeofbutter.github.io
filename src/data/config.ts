export const siteConfig = {
  name: "JESSICA SUN",
  heroImage: "/Rookie-Cover.png", // Path to your hero background image
  links: {
    about: "/about",
    resume: "/resume.pdf",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/SomeTypeofButter", icon: "github" },
    { name: "Instagram", url: "https://www.instagram.com/", icon: "instagram" },
    { name: "ArtStation", url: "https://www.artstation.com/jessicasun", icon: "artstation" },
  ],
  projects: [
    {
      id: "the-anomaly",
      name: "THE ANOMALY",
      date: "2023-2024",
      description: "VR experience exploring information overload.",
      longDescription: "Description and\npurpose of the project\nDescription and\npurpose of the project",
      thumbnail: "/project-1.jpg",
      link: "/projects/the-anomaly",
      contentImages: [
        { url: "/anomaly-1.jpg" }, // First image (no sidebar text)
        { 
          url: "/anomaly-2.jpg",
          subtitle: "DRAFTING",
          description: "Description of the drafting goes here"
        },
        { 
          url: "/anomaly-3.jpg",
          subtitle: "DRAFTING",
          description: "Description of the drafting goes here"
        }
      ]
    },
    {
      id: "x-crawler",
      name: "X-CRAWLER",
      date: "2023",
      description: "Interactive card system and VR interactions.",
      longDescription: "Description and purpose of the X-Crawler project.",
      thumbnail: "/project-2.jpg",
      link: "/projects/x-crawler",
      contentImages: [
        { url: "/x-crawler-1.jpg" }
      ]
    },
    {
      id: "project-3",
      name: "PROJECT NAME",
      date: "2022",
      description: "Description of the Project",
      longDescription: "Detailed description of Project 3.",
      thumbnail: "/project-3.jpg",
      link: "/projects/3",
      contentImages: [
        { url: "/project-3-1.jpg" }
      ]
    }
  ]
};