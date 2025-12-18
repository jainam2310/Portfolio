import "./style.css";
import { Scene3D } from "./scene";
import { projects } from "./projects";

class Portfolio {
  private scene3D: Scene3D | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    // Initialize THREE.js scene
    const webglCanvas = document.getElementById("webgl") as HTMLCanvasElement;
    if (webglCanvas) {
      this.scene3D = new Scene3D(webglCanvas);
    }

    // Setup navigation
    this.setupNavigation();

    // Setup main content
    this.setupMainContent();
  }

  private setupNavigation(): void {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navOverlay = document.getElementById("nav-overlay");
    const navLinks = document.querySelectorAll(".nav-link");

    navToggle?.addEventListener("click", () => {
      navOverlay?.classList.add("active");
    });

    navClose?.addEventListener("click", () => {
      navOverlay?.classList.remove("active");
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navOverlay?.classList.remove("active");
      });
    });

    // Close menu when clicking overlay
    navOverlay?.addEventListener("click", (e) => {
      if (e.target === navOverlay) {
        navOverlay.classList.remove("active");
      }
    });
  }

  private setupMainContent(): void {
    const app = document.getElementById("app");
    if (!app) return;

    app.innerHTML = `
      <div class="main-container">
        <!-- Hero -->
        <section id="home" class="hero">
          <h1 class="glitch">JAINAM MEHTA</h1>
          <div class="subtitle">Aeronautics & Astronautics Engineer, Specialization: Structures</div>
          <p class="tagline">
            Description • - @ UW • 
          </p>
          <p><span class="highlight">Research Name</span></p>
          <div class="cta-buttons">
            <a href="#projects" class="btn">EXPLORE PROJECTS</a>
            <a href="#contact" class="btn">GET IN TOUCH</a>
          </div>
        </section>

        <!-- Experience -->
        <div id="experience" class="section-header">
          <span class="section-number">01</span>
          <h2 class="section-title">EXPERIENCE</h2>
          <div class="section-line"></div>
        </div>
        <div id="experience-container" class="experience-timeline"></div>

        <!-- Projects -->
        <div id="projects" class="section-header">
          <span class="section-number">02</span>
          <h2 class="section-title">PROJECTS</h2>
          <div class="section-line"></div>
        </div>
        <div id="projects-container" class="projects-grid"></div>

        <!-- Skills -->
        <div id="skills" class="section-header">
          <span class="section-number">03</span>
          <h2 class="section-title">SKILLS</h2>
          <div class="section-line"></div>
        </div>
        <div id="skills-container" class="skills-categories"></div>

        <!-- Education -->
        <div id="education" class="section-header">
          <span class="section-number">04</span>
          <h2 class="section-title">EDUCATION</h2>
          <div class="section-line"></div>
        </div>
        <div id="education-container" class="education-list"></div>

        <!-- Resume -->
        <div id="resume" class="section-header">
          <span class="section-number">05</span>
          <h2 class="section-title">RESUME</h2>
          <div class="section-line"></div>
        </div>
        <div class="resume-section">
          <div class="resume-content">
            <div class="resume-icon">📄</div>
            <h3>Download My Resume</h3>
            <p>Get a comprehensive overview of my experience, skills, and education.</p>
            <a href="./resume.pdf" class="resume-btn">Download Resume (PDF)</a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer id="contact" class="footer">
        <div class="footer-content">
          <h2 class="footer-title">LET'S CONNECT</h2>
          <p style="color: var(--text-secondary); font-size: 1.2rem; margin-bottom: 40px;">
            Currently seeking <span class="highlight">Software Engineering opportunities for 2026</span>
          </p>
          <div class="footer-links">
            <a href="mailto:jainam@uw.edu" class="footer-link">
              <span class="footer-icon">📧</span>
              <span>jainam@uw.edu</span>
            </a>
            <a href="https://www.linkedin.com/in/jainammehta23/" target="_blank" class="footer-link">
              <span class="footer-icon">💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    `;

    // Render all sections
    this.renderExperience();
    this.renderProjects();
    this.renderSkills();
    this.renderEducation();
  }

  private renderExperience(): void {
    const container = document.getElementById("experience-container");
    if (!container) return;

    const experiences = [
      {
        title: "Teaching Assistant",
        company: "University of Washington",
        date: "Mar 2025 – June 2025",
        description: "Advanced Composite Structural Analysis (AE 553) ",
        achievements: [
          "Guided a class of 40+ students in building layered shell and cohesive-zone FEA models in OptiStruct.",
          "Taught simulation-to-failure workflows and post-processing, improving model setup quality and convergence.",
          "Hands on mentorship of 20 term projects with technical feedback, increasing performance of the class by 15%.",
          ,
        ],
      },
      {
        title: "Teaching Assistant",
        company: "University of Washington",
        date: "Sept 2024 – Mar 2025",
        description: "Mechanics of Composite Materials (AE 550) ",
        achievements: [
          "Delivered weekly review sessions on micromechanics, anisotropic elasticity, and composite failure theories for 60+ students.",
          "Provided support for simulation-based and created coding tutorials for students.",
          "Collaborated with faculty and led personal office hours to reinforce basic understanding of composite mechanics.",
        ],
      },
      {
        title: "Grader",
        company: "University of Washington",
        date: "Mar 2024 – June 2024",
        description: "Aerospace Structures 2 (AA 332) ",
        achievements: [
          "Evaluated problem sets and exams for 90+ students across topics like beam theory, stress analysis.",
          "Provided detailed annotations and review suggestions that helped students correct conceptual errors.",
          "Collaborated with the instructor to standardize grading rubrics and improve turnaround time.",
        ],
      },

      {
        title: "Research & Development Intern ",
        company: "European Perfume Works, U.A.E.",
        date: "Mar 2024 – June 2024",
        description: "Aerospace Structures 2 (AA 332) ",
        achievements: [
          "Created engineering drawings and inspection documentation for high-volume components using AutoCAD.",
          "Redesigned jig components with improved material selection, increasing durability and reducing wear by 21%.",
          "Investigated failure trends in bottle capping systems and proposed fixture modifications, reducing production waste by 9%.",
        ],
      },
    ];

    experiences.forEach((exp) => {
      const item = document.createElement("div");
      item.className = "experience-item";

      item.innerHTML = `
        <div class="exp-header">
          <div>
            <div class="exp-title">${exp.title}</div>
            <div class="exp-company">${exp.company}</div>
          </div>
          <div class="exp-date">${exp.date}</div>
        </div>
        <p class="exp-description">${exp.description}</p>
        <ul class="exp-achievements">
          ${exp.achievements
            .map((achievement) => `<li>${achievement}</li>`)
            .join("")}
        </ul>
      `;

      container.appendChild(item);
    });
  }

  private renderProjects(): void {
    const container = document.getElementById("projects-container");
    if (!container) return;

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";

      // Build achievements HTML if they exist
      const achievementsHTML = project.achievements
        ? `
        <ul class="project-achievements">
          ${project.achievements
            .slice(0, 3)
            .map((achievement) => `<li>${achievement}</li>`)
            .join("")}
          ${
            project.achievements.length > 3
              ? '<li class="more-achievements">...</li>'
              : ""
          }
        </ul>
      `
        : "";

      card.innerHTML = `
      <div class="project-number">PROJECT ${project.number}</div>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      ${achievementsHTML}
      <div class="project-tech">
        ${project.tech
          .slice(0, 4)
          .map((tech) => `<span class="tech-tag">${tech}</span>`)
          .join("")}
        ${
          project.tech.length > 4
            ? '<span class="tech-tag">+' +
              (project.tech.length - 4) +
              " more</span>"
            : ""
        }
      </div>
      <button class="read-more-btn" data-project="${project.number}">
        Read More →
      </button>
    `;

      container.appendChild(card);

      // Add click handler for Read More button
      const readMoreBtn = card.querySelector(".read-more-btn");
      readMoreBtn?.addEventListener("click", () => {
        this.showProjectDetail(project.number);
      });
    });
  }

  private showProjectDetail(projectNumber: string): void {
    const project = projects.find((p) => p.number === projectNumber);
    if (!project) return;

    const app = document.getElementById("app");
    if (!app) return;

    // Store current scroll position
    const scrollPos = window.scrollY;

    // Show project detail
    app.innerHTML = `
    <div class="project-detail-container">
      <button class="back-button" id="back-to-projects">
        ← Back to Projects
      </button>

      <div class="project-detail-header">
        <div class="project-detail-number">PROJECT ${project.number}</div>
        <h1 class="project-detail-title">${project.title}</h1>
        <p class="project-detail-subtitle">${project.description}</p>
      </div>

      ${
        project.image
          ? `
        <div class="project-detail-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
      `
          : ""
      }

      ${
        project.fullDescription
          ? `
        <div class="project-detail-section">
          <h2 class="detail-section-title">Overview</h2>
          <p class="detail-section-text">${project.fullDescription}</p>
        </div>
      `
          : ""
      }

      ${
        project.achievements
          ? `
        <div class="project-detail-section">
          <h2 class="detail-section-title">Key Achievements</h2>
          <ul class="detail-achievements">
            ${project.achievements
              .map((achievement) => `<li>${achievement}</li>`)
              .join("")}
          </ul>
        </div>
      `
          : ""
      }

      ${
        project.details
          ? `
        <div class="project-detail-section">
          <h2 class="detail-section-title">Technical Details</h2>
          <div class="detail-grid">
            ${
              project.details.model
                ? `
              <div class="detail-item">
                <div class="detail-label">Model:</div>
                <div class="detail-value">${project.details.model}</div>
              </div>
            `
                : ""
            }
            ${
              project.details.toolchain
                ? `
              <div class="detail-item">
                <div class="detail-label">Toolchain:</div>
                <div class="detail-value">${project.details.toolchain}</div>
              </div>
            `
                : ""
            }
            ${
              project.details.app
                ? `
              <div class="detail-item">
                <div class="detail-label">App:</div>
                <div class="detail-value">${project.details.app}</div>
              </div>
            `
                : ""
            }
            ${
              project.details.techIntegration
                ? `
              <div class="detail-item">
                <div class="detail-label">Tech Integration:</div>
                <div class="detail-value">${project.details.techIntegration}</div>
              </div>
            `
                : ""
            }
          </div>
        </div>
      `
          : ""
      }

      <div class="project-detail-section">
        <h2 class="detail-section-title">Technologies Used</h2>
        <div class="detail-tech-tags">
          ${project.tech
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
      </div>

      ${
        project.demoLink || project.githubLink || project.link
          ? `
        <div class="project-detail-section">
          <h2 class="detail-section-title">Links</h2>
          <div class="detail-links">
            ${
              project.demoLink
                ? `<a href="${project.demoLink}" target="_blank" class="detail-link-btn">View Demo</a>`
                : ""
            }
            ${
              project.githubLink
                ? `<a href="${project.githubLink}" target="_blank" class="detail-link-btn">GitHub Repository</a>`
                : ""
            }
            ${
              project.link
                ? `<a href="${project.link}" target="_blank" class="detail-link-btn">View Project</a>`
                : ""
            }
          </div>
        </div>
      `
          : ""
      }

      <button class="back-button bottom" id="back-to-projects-bottom">
        ← Back to Projects
      </button>
    </div>
  `;

    // Scroll to top
    window.scrollTo(0, 0);

    // Add click handlers for back buttons
    document
      .getElementById("back-to-projects")
      ?.addEventListener("click", () => {
        this.setupMainContent();
        window.scrollTo(0, scrollPos);
      });

    document
      .getElementById("back-to-projects-bottom")
      ?.addEventListener("click", () => {
        this.setupMainContent();
        window.scrollTo(0, scrollPos);
      });
  }

  private renderSkills(): void {
    const container = document.getElementById("skills-container");
    if (!container) return;

    const skillCategories = [
      {
        category: "Languages",
        skills: [
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "SQL",
          "HTML/CSS",
        ],
      },
      {
        category: "Frontend",
        skills: [
          "React",
          "Next.js",
          "THREE.js",
          "Tailwind CSS",
          "Responsive Design",
          "UI/UX",
        ],
      },
      {
        category: "Backend & Tools",
        skills: [
          "Node.js",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "Git",
          "Docker",
        ],
      },
      {
        category: "AI & Research",
        skills: [
          "PyTorch",
          "Machine Learning",
          "Computer Vision",
          "GRU/LSTM",
          "Attention Mechanisms",
        ],
      },
    ];

    skillCategories.forEach((cat) => {
      const div = document.createElement("div");
      div.className = "skill-category";

      div.innerHTML = `
        <h3>${cat.category}</h3>
        <div class="skill-tags">
          ${cat.skills
            .map((skill) => `<span class="skill-tag">${skill}</span>`)
            .join("")}
        </div>
      `;

      container.appendChild(div);
    });
  }

  private renderEducation(): void {
    const container = document.getElementById("education-container");
    if (!container) return;

    const education = [
      {
        degree:
          "Master of Science in Aeronautics & Astronautics | Specialization: Structures",
        school: "University of Washington",
        date: "Sept 2023 – Aug 2025",
        details:
          "Fracture Mechanics, Finite Element Analysis, Solid Mechanics, Compressible Fluid Dynamics, Dynamical Systems & Chaos.",
      },
      {
        degree:
          "Bachelor of Science in Mechanical Engineering | Specialization: Machine Design",
        school: "Manipal University, Dubai ",
        date: "Sept 2019 – June 2023",
        details:
          "CAD/CAM, Mechanical Design, Python Programming, Heat Transfer, DFMEA, Turbo Machines.",
      },
    ];

    education.forEach((edu) => {
      const item = document.createElement("div");
      item.className = "education-item";

      item.innerHTML = `
        <div class="edu-header">
          <div>
            <div class="edu-degree">${edu.degree}</div>
            <div class="edu-school">${edu.school}</div>
          </div>
          <div class="edu-date">${edu.date}</div>
        </div>
        <p class="edu-details">${edu.details}</p>
      `;

      container.appendChild(item);
    });
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  new Portfolio();
});
