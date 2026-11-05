import { Link, useParams } from 'react-router-dom'
import { projects } from '../data'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'

function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="page section-wrap">
        <h2>Project not found</h2>
        <p>The project you're looking for may have moved.</p>
        <Link className="button primary" to="/projects">
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="page section-wrap project-details">
      <Link className="back-link" to="/projects">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="project-detail-header">
        <span className="eyebrow">PROJECT CASE STUDY / {project.type}</span>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <section className="detail-section">
        <span className="eyebrow">01 / OVERVIEW</span>
        <h2>About the project</h2>
        <p>{project.overview || project.summary}</p>
      </section>

      <section className="detail-section">
        <span className="eyebrow">02 / TESTING SCOPE</span>
        <h2>What I focused on</h2>

        <div className="detail-list">
          {(project.scope || project.details).map((item) => (
            <div className="detail-list-item" key={item}>
              <CheckCircle2 size={18} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {project.challenges?.length > 0 && (
        <section className="detail-section">
          <span className="eyebrow">03 / INVESTIGATION</span>
          <h2>Challenges and observations</h2>

          <ul>
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {project.contribution && (
        <section className="detail-section">
          <span className="eyebrow">04 / MY CONTRIBUTION</span>
          <h2>How I contributed</h2>
          <p>{project.contribution}</p>
        </section>
      )}

      <div className="detail-next">
        <p>Interested in discussing my QA experience?</p>
        <Link className="button primary" to="/contact">
          Let's connect <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectDetails;