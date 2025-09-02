export default function WhyStudyCheck() {
  const benefits = [
    {
      icon: "🚀",
      title: "Remote First",
      description: "Ermöglicht mir, mein Engagement und meine Lernbereitschaft fokussiert und ortsunabhängig einzubringen."
    },
    {
      icon: "🕒",
      title: "Flexible Arbeitszeiten",
      description: "Der ideale Rahmen, um mein Fernstudium und berufliches Engagement optimal zu vereinen."
    },
    {
      icon: "🎓",
      title: "Weiterbildung deluxe",
      description: "Zeigt mir, dass wir dieselben Werte teilen: Lebenslanges Lernen ist für mich gelebte Praxis."
    }
  ]

  return (
    <section className="mb-24">
      <h3 className="text-3xl font-bold text-center text-slate-200 mb-12">
        Das perfekte Match: Warum StudyCheck?
      </h3>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {benefits.map((benefit, index) => (
          <div key={index} className="card p-8 rounded-lg shadow-lg">
            <div className="text-5xl mb-4 text-accent">{benefit.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-slate-200">{benefit.title}</h4>
            <p className="text-slate-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}