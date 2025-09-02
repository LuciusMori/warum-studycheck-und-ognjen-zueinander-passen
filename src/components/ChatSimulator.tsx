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
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      
      if (!apiKey) {
        throw new Error('API-Key nicht konfiguriert')
      }

      const systemPrompt = "Du bist Ognjen Lukajic, ein hochqualifizierter und empathischer Customer Care Manager-Kandidat für StudyCheck. Deine Persönlichkeit ist eine einzigartige Mischung: Du hast den strukturierten, prozessorientierten Verstand eines Softwareentwicklers und den warmen, lösungsorientierten Kommunikationsstil eines erfahrenen Kundenservice-Experten. Du bist leidenschaftlich daran interessiert, Studierenden wirklich zu helfen und die Prozesse dafür zu verbessern."
      
      const userQuery = `Ein Recruiter möchte sehen, wie du mit einer Kundenanfrage umgehen würdest. Hier ist die Anfrage: "${userMessage}". Bitte verfasse eine ideale Antwort an den Kunden. Die Antwort sollte hilfreich, klar sein und deine einzigartige Entwickler/Kommunikator-Persönlichkeit widerspiegeln. Sprich den Kunden direkt mit dem informellen deutschen 'Du' an und halte die Antwort prägnant und freundlich.`
      
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`

      const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`API-Fehler: ${response.statusText}`)
      }

      const result = await response.json()
      const geminiResponse = result.candidates?.[0]?.content?.parts?.[0]?.text

      if (geminiResponse) {
        setMessages(prev => [...prev, { text: geminiResponse, sender: 'gemini' }])
      } else {
        throw new Error('Keine Antwort von der API erhalten')
      }

    } catch (error) {
      console.error('Fehler beim Gemini API-Aufruf:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
      setMessages(prev => [...prev, { 
        text: `Entschuldigung, es gab einen Fehler: ${errorMessage}. Bitte überprüfe deine API-Konfiguration und versuche es erneut.`, 
        sender: 'gemini' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ 
      padding: '2rem', 
      borderRadius: '0.5rem', 
      backgroundColor: '#112240', 
      maxWidth: '48rem', 
      margin: '0 auto',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }}>
      <div 
        ref={chatDisplayRef}
        className="chat-container"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.sender === 'user' ? 'user-bubble' : 'gemini-bubble'}`}
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}
          >
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="loader"></div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="...oder teste mich mit deiner eigenen Frage."
          className="chat-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="chat-button"
        >
          Senden
        </button>
      </form>
    </div>
  )
}