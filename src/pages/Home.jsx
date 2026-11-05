import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDown, MapPin, Mail , Linkedin , Github  } from 'lucide-react'
import { profile, projects } from '../data'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

import { skillGroups } from '../data'
import { Code2 } from 'lucide-react'

function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="pulse" />
            OPEN TO QA OPPORTUNITIES & COLLABORATION
          </div>

          <p className="hero-kicker">HELLO, I'M</p>

          <h1>{profile.name}</h1>
          

          <h2>
            Beyond Finding Bugs.
            <br />
            <em>Building Confidence.</em>
          </h2>

          <div className="hero-role">
            QA ENGINEERING <span>✳</span> TEST AUTOMATION <span>✳</span> WEB TECHNOLOGIES
          </div>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              Explore my work <ArrowUpRight size={17} />
            </Link>

            <a
              className="button secondary"
              href="Manshi_Kandu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <span><MapPin size={15} />{profile.location}</span>
            <a href={`mailto:${profile.email}`}>
              <Mail size={15} />{profile.email}
            </a>
          </div>
        </div>

        <ProfileCard />
      </section>

      <section className="section alt">
  <div className="section-wrap">
    <div className="section-heading">
      <span className="eyebrow">TOOLS & TECHNOLOGIES</span>
      <h2>My QA toolkit<span>.</span></h2>
      <p>
        Technologies and tools I use to test applications,
        investigate issues, and explore automation.
      </p>
    </div>

    <div className="home-skills-grid">
      {skillGroups.map((group) => (
        <div className="home-skill-card" key={group.title}>
          <div className="skill-icon">
            <Code2 size={20} />
          </div>

          <h3>{group.title}</h3>

          <div className="tags">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="section alt">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="01 / SELECTED WORK"
            title="A closer look at what I've tested."
            text="A selection of products and applications I've worked with, along with the testing challenges and workflows I've explored."
          />

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>

          <Link className="text-link" to="/projects">
            Explore all projects <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

     <section className="contact-section">
  <div className="contact-content">
    <div className="contact-text">
      <span className="eyebrow">LET'S CONNECT</span>

      <h2>Good software starts with thoughtful testing.</h2>

      <p>
        Interested in working together or discussing quality engineering?
      </p>
    </div>

      <div className="contact-links">
  {[
    {
      label: 'EMAIL ME',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail
    },
    {
      label: 'CONNECT ON',
      value: 'LinkedIn',
      href: profile.linkedin,
      icon: Linkedin
    },
    {
      label: 'EXPLORE MY CODE',
      value: 'GitHub',
      href: profile.github,
      icon: Github
    }
  ].map((contact) => {
    const Icon = contact.icon

    return (
      <a
        className="contact-link"
        key={contact.label}
        href={contact.href}
        target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noreferrer"
      >
        <span className="contact-icon">
          <Icon size={20} />
        </span>

        <span>
          <small>{contact.label}</small>
          <strong>{contact.value}</strong>
        </span>

        <ArrowUpRight size={17} />
      </a>
    )
  })}
    </div>
  </div>
</section>
    </>
  )
}

export default Home;