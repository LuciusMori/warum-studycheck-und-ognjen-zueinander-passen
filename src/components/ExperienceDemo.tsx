import { useState } from 'react'
import ChatSimulator from './ChatSimulator'

export default function ExperienceDemo() {
  const examples = [
    {
      question: "Wie genau funktioniert die Plattform und warum sollte ich sie überhaupt nutzen?",
      answer: `Hallo! Das ist eine super Frage, die viele Studierende am Anfang haben – und ich erkläre dir sehr gerne, wie StudyCheck funktioniert und warum es sich für dich lohnt.

Im Kern ist StudyCheck deine "zentrale und transparente Informationsquelle" für die Studienwahl. Stell dir vor, du hast Zugriff auf eine riesige, ständig aktualisierte Datenbank von Hochschulen und Studiengängen in Deutschland, angereichert mit dem wertvollsten Input überhaupt: den Erfahrungen echter Studierender.

Der Prozess ist dabei denkbar einfach und darauf ausgelegt, dir maximalen Mehrwert zu bieten:

1. **"Suchen & Finden":** Mit unseren intuitiven Filtern (Fachbereich, Ort, Abschlussart und viele mehr) findest du mühelos Studiengänge, die exakt zu deinen Vorstellungen passen. Es ist wie eine spezialisierte Suchmaschine, die dir hilft, aus der Masse das Richtige herauszufiltern.

2. **"Vergleichen":** Du kannst Studiengänge und Hochschulen direkt miteinander abgleichen, um Gemeinsamkeiten und Unterschiede auf einen Blick zu erkennen. Das hilft, Optionen schnell zu bewerten.

3. **"Informieren (Das Herzstück!)":** Hier kommen die "authentischen Erfahrungsberichte" von Tausenden aktuellen und ehemaligen Studierenden ins Spiel. Du liest ehrliche und detaillierte Bewertungen zu Lehrqualität, Campusleben, Ausstattung, Digitalisierung, Organisation und den Karrierechancen. Das sind Informationen aus erster Hand, die du sonst nirgends in dieser Form findest.

- Und warum solltest du unsere Plattform nutzen?

Ganz einfach: Die Studienwahl ist eine der wichtigsten Entscheidungen im Leben, und wir möchten dir dabei helfen, diese fundiert und ohne böse Überraschungen zu treffen. Du sparst wertvolle Zeit bei der Recherche, da alle wichtigen Informationen gebündelt sind. Du erhältst eine unvergleichliche Transparenz durch ehrliche Meinungen, die dir einen realen Blick hinter die Kulissen ermöglichen. Du kannst eine sichere und passende Entscheidung treffen, basierend auf den kollektiven Erfahrungen tausender anderer Studierender.

Kurz gesagt: StudyCheck macht deine Studienwahl einfacher, transparenter und sicherer, damit du voller Zuversicht in deine akademische Zukunft starten kannst. Am besten probierst du es gleich selbst aus! Solltest du konkrete Fragen haben oder Hilfe bei der Suche benötigen, bin ich jederzeit gerne für dich da.

Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck`
    },
    {
      question: "Ich habe einige schlechte Dinge bei Kununu über euch gelesen. Nun bin ich mir unsicher, ob ich mich überhaupt anmelden sollte.",
      answer: `Hallo. Ich verstehe deine Bedenken sehr gut, wenn du auf externen Plattformen wie Kununu negative Bewertungen liest. Solche Meinungen nehmen wir natürlich ernst und nutzen sie als wichtiges Feedback, um uns kontinuierlich zu verbessern – ein Prozess, der uns als Plattform immer weiterentwickelt.

Was uns bei StudyCheck aber besonders wichtig ist, ist die Authentizität und Verlässlichkeit der Erfahrungsberichte direkt von Studierenden. Wir haben dafür sorgfältige Moderationsprozesse etabliert, um sicherzustellen, dass du bei uns transparente und hilfreiche Einblicke erhältst, die dir wirklich bei deiner Studienwahl helfen. Am besten machst du dir dein eigenes, unverbindliches Bild auf StudyCheck.

Registriere dich gerne und entdecke, wie viele positive Rückmeldungen unsere Nutzer selbst teilen und wie wir dir mit strukturierten Informationen und echten Erfahrungen zur Seite stehen.

Bei weiteren Fragen stehe ich dir jederzeit persönlich zur Verfügung!
Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck`
    },
    {
      question: "Ich finde StudyCheck überhaupt nicht interessant. Insbesondere aktuell - angesichts aller KI-Helfer und LLMs - kann ich mir kurzerhand eine Zusammenfassung aller für mich infrage kommender Unis erstellen lassen. Wozu der Workaround über StudyCheck?",
      answer: `Hallo! Deine Überlegung kann ich gut nachvollziehen; KI-Helfer sind wirklich geniale Tools und nehmen einem viel Arbeit ab, um schnell erste Infos zu sammeln.

Du fragst dich also: Wozu dann noch StudyCheck?

Stell es dir so vor: Eine KI kann dir eine Zusammenfassung von *Fakten* und öffentlich zugänglichen Informationen liefern. StudyCheck geht einen entscheidenden Schritt weiter und liefert dir nicht nur die nackten Fakten, sondern vor allem die *authentische Perspektive* von Studierenden, die aktuell oder kürzlich an den Unis waren. Wir sammeln und moderieren echte Erfahrungsberichte, die dir Einblicke in den Alltag geben, die keine KI (authentisch) generieren kann. Das sind Bewertungen zur Qualität der Lehre im Alltag (die echte Menschen hautnah erlebt haben), zum Campusleben (aus eigener Sicht der Studierenden), zur Unterstützung durch Dozenten, zur Mensa und vielem mehr – Kriterien, die nur Studierende wirklich beurteilen können.

Diese individuellen, menschlichen Einblicke sind es, die deine Wahl wirklich fundiert machen und dir ein Gefühl dafür geben, ob eine Uni wirklich zu dir passt, nicht nur auf dem Papier. Sieh StudyCheck also nicht als "Workaround", sondern als die entscheidende Brücke zwischen den objektiven Infos, die dir KI liefert, und der subjektiven Realität, die du als Studierender erleben wirst.

Es ist die menschliche Komponente, die das Bild komplett macht und dir hilft, die perfekte Wahl zu treffen.

Ich hoffe, das macht unseren Mehrwert etwas klarer. Schau dich doch mal um und filtere nach Dingen, die dir am Herzen liegen – vielleicht entdeckst du ja die Besonderheiten, die dich bei deiner Entscheidung wirklich weiterbringen.

Wenn du noch Fragen hast, melde dich gerne!
Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck`
    }
  ]

  return (
    <section className="mb-24">
      <h3 className="text-3xl font-bold text-center text-slate-200 mb-4">
        Erlebe meinen Ansatz
      </h3>
      <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12">
        Hier sind zwei konkrete Beispiele, wie ich auf typische Anfragen reagiere. 
        Darunter kannst du meinen Ansatz dann live mit einer eigenen Frage im Chat-Simulator testen.
      </p>
      
      <div className="space-y-8 mb-12 max-w-3xl mx-auto">
        {examples.map((example, index) => (
          <div key={index} className="card p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <p className="font-semibold text-slate-400">Studierender:</p>
              <blockquote className="italic text-slate-300 border-l-2 border-accent pl-4 mt-2">
                "{example.question}"
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-accent">Meine Antwort:</p>
              <div className="text-slate-300 mt-2 pl-4 whitespace-pre-line">
                {example.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ChatSimulator />
    </section>
  )
}