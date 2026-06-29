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
      id: "project-onboarding",
      name: "PROJECT ONBOARDING",
      date: "2025",
      tags: ["Unreal Engine", "VR"],
      description: "A surreal corporate horror experience about a nightmare onboarding.",
      longDescription: "Project Onboarding is an immersive Unreal Engine experience combining surreal, abstract elements with corporate horror and dark satire.\n\nA new employee's morning commute is violently interrupted when they are sucked through a kaleidoscopic city portal into a dystopian corporate office where workers are literal numbers and friendly balloon-executives are violently popped by giant hands. The protagonist abruptly wakes from this surreal nightmare to the chilling reality of their actual first day of work—complete with a forced welcome party mirroring the horrors they just witnessed.",
      thumbnail: "/project-2.jpg",
      link: "/projects/project-onboarding",
      contentImages: [
        { youtubeId: "4Nhvi3AhdBo" }, // Main large video
        {
          youtubeIdRow: ["SyYjXhg-plY", "4EMc5AhUi0Q", "9VvTEKnEfps"],
          subtitle: "THE PLANNING",
          description: "The environment was broken into five core spaces: a Kaleidoscopic Portal, a Glass Tunnel, an Infinite Commute labyrinth, a Panopticon Floor, and a hyper-realistic Reality Office finale."
        },
        {
          url: "",
          subtitle: "THE PROCESS",
          description: "Complex animation stitching was required to choreograph interactions between hyper-realistic MetaHuman eyes, physics-driven balloon heads, and giant hands. Procedural geometry, leveraging Unreal Engine's Cloner plugin, powered the hypnotic portal suction by building the spiral and moving tunnel architectures. Adjusting pacing, scale, and spatial presence in VR was critical to ensure comfort while maintaining the imposing feeling of giantism and confinement."
        },
        {
          url: "",
          subtitle: "THE RESULT",
          description: "A dream-logic horror experience exploring themes of dehumanization and toxic company culture. The horrific events in the simulation directly mirror and foreshadow the seemingly innocent 'welcome party' at the end—reframing the visual chaos as an externalization of psychological anxiety regarding work."
        },
        {
          url: "",
          subtitle: "TECHNICAL PIPELINE & PROBLEM SOLVING",
          description: "The development required shifting between liberal storyboarding and conservative execution. While Houdini was initially considered, I pivoted to Unreal Engine's native cloners for efficiency. Marvelous Designer suits and TouchDesigner video feeds were successfully integrated, forcing a constant balance between learning complex new software and delivering on execution."
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
          description: "The film opens in a realm of uniform cubicles centered around a massive Rubik's cube. Colossal hands solve the structure, causing it to explode into a 'city seed'. The hands plant this seed, rapidly spawning a city and painting procedural foliage into existence. Finally, the hands pull back and reach out of a computer monitor, breaking the fourth wall to reveal the entire world was a digital simulation."
        },
        { 
          url: "",
          subtitle: "ARCHITECTURAL RESEARCH",
          description: "Inspired by Habitat 67's 'Metabolism' and Le Corbusier's 'Bottle Rack' concepts, the environment encapsulates surrealism and brutalism. The design envisions cubicles as growing, adaptable organisms within massive, machine-like urban structures."
        },
        { 
          url: "",
          subtitle: "PROCEDURAL PIPELINE",
          description: "The project relied heavily on Unreal Engine's Motion Design tools. Cloners and effectors were utilized to animate rippling planes, rising cities, and procedural foliage. The complex Rubik's cube rotations were achieved by seamlessly swapping mesh visibilities to bypass rigid rigging."
        },
        { 
          url: "",
          subtitle: "ENVIRONMENT & MATERIALS",
          description: "The surreal aesthetic was enhanced using particle simulators, custom LED screen shaders, and rippling water materials. Post-production in After Effects brought the final composition together with motion tracking, Lumetri color correction, and dynamic editing."
        },
        { 
          url: "",
          subtitle: "TECHNICAL PIPELINE & PROBLEM SOLVING",
          description: "Producing Cube Realm required balancing modern simulations with manual techniques. While Unreal Engine offers sophisticated physics, my initial tests showed they weren't efficient for controlling the Rubik's cube. I solved this by breaking the structure into 27 individual meshes, grouping them, and manually animating them in the Sequencer—weighing technical cost against creative reward. I also utilized Blender's shape keys for specific paintbrush deformations and integrated a motion plugin to bypass heavy Blueprint scripting, ensuring production stayed on schedule."
        }
      ]
    }
  ]
};