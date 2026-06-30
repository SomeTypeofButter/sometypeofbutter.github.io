export interface ContentImage {
  youtubeId?: string;
  youtubeIdRow?: string[];
  imageRow?: string[];
  imageGrid?: string[];
  url?: string;
  subtitle?: string;
  description?: string;
  tags?: { label: string; text: string }[];
}

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
      date: "2026",
      tags: ["Unreal Engine", "VR"],
      software: ["Unreal Engine", "Marvelous Designer", "TouchDesigner", "MetaHuman"],
      description: "A surreal corporate horror experience about a nightmare onboarding.",
      longDescription: "An Immersive video that where a new employee's morning commute is violently interrupted when they are sucked through a kaleidoscopic city portal into a dystopian corporate office where workers are literal numbers and friendly balloon-executives are violently popped by giant hands. The protagonist abruptly wakes from this surreal nightmare to the chilling reality of their actual first day of work—complete with a forced welcome party mirroring the horrors they just witnessed.",
      thumbnail: "/OB-TB.png",
      link: "/projects/project-onboarding",
      contentImages: [
        { url: "/OB-Intro.png" },
        { youtubeId: "cYOegphVUF0" },
        {
          imageRow: ["/OB-GIF2.gif", "/OB-GIF1.gif", "/OB-GIF3.gif"]
        },
        {
          url: "/MoodBoard.png",
          subtitle: "MOODBOARD",
          tags: [
            { label: "Theme 1: Geometric City", text: "Inspired by the Tower of Babel, this theme uses geometric architecture to hint at hidden meanings. The space should feel familiar yet otherworldly, with the scale of objects feeling overwhelming." },
            { label: "Theme 2: Corporate Horror", text: "Inspired by Control and Severance, this theme manifests suppressed mental states by rendering employees as physical metaphors, transforming internal emotions into external visuals." }
          ]
        },
        {
          url: "/Storyboard.png",
          subtitle: "STORYBOARD",
          tags: [
            { label: "Pitch 1: Anomaly", text: "An anomaly is tearing the city apart, fusing skyscrapers and streets into a massive, floating orb to imprison its own Architect at the core. The player will transport into the layers of the anomaly and free the Architect." },
            { label: "Pitch 2: Human Resources", text: "A worker's cheerful mind filter hides the horrific reality that their simple desk job is recycling dead colleagues." }
          ]
        },
        {
          imageGrid: ["/Illust_0.png", "/Illust_1.png", "/Illust_2.png", "/Illust_3.png", "/Illust_4.png", "/Illust_5.png"],
          subtitle: "FINAL NARRATIVE",
          description: "Fusing both initial themes, the final narrative is anchored by an infinity motif — dream logic that lets the viewer loop endlessly through surreal urban and corporate landscapes. The geometric city and corporate horror worlds collapse into one another, creating a seamless cycle where the boundaries between commute, nightmare, and office dissolve into a single, inescapable reality."
        },
        {
          url: "/Onboarding_4.png",
          subtitle: "CHARACTER DESIGN",
          description: "Characters embodied the dehumanizing corporate theme—office workers rendered as indistinguishable numerical entities in identical gray suits, their faces replaced by flickering employee IDs, while executive \"balloon-heads\" floated on elongated necks awaiting their inevitable popping. The giant hands orchestrating this chaos remained abstract, sleeve-shrouded forces of authority. Contrasting color focal point: warm amber-gold portal light spilled from the kaleidoscopic rift, cutting sharply through the cold blue-gray corporate palette to draw the viewer's eye toward the surreal escape route."
        },
        {
          url: "/TechnicalPipeline.png",
          subtitle: "TECHNICAL PIPELINE & PROBLEM SOLVING",
          description: "The development required shifting between liberal storyboarding and conservative execution. While Houdini was initially considered, I pivoted to Unreal Engine's native cloners for efficiency. Marvelous Designer suits and TouchDesigner video feeds were successfully integrated, forcing a constant balance between learning complex new software and delivering on execution."
        },
        {
          url: "/Unused.png",
          subtitle: "UNUSED MATERIALS",
          description: "Unused concept materials including Initial Anomaly designs and Character sketches."
        }
      ] as ContentImage[]
    },
    {
      id: "cubicle-obj",
      name: "CUBICLE.OBJ",
      date: "2025",
      tags: ["UAL", "Unreal Engine", "3D Film"],
      software: ["Unreal Engine", "Maya", "Blender", "After Effects"],
      description: "3D animated short exploring the authority of the digital artist.",
      longDescription: "A Year 1 Immersive Media and Mixed Reality assignment from UAL.\n\nIn an abstract plane of cubicles, a colossal set of hands descends to solve a massive Rubik's Cube architectural structure. CUBICLE.OBJ is a surreal 3D animated short exploring the absolute authority of the digital artist—a visual glorification of the god-like power a creator wields within their virtual canvas.",
      thumbnail: "/Thumbnail-Cubicle.png",
      link: "/projects/cubicle-obj",
      contentImages: [
        { url: "/Cubicle-Cover.png" },
        {
          youtubeId: "ToRvegdSOmk",
          subtitle: "THE NARRATIVE",
          description: "The film opens in a realm of uniform cubicles centered around a massive Rubik's cube. Colossal hands solve the structure, causing it to explode into a 'city seed'. The hands plant this seed, rapidly spawning a city and painting procedural foliage into existence. Finally, the hands pull back and reach out of a computer monitor, breaking the fourth wall to reveal the entire world was a digital simulation."
        },
        {
          url: "/Planning-cubcile.png",
          subtitle: "ARCHITECTURAL RESEARCH",
          description: "Inspired by Habitat 67's 'Metabolism' and Le Corbusier's 'Bottle Rack' concepts, the environment encapsulates surrealism and brutalism. The design envisions cubicles as growing, adaptable organisms within massive, machine-like urban structures."
        },
        {
          url: "/Storyboard-Cubicle.png",
          subtitle: "STORYBOARD",
          description: "While quick and rough, this storyboard outlines core actions like the hands solving the cube. I left the compositions loose to allow room for experimentation and learning Unreal Engine's specific animation tools."
        },
        {
          url: "/DesignModeling-Cubicle.png",
          subtitle: "DESIGN AND MODELING",
          description: "I focused on recognizable geometric shapes and thought about how they might operate. The tendency towards cubic shapes allowed for quick creations of city meshes. This helped master the use of extrusions."
        },
        {
          url: "/ClonerGeneration.png",
          subtitle: "PROCEDURAL PIPELINE",
          description: "The Cloner plugin became the backbone of the entire visual language in CUBICLE.OBJ. It drove the rippling planes across the cubicle landscape, the rising wave of buildings spawning from the city seed, and the formation of the central void. Animators created oscillating sine-based movements for subtle floating and breathing effects with minimal keyframing. Procedural static mesh instancing allowed cubes to replicate outward in staggered wave formations—turning a single asset into an endlessly propagating architectural pattern, embodying the project's theme of digital abundance and god-like creative authority."
        },
        {
          url: "/Rotation-Cubicle.png",
          subtitle: "THE ROTATION PROBLEM",
          description: "By hiding visibilities of multiple meshes, the use of blueprints and rigging can be avoided."
        }
      ]
    }
  ]
};
