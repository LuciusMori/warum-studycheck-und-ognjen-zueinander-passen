import { useState, useRef, useEffect } from 'react'

interface Message {
  text: string
  sender: 'user' | 'gemini'
}

export default function ChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hallo! Ich bin Ognjens digitaler Assistent. Stell mir gerne eine Beispielfrage, die ein Kunde von StudyCheck haben könnte.",
      sender: 'gemini'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatDisplayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }])
    setIsLoading(true)

    try {
      // Hier würde normalerweise der Gemini API Call stehen
      // Für die Demo verwenden wir eine simulierte Antwort
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API delay
      
      const simulatedResponse = `Hallo! Vielen Dank für deine Frage: "${userMessage}". 

Das ist eine sehr interessante Anfrage, die ich gerne ausführlich beantworte. Als Customer Care Manager bei StudyCheck würde ich dir zunächst versichern, dass wir dein Anliegen ernst nehmen und eine passende Lösung finden werden.

Lass mich dir erklären, wie wir in einem solchen Fall vorgehen würden: Zunächst würde ich deine spezifische Situation genauer verstehen, um dir die bestmögliche Unterstützung bieten zu können. Dann würde ich dir konkrete Schritte aufzeigen und sicherstellen, dass du alle Informationen erhältst, die du benötigst.

Falls du weitere Fragen hast, stehe ich dir jederzeit gerne zur Verfügung!

Herzliche Grüße,
Ognjen vom Customer Care Team bei StudyCheck`

      setMessages(prev => [...prev, { text: simulatedResponse, sender: 'gemini' }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Entschuldigung, es gab einen Fehler bei der Verarbeitung deiner Anfrage. Bitte versuche es erneut.", 
        sender: 'gemini' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="card p-4 sm:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div 
        ref={chatDisplayRef}
        className="h-80 flex flex-col space-y-2 overflow-y-auto p-4 bg-[#0a192f] rounded-lg mb-4 border border-slate-700"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.sender === 'user' ? 'user-bubble' : 'gemini-bubble'}`}
          >
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center">
            <div className="loader"></div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="...oder teste mich mit deiner eigenen Frage."
          className="flex-grow p-3 bg-slate-800 text-slate-300 border border-slate-700 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none transition"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-accent text-[#0a192f] font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all disabled:bg-slate-600 disabled:cursor-not-allowed"
        >
          Senden
        </button>
      </form>
    </div>
  )
}