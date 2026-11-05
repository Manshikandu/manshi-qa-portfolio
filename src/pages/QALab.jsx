import { useState } from 'react'
import { qaSamples } from '../data'
import SectionHeading from '../components/SectionHeading'
import { CheckCircle2, FlaskConical } from 'lucide-react'

function QALab() {
  const [activeSample, setActiveSample] = useState(0)
  const current = qaSamples[activeSample]

  return (
    <div className="page section-wrap">
      <SectionHeading
        eyebrow="04 / QA LAB"
        title="How I approach testing"
        text="A small collection of illustrative examples showing how I think about test coverage, defect communication, and automation."
      />

      <div className="lab-panel">
        <div className="lab-tabs">
          {qaSamples.map((sample, index) => (
            <button
              key={sample.title}
              className={activeSample === index ? 'active' : ''}
              onClick={() => setActiveSample(index)}
            >
              <span>0{index + 1}</span>
              {sample.title}
            </button>
          ))}
        </div>

        <div className="lab-content">
          <span className="eyebrow">{current.label}</span>
          <h3>{current.title}</h3>
          <p>{current.description}</p>

          <div className="steps">
            <h4><FlaskConical size={15} /> TEST OUTLINE</h4>

            {current.steps.map((step, index) => (
              <div className="step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </div>
            ))}
          </div>

          <div className="expected">
            <CheckCircle2 size={18} />
            <div>
              <strong>Expected result</strong>
              <p>{current.expected}</p>
            </div>
          </div>

          <small>
            Illustrative sample for portfolio demonstration —
            not a production test report.
          </small>
        </div>
      </div>
    </div>
  )
}

export default QALab;