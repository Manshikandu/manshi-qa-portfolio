import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowDown, MapPin, Mail , Linkedin , Github  } from 'lucide-react'
import { profile, projects } from '../data'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import ContactSection from '../components/contactSection'

import { skillGroups } from '../data'
import { Code2 } from 'lucide-react'

function Home() {
  const featuredProjects = projects.slice(0, 2)

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
            QA ENGINEERING <span>✳</span> API TESTING <span>✳</span> TEST AUTOMATION
          </div>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <Link className="button primary" to="/projects">
              Explore my work <ArrowUpRight size={17} />
            </Link>

            <a
              className="button secondary"
              href="/Manshi_Kandu_Resume.pdf"
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
       <ContactSection />
    
    </>
  )
}

export default Home;