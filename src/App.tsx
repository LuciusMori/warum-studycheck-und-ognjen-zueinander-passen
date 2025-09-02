import ChatSimulator from './components/ChatSimulator'
import RequirementsAnalysis from './components/RequirementsAnalysis'

function App() {
  return (
    <div style={{ minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem' }}>

      {/* Header */}
      <header style={{ textAlign: 'center', padding: '4rem 0 6rem' }}>
        <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1rem' }}>
          Ognjen Lukajic
        </h1>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#cbd5e1', marginBottom: '1rem' }}>
          Bewerbung: Customer Care Manager
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '48rem', margin: '1.5rem auto 0' }}>
          Eine interaktive Infografik über meine Motivation, meine Fähigkeiten und warum ich perfekt zu StudyCheck passe.
        </p>
      </header>

      {/* Personal Note */}
      <section style={{ marginBottom: '6rem', padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#112240', borderTop: '2px solid #64ffda' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', textAlign: 'center', color: '#e2e8f0', marginBottom: '1.5rem' }}>
          Eine persönliche Anmerkung
        </h3>
        <blockquote style={{ textAlign: 'center', fontSize: '1.25rem', fontStyle: 'italic', color: '#cbd5e1', lineHeight: '1.75' }}>
          „Ich habe Euren Satz gelesen: ‚Wir verlangen kein Anschreiben von dir – da draußen ist schließlich 2025.' [...]
          Warum also schreibe ich dir trotzdem? Weil mir Transparenz wichtig ist und ich dir gerne eine Seite von mir zeigen möchte,
          die ein LinkedIn-Profil nicht vermitteln kann: die persönliche und ehrliche."
        </blockquote>
      </section>

      {/* Why StudyCheck */}
      <section style={{ marginBottom: '6rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', color: '#e2e8f0', marginBottom: '3rem' }}>
          Das perfekte Match: Warum StudyCheck?
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div className="card" style={{ padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#64ffda' }}>🚀</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>Remote First</h4>
            <p style={{ color: '#94a3b8' }}>Ermöglicht mir, mein Engagement und meine Lernbereitschaft fokussiert und ortsunabhängig einzubringen.</p>
          </div>
          <div className="card" style={{ padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#64ffda' }}>🕒</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>Flexible Arbeitszeiten</h4>
            <p style={{ color: '#94a3b8' }}>Der ideale Rahmen, um mein Fernstudium und berufliches Engagement optimal zu vereinen.</p>
          </div>
          <div className="card" style={{ padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#64ffda' }}>🎓</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>Weiterbildung deluxe</h4>
            <p style={{ color: '#94a3b8' }}>Zeigt mir, dass wir dieselben Werte teilen: Lebenslanges Lernen ist für mich gelebte Praxis.</p>
          </div>
        </div>
      </section>

      {/* Developer-Communicator */}
      <section style={{ marginBottom: '6rem', padding: '2rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
        <div className="developer-communicator-grid">
          <div className="developer-communicator-text" style={{ paddingRight: '2rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '1rem' }}>
              Der Kern: Zwei Welten, ein Profil
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
              Ich bewerbe mich bewusst außerhalb der reinen IT, weil ich die Balance suche und liebe.
              Ich verbinde das Beste aus zwei Welten, um Probleme ganzheitlich zu lösen.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '700', fontSize: '1.125rem', color: '#64ffda' }}>Der Entwickler</h4>
                <p style={{ color: '#94a3b8' }}>
                  Analytisch, strukturiert und leidenschaftlich darin, Prozesse zu hinterfragen und smarter zu gestalten.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: '700', fontSize: '1.125rem', color: '#64ffda' }}>Der Kommunikator</h4>
                <p style={{ color: '#94a3b8' }}>
                  Empathisch, lösungsorientiert und erfahren im direkten Austausch mit Menschen, um wirklich zu helfen.
                </p>
              </div>
            </div>
          </div>
          <div className="developer-communicator-stats" style={{ display: 'grid', gap: '1.5rem', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#0a192f', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #475569' }}>
              <span style={{ fontSize: '4rem', fontWeight: '800', color: '#64ffda' }}>15</span>
              <p style={{ fontWeight: '600', color: '#cbd5e1', marginTop: '0.5rem' }}>Jahre Erfahrung im Kundendienst</p>
            </div>
            <div style={{ backgroundColor: '#0a192f', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #475569' }}>
              <span style={{ fontSize: '4rem', fontWeight: '800', color: '#64ffda' }}>100%</span>
              <p style={{ fontWeight: '600', color: '#cbd5e1', marginTop: '0.5rem' }}>Leidenschaft für Prozessoptimierung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Analysis */}
      <RequirementsAnalysis />

      {/* Experience Demo */}
      <section style={{ marginBottom: '6rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', color: '#e2e8f0', marginBottom: '1rem' }}>
          Erlebe meinen Ansatz ✨
        </h3>
        <p style={{ textAlign: 'center', color: '#94a3b8', maxWidth: '48rem', margin: '0 auto 3rem' }}>
          Hier sind konkrete Beispiele, wie ich auf typische Anfragen reagiere.
          Darunter kannst du meinen Ansatz dann live mit einer eigenen Frage im Chat-Simulator testen.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem' }}>
          {/* Example 1 */}
          <div style={{ padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: '600', color: '#94a3b8' }}>Studierender:</p>
              <blockquote style={{ fontStyle: 'italic', color: '#cbd5e1', borderLeft: '2px solid #64ffda', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                "Wie genau funktioniert die Plattform und warum sollte ich sie überhaupt nutzen?"
              </blockquote>
            </div>
            <div>
              <p style={{ fontWeight: '600', color: '#64ffda' }}>Meine Antwort:</p>
              <div style={{ color: '#cbd5e1', marginTop: '0.5rem', paddingLeft: '1rem', whiteSpace: 'pre-line' }}>
                {`"Hallo! Das ist eine super Frage, die viele Studierende am Anfang haben – und ich erkläre dir sehr gerne, wie StudyCheck funktioniert und warum es sich für dich lohnt.

Im Kern ist StudyCheck deine "zentrale und transparente Informationsquelle" für die Studienwahl. Stell dir vor, du hast Zugriff auf eine riesige, ständig aktualisierte Datenbank von Hochschulen und Studiengängen in Deutschland, angereichert mit dem wertvollsten Input überhaupt: den Erfahrungen echter Studierender.

Der Prozess ist dabei denkbar einfach und darauf ausgelegt, dir maximalen Mehrwert zu bieten:

1. **"Suchen & Finden":** Mit unseren intuitiven Filtern findest du mühelos Studiengänge, die exakt zu deinen Vorstellungen passen.

2. **"Vergleichen":** Du kannst Studiengänge und Hochschulen direkt miteinander abgleichen.

3. **"Informieren (Das Herzstück!)":** Hier kommen die authentischen Erfahrungsberichte von Tausenden Studierenden ins Spiel.

Kurz gesagt: StudyCheck macht deine Studienwahl einfacher, transparenter und sicherer, damit du voller Zuversicht in deine akademische Zukunft starten kannst.

Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck"`}
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div style={{ padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: '600', color: '#94a3b8' }}>Studierender:</p>
              <blockquote style={{ fontStyle: 'italic', color: '#cbd5e1', borderLeft: '2px solid #64ffda', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                "Ich habe einige schlechte Dinge bei Kununu über euch gelesen. Nun bin ich mir unsicher, ob ich mich überhaupt anmelden sollte."
              </blockquote>
            </div>
            <div>
              <p style={{ fontWeight: '600', color: '#64ffda' }}>Meine Antwort:</p>
              <div style={{ color: '#cbd5e1', marginTop: '0.5rem', paddingLeft: '1rem', whiteSpace: 'pre-line' }}>
                {`"Hallo. Ich verstehe deine Bedenken sehr gut, wenn du auf externen Plattformen wie Kununu negative Bewertungen liest. Solche Meinungen nehmen wir natürlich ernst und nutzen sie als wichtiges Feedback, um uns kontinuierlich zu verbessern.

Was uns bei StudyCheck aber besonders wichtig ist, ist die Authentizität und Verlässlichkeit der Erfahrungsberichte direkt von Studierenden. Wir haben dafür sorgfältige Moderationsprozesse etabliert, um sicherzustellen, dass du bei uns transparente und hilfreiche Einblicke erhältst.

Am besten machst du dir dein eigenes, unverbindliches Bild auf StudyCheck. Registriere dich gerne und entdecke, wie viele positive Rückmeldungen unsere Nutzer selbst teilen.

Bei weiteren Fragen stehe ich dir jederzeit persönlich zur Verfügung!
Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck"`}
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div style={{ padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: '#112240' }}>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: '600', color: '#94a3b8' }}>Studierender:</p>
              <blockquote style={{ fontStyle: 'italic', color: '#cbd5e1', borderLeft: '2px solid #64ffda', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                "Ich finde StudyCheck überhaupt nicht interessant. Insbesondere aktuell - angesichts aller KI-Helfer und LLMs - kann ich mir kurzerhand eine Zusammenfassung aller für mich infrage kommender Unis erstellen lassen. Wozu der Workaround über StudyCheck?"
              </blockquote>
            </div>
            <div>
              <p style={{ fontWeight: '600', color: '#64ffda' }}>Meine Antwort:</p>
              <div style={{ color: '#cbd5e1', marginTop: '0.5rem', paddingLeft: '1rem', whiteSpace: 'pre-line' }}>
                {`"Hallo! Deine Überlegung kann ich gut nachvollziehen; KI-Helfer sind wirklich geniale Tools und nehmen einem viel Arbeit ab, um schnell erste Infos zu sammeln.

Du fragst dich also: Wozu dann noch StudyCheck?

Stell es dir so vor: Eine KI kann dir eine Zusammenfassung von *Fakten* und öffentlich zugänglichen Informationen liefern. StudyCheck geht einen entscheidenden Schritt weiter und liefert dir nicht nur die nackten Fakten, sondern vor allem die *authentische Perspektive* von Studierenden, die aktuell oder kürzlich an den Unis waren. Wir sammeln und moderieren echte Erfahrungsberichte, die dir Einblicke in den Alltag geben, die keine KI (authentisch) generieren kann. Das sind Bewertungen zur Qualität der Lehre im Alltag (die echte Menschen hautnah erlebt haben), zum Campusleben (aus eigener Sicht der Studierenden), zur Unterstützung durch Dozenten, zur Mensa und vielem mehr – Kriterien, die nur Studierende wirklich beurteilen können.

Diese individuellen, menschlichen Einblicke sind es, die deine Wahl wirklich fundiert machen und dir ein Gefühl dafür geben, ob eine Uni wirklich zu dir passt, nicht nur auf dem Papier. Sieh StudyCheck also nicht als "Workaround", sondern als die entscheidende Brücke zwischen den objektiven Infos, die dir KI liefert, und der subjektiven Realität, die du als Studierender erleben wirst.

Es ist die menschliche Komponente, die das Bild komplett macht und dir hilft, die perfekte Wahl zu treffen.

Ich hoffe, das macht unseren Mehrwert etwas klarer. Schau dich doch mal um und filtere nach Dingen, die dir am Herzen liegen – vielleicht entdeckst du ja die Besonderheiten, die dich bei deiner Entscheidung wirklich weiterbringen.

Wenn du noch Fragen hast, melde dich gerne!
Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck"`}
              </div>
            </div>
          </div>
        </div>

        <ChatSimulator />
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #475569' }}>
        <p style={{ color: '#94a3b8' }}>
          Ich bin überzeugt, dass ich mit meiner Erfahrung und meinem analytischen Blick einen wertvollen Beitrag leisten kann.
        </p>
        <p style={{ marginTop: '0.5rem', fontWeight: '600', color: '#e2e8f0' }}>
          Ich freue mich auf ein persönliches Kennenlernen!
        </p>
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#64748b' }}>
          &copy; 2025 Ognjen Lukajic | Erstellt für StudyCheck
        </p>
      </footer>
    </div>
  )
}

export default App
