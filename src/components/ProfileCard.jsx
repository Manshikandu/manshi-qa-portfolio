import { Bug, Sparkles } from 'lucide-react'
import { profile } from '../data'

function ProfileCard() {
  return (
    <div className="hero-visual">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />

      <div className="visual-sticker sticker-one">
        <Sparkles size={15} /> Curious by default
      </div>

      <div className="profile-card">
        <div className="card-top">
          <span className="window-dots"><i /><i /><i /></span>
          <span>qa_profile.js</span>
          <span className="mono">01</span>
        </div>

        <div className="code-content">
          <p><span className="pink">const</span> engineer = {'{'}</p>
          <p className="indent"><span className="blue">name</span>: <span className="green">'{profile.name}'</span>,</p>
          <p className="indent"><span className="blue">role</span>: <span className="green">'QA Engineer'</span>,</p>
          <p className="indent"><span className="blue">mindset</span>: <span className="green">'Quality through curiosity'</span>,</p>
          <p className="indent"><span className="blue">curious</span>: <span className="orange">true</span>,</p>
          <p className="indent"><span className="blue">focus</span>: [</p>

          {profile.focus.map((item) => (
            <p className="indent deeper" key={item}>
              <span className="green">'{item}'</span>,
            </p>
          ))}

          <p className="indent">]</p>
          <p>{'}'};</p>

          <div className="terminal-line">
            <span className="pulse" /> ready_to_test<span className="cursor">_</span>
          </div>
        </div>
      </div>

      <div className="visual-sticker sticker-two">
        <Bug size={15} /> Edge-case hunter
      </div>
    </div>
  )
}

export default ProfileCard