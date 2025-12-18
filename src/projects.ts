export interface Project {
  number: string;
  title: string;
  description: string;
  achievements?: string[];
  tech: string[];
  link?: string;
  // New fields for detailed pages
  fullDescription?: string;
  image?: string;
  details?: {
    model?: string;
    toolchain?: string;
    app?: string;
    techIntegration?: string;
  };
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    number: "001",
    title: "Multiscale Optimization of Weav3D Lattice-Reinforced Composites",
    description: "Master's Thesis",
    achievements: [
      "Developed automated multiscale optimization workflow integrating homogenization to evaluate 100+ designs.",
      "Applied surrogate modeling techniques to enable efficient design optimization across large parameter spaces.",
      "Developed Python scripts to parameterize geometry and post process results, reducing analysis time by 60%",
      "Reduced baseline composite panel mass by 20% through optimization while meeting strain constraints",
    ],
    tech: ["Python", "FEA", "Optimization", "Composite Materials", "MATLAB"],
    fullDescription: "-",
    details: {
      model: "-",
      toolchain: "-",
      app: "-",
      techIntegration: "-",
    },
  },
  {
    number: "002",
    title: "Comparative Study of Different Drone Structures",
    description: "Senior Design Project",
    achievements: [
      "Designed and simulated multirotor UAV drone frames using ANSYS and Fluent to compare performance and mass.",
      "Assembled and tested prototypes using 3D printing and integrated microcontrollers with sensors for real-time data acquisition.",
      "Conducted 20+ iterative flight tests and structural tweaks, achieving an 18% gain in endurance and efficiency.",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "CNN",
      "Edge Impulse",
      "Streamlit",
      "Audio Processing",
    ],
    fullDescription: "-",
    image: "/projects/hearme.png", // You'll need to add images
    details: {
      model: "-",
      toolchain: "-",
      app: "-",
      techIntegration: "-",
    },
    demoLink: "link",
    githubLink: "link",
  },
];
