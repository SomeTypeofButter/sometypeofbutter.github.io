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
      date: "2025",
      tags: ["Unreal Engine", "VR", "UAL"],
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
      date: "2025",
      tags: ["Unreal Engine", "VR"],
      description: "Interactive card system and VR interactions.",
      longDescription: "Description and purpose of the X-Crawler project.",
      thumbnail: "/project-2.jpg",
      link: "/projects/x-crawler",
      contentImages: [
        { url: "/x-crawler-1.jpg" }
      ]
    },
    {
      id: "cubicle-obj",
      name: "CUBICLE.OBJ",
      date: "2025",
      tags: ["UAL", "Unreal Engine", "Maya", "Blender", "After Effects"],
      description: "3D animated short exploring the authority of the digital artist.",
      longDescription: "Unreal Engine, Maya, Blender, After Effects.\n\nA Year 1 Immersive Media and Mixed Reality assignment from UAL.\n\nIn an abstract plane of cubicles, a colossal set of hands descends to solve a massive Rubik's Cube architectural structure. CUBICLE.OBJ is a surreal 3D animated short exploring the absolute authority of the digital artist—a visual glorification of the god-like power a creator wields within their virtual canvas.",
      thumbnail: "/project-3.jpg",
      link: "/projects/cubicle-obj",
      contentImages: [
        { url: "" }, 
        { 
          youtubeId: "ToRvegdSOmk",
          subtitle: "THE NARRATIVE",
          description: "The film opens in a vast realm of uniform cubicles. At its center sits a gigantic structure resembling a Rubik's cube. Colossal hands emerge to solve it. Upon aligning the colors of their windows, the cube explodes, revealing the city seed: a cube with buildings growing on its planes."
        },
        { 
          url: "",
          subtitle: "THE CREATION",
          description: "The hands plant this seed into the cubicle plane below, and a city is born rapidly. The creator’s hands sweep across the environment, painting procedural foliage into existence. It also reaches into a hole in the ground, twisting a giant pillar to activate water."
        },
        { 
          url: "",
          subtitle: "THE REVEAL",
          description: "Finally, the hands reach upward and pull out of a computer monitor, breaking the fourth wall and revealing that it was all a simulation—a testament to the sweeping, instantaneous process of digital creation."
        }
      ]
    }
  ]
};