export default function PersonalNote() {
  return (
    <section className="mb-24 card p-8 rounded-lg shadow-lg border-t-2 border-accent">
      <h3 className="text-2xl font-bold text-center text-slate-200 mb-6">
        Eine persönliche Anmerkung
      </h3>
      <blockquote className="text-center">
        <p className="text-xl italic text-slate-300 leading-relaxed">
          „Ich habe Euren Satz gelesen: ‚Wir verlangen kein Anschreiben von dir – da draußen ist schließlich 2025.' [...] 
          Warum also schreibe ich dir trotzdem? Weil mir Transparenz wichtig ist und ich dir gerne eine Seite von mir zeigen möchte, 
          die ein LinkedIn-Profil nicht vermitteln kann: die persönliche und ehrliche."
        </p>
      </blockquote>
    </section>
  )
}