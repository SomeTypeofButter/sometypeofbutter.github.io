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
      id: "project-onboarding",
      name: "PROJECT ONBOARDING",
      date: "2025",
      tags: ["Unreal Engine", "VR"],
      description: "A surreal corporate horror experience about a nightmare onboarding.",
      longDescription: "Project Onboarding is an immersive Unreal Engine experience combining surreal, abstract elements with corporate horror and dark satire.\n\nA new employee's morning commute is violently interrupted when they are sucked through a kaleidoscopic city portal into a dystopian corporate office where workers are literal numbers and friendly balloon-executives are violently popped by giant hands. The protagonist abruptly wakes from this surreal nightmare to the chilling reality of their actual first day of work—complete with a forced welcome party mirroring the horrors they just witnessed.",
      thumbnail: "/project-2.jpg",
      link: "/projects/project-onboarding",
      contentImages: [
        { url: "" },
        {
          url: "",
          subtitle: "THE PLANNING",
          description: "The environment was broken into five core spaces: a Kaleidoscopic Portal, a Glass Tunnel, an Infinite Commute labyrinth, a Panopticon Floor, and a hyper-realistic Reality Office finale."
        },
        {
          url: "",
          subtitle: "THE PROCESS",
          description: "Complex animation stitching was required to choreograph interactions between hyper-realistic MetaHuman eyes, physics-driven balloon heads, and giant hands. Procedural geometry and Chaos physics powered the hypnotic portal suction."
        },
        {
          url: "",
          subtitle: "THE RESULT",
          description: "A dream-logic horror experience exploring themes of dehumanization and toxic company culture. The horrific events in the simulation directly mirror and foreshadow the seemingly innocent 'welcome party' at the end."
        }
      ]
    },
    {
      id: "cubicle-obj",
      name: "CUBICLE.OBJ",
      date: "2025",
      tags: ["UAL", "Unreal Engine", "3D Film"],
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