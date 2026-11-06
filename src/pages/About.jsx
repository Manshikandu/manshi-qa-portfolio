import { profile, skillGroups, education } from '../data'
import SectionHeading from '../components/SectionHeading'
import { Code2, Lightbulb, Search, GraduationCap } from 'lucide-react'


function About() {
  const principles = [
    {
      icon: Search,
      title: 'Think like a user',
      description: 'Understand real user journeys, explore edge cases, and consider how people interact with a product.'
    },
    {
      icon: Lightbulb,
      title: 'Test with purpose',
      description: 'Connect testing activities to requirements, expected behavior, and areas of product risk.'
    },
    {
      icon: Code2,
      title: 'Keep learning',
      description: 'Build on manual testing experience while improving automation and technical problem-solving skills.'
    }
  ]

  return (
    <div className="page section-wrap">
      <SectionHeading
        eyebrow="01 / ABOUT ME"
        title="Curious by nature. Quality by practice."
        text="A little more about my journey into software quality engineering."
      />

      <div className="about-grid">
        <div className="about-copy">
          <h3>My introduction</h3>
          <p>{profile.about}</p>

          <p>
            I believe effective QA goes beyond checking whether a feature works.
            It also means understanding why it exists, how users will interact
            with it, and what could happen when things do not go as expected.
          </p>

          <p>
            I'm continuing to strengthen my automation skills with Playwright
            and JavaScript while building on my practical foundation in manual,
            exploratory, API, and regression testing.
          </p>
        </div>

        <div className="principles">
          {principles.map((item, index) => {
            const Icon = item.icon

            return (
              <article className="principle" key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <Icon size={20} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <section className="page-section">
        <SectionHeading
          eyebrow="02 / TECHNICAL TOOLKIT"
          title="Skills I work with"
          text="My primary focus is software testing, supported by API tools, automation frameworks, and development knowledge."
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="03 / EDUCATION"
          title="The foundation behind my work"
          text="My academic background in computer science supports my understanding of software systems and application development."
        />

      
      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.level || item.mark}>
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>

            <div className="education-info">
              <span className="eyebrow">{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.college} · {item.location}</p>
            </div>

            <span className="education-mark">{item.mark}</span>
          </article>
        ))}
      </div>

      </section>
    </div>
  )
}

export default About;