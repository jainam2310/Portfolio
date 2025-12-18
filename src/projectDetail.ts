import { projects, Project } from "./projects";

export function showProjectDetail(projectNumber: string): void {
  const project = projects.find((p) => p.number === projectNumber);
  if (!project) return;

  const app = document.getElementById("app");
  if (!app) return;

  // Hide main content, show project detail
  app.innerHTML = `
    <div class="project-detail-container">
      <button class="back-button" onclick="window.history.back()">
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

      <button class="back-button bottom" onclick="window.history.back()">
        ← Back to Projects
      </button>
    </div>
  `;

  // Scroll to top
  window.scrollTo(0, 0);
}
