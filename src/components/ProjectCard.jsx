import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card project-card-link"
    >
      <div className="project-top">
        <span className="project-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="project-type">{project.type}</span>
        <ArrowUpRight size={18} />
      </div>

      <h3>{project.name}</h3>
      <p>{project.summary}</p>

      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <span className="project-view">View case study <ArrowUpRight size={14} /></span>
    </Link>
  )
}

export default ProjectCard