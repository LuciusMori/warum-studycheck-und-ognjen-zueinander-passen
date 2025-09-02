export default function DeveloperCommunicator() {
  return (
    <section className="mb-24 grid md:grid-cols-5 gap-8 items-center card p-8 rounded-lg shadow-lg">
      <div className="md:col-span-3 md:pr-8">
        <h3 className="text-3xl font-bold text-slate-200 mb-4">
          Der Kern: Zwei Welten, ein Profil
        </h3>
        <p className="text-slate-400 mb-4">
          Ich bewerbe mich bewusst außerhalb der reinen IT, weil ich die Balance suche und liebe. 
          Ich verbinde das Beste aus zwei Welten, um Probleme ganzheitlich zu lösen.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="font-bold text-lg text-accent">Der Entwickler</h4>
            <p className="text-slate-400">
              Analytisch, strukturiert und leidenschaftlich darin, Prozesse zu hinterfragen und smarter zu gestalten.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-accent">Der Kommunikator</h4>
            <p className="text-slate-400">
              Empathisch, lösungsorientiert und erfahren im direkten Austausch mit Menschen, um wirklich zu helfen.
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 grid grid-cols-1 gap-6 text-center">
        <div className="bg-[#0a192f] p-6 rounded-lg border border-slate-700">
          <span className="text-6xl font-extrabold text-accent">15</span>
          <p className="font-semibold text-slate-300 mt-2">Jahre Erfahrung im Kundendienst</p>
        </div>
        <div className="bg-[#0a192f] p-6 rounded-lg border border-slate-700">
          <span className="text-6xl font-extrabold text-accent">100%</span>
          <p className="font-semibold text-slate-300 mt-2">Leidenschaft für Prozessoptimierung</p>
        </div>
      </div>
    </section>
  )
}