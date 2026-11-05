import { experience } from '../data'
import SectionHeading from '../components/SectionHeading'
import { MapPin, BriefcaseBusiness } from 'lucide-react'

function Experience() {
  return (
    <div className="page section-wrap">
      <SectionHeading
        eyebrow="02 / PROFESSIONAL JOURNEY"
        title="Where I've contributed"
        text="My experience working with software teams, testing application workflows, investigating defects, and supporting product quality."
      />

      <div className="timeline">
        {experience.map((job, index) => (
          <article className="timeline-item" key={job.company}>
            <div className="timeline-marker">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="timeline-content experience-card">
              <div className="job-head">
                <div>
                  <span className="eyebrow">
                    <BriefcaseBusiness size={13} /> EXPERIENCE
                  </span>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                </div>

                <span className="period">{job.period}</span>
              </div>

              <p className="job-place">
                <MapPin size={13} /> {job.place}
              </p>

              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Experience;