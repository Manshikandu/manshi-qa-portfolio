import { profile } from '../data'
import SectionHeading from '../components/SectionHeading'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'

function Contact() {
  const contacts = [
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
  ]

  return (
    <div className="page section-wrap contact-page">
      <SectionHeading
        eyebrow="05 / GET IN TOUCH"
        title="Have something to build better?"
        text="I'm open to QA opportunities, thoughtful collaborations, and conversations about building reliable software."
      />

      <div className="contact-links">
        {contacts.map((contact) => {
          const Icon = contact.icon

          return (
            <a
              className="contact-link"
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
            >
              <span className="contact-icon"><Icon size={20} /></span>
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
  )
}

export default Contact;