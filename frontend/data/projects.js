const basePath = process.env.NODE_ENV === "production" ? "/neon-portfolio" : "";

const projects = [
  {
    id: 1,

    title: {
      id: "BimaMall",
      en: "BimaMall",
    },

    summary: {
      id: "Platform e-commerce game dengan antarmuka responsif.",
      en: "A game e-commerce platform with a responsive interface.",
    },

    impact: {
      id: "Dashboard menampilkan seluruh produk dan harga sehingga lebih mudah dikelola dan dicari.",
      en: "The dashboard displays all products and prices for easier management and search.",
    },

    tools: ["Vue.js", "Express.js", "Node.js", "MongoDB"],

    image: `${basePath}/projects/images/BimaMall.png`,
    link: "https://github.com/inibima/BimaMall_latihan",
    video: `${basePath}/projects/videos/Review Bimamall.mp4`,
  },

  {
    id: 2,

    title: {
      id: "Portfolio 1.0",
      en: "Portfolio 1.0",
    },

    summary: {
      id: "Website portfolio versi awal untuk menampilkan profil dan project.",
      en: "An early portfolio website for showcasing profile and projects.",
    },

    impact: {
      id: "Menjadi fondasi awal untuk membangun identitas dan dokumentasi project.",
      en: "Served as the initial foundation for building a project portfolio and personal identity.",
    },

    tools: ["Vue.js"],

    image: `${basePath}/projects/images/Portfolio 1.0.png`,
    link: "https://github.com/inibima/Website-porto-Latihan",
    video: `${basePath}/projects/videos/Review Portfolio 1.0.mp4`,
  },

  {
    id: 3,

    title: {
      id: "InvestasiBima",
      en: "InvestasiBima",
    },

    summary: {
      id: "Platform edukasi dan informasi mengenai peluang investasi di industri video game.",
      en: "An educational and informational platform about investment opportunities in the video game industry.",
    },

    impact: {
      id: "Menyajikan informasi edukatif mengenai industri video game dan peluang investasinya.",
      en: "Provides educational information about the video game industry and its investment opportunities.",
    },

    tools: ["Vue.js", "Firebase", "Bootstrap"],

    image: `${basePath}/projects/images/InvestasiBima.png`,
    link: "https://github.com/inibima/Investasibima",
    video: `${basePath}/projects/videos/Review InvestasiBima.mp4`,
  },

  {
    id: 4,

    title: {
      id: "Video Game Encyclopedia",
      en: "Video Game Encyclopedia",
    },

    summary: {
      id: "Ensiklopedia digital untuk mengumpulkan dan menyajikan informasi mengenai video game.",
      en: "A digital encyclopedia for collecting and presenting information about video games.",
    },

    impact: {
      id: "Mempermudah pencarian dan penyajian informasi video game dalam satu platform.",
      en: "Makes video game information easier to search and explore in one platform.",
    },

    tools: ["React", "Firebase"],

    image: `${basePath}/projects/images/Video Game Encyclopedia.png`,
    link: "https://github.com/inibima/Bimapedia",
    video: `${basePath}/projects/videos/Review Video Game Encyclopedia.mp4`,
  },
];

export default projects;
