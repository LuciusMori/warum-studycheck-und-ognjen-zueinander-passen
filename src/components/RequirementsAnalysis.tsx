import { useEffect, useRef, useState } from 'react'

export default function RequirementsAnalysis() {
  const requirements = [
    "Strukturiert & Verantwortungsbewusst",
    "Exzellente Kommunikation",
    "Feedback als Chance sehen",
    "Mitdenken & wirklich helfen",
    "Prozesse hinterfragen & verbessern"
  ]

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ marginBottom: '6rem' }}>
      <h3 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', color: '#e2e8f0', marginBottom: '1rem' }}>
        Anforderungs-Analyse: Ein Volltreffer
      </h3>
      <p style={{ textAlign: 'center', color: '#94a3b8', maxWidth: '32rem', margin: '0 auto 2.5rem' }}>
        Eure Ausschreibung sagt: „Die Stelle passt perfekt zu dir, wenn…" – ich habe bei jedem Punkt innerlich genickt.
        Hier die visuelle Bestätigung:
      </p>
      <div style={{ padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
        <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {/* <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '8rem', height: '8rem', borderRadius: '50%', backgroundColor: 'rgba(100, 255, 218, 0.2)', border: '4px solid #64ffda', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '700', color: '#64ffda' }}>ICH</span>
            </div> */}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {requirements.map((req, index) => (
              <div key={index} style={{ padding: '1rem', backgroundColor: '#0a192f', borderRadius: '0.5rem', border: '1px solid #475569' }}>
                {/* Titel */}
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ color: '#cbd5e1', fontWeight: '500', fontSize: '1rem' }}>{req}</span>
                </div>
                
                {/* Progress Bar - volle Breite */}
                <div style={{ width: '100%' }}>
                  <div
                    style={{
                      width: '100%',
                      backgroundColor: '#475569',
                      borderRadius: '9999px',
                      height: '0.75rem',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: isVisible ? '100%' : '0%',
                        height: '0.75rem',
                        background: 'linear-gradient(90deg, #64ffda 0%, #4ade80 50%, #22d3ee 100%)',
                        borderRadius: '9999px',
                        transition: `all ${1500 + index * 300}ms ease-out ${index * 200}ms`,
                        boxShadow: isVisible ? '0 0 10px rgba(100, 255, 218, 0.4)' : 'none'
                      }}
                    />
                  </div>
                  
                  {/* Percentage Labels */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                    <span style={{ color: '#64748b', fontSize: '0.875rem' }}>0%</span>
                    <span
                      style={{
                        color: '#64ffda',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        transition: `all 500ms ease-out ${1200 + index * 300}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0.8)'
                      }}
                    >
                      100%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              transition: 'all 1000ms ease-out 2000ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p style={{ color: '#64ffda', fontWeight: '700', fontSize: '1.25rem' }}>
              Perfekte Übereinstimmung!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}