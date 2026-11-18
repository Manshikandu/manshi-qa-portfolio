import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

function ContactSection() {
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
  )
}

export default ContactSection;