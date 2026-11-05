import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

function Projects() {
  return (
    <div className="page section-wrap">
      <SectionHeading
        eyebrow="03 / PROJECT PORTFOLIO"
        title="Selected QA Projects "
        text="A closer look at the applications, platforms, and product workflows I've worked on through my QA experience."
      />

      <div className="project-intro">
        <p>
          My testing experience covers VoIP products, cloud-based contact
          centre platforms, business applications, healthcare systems,
          travel platforms, and e-commerce websites.
        </p>
        <p>
          Select a project to explore its testing scope, key workflows,
          challenges, and my contributions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects;