"use client"
import { useEffect } from "react"

export default function WhatsApp() {
  useEffect(() => {
    window.location.href = "https://wa.me/5534991893211"
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">💬</div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Campos Consultoria Ambiental
        </h1>
        <p className="text-gray-600 mb-6">
          Redirecionando para o WhatsApp...
        </p>
        
          href="https://wa.me/5534991893211"
          className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600"
        >
          💬 Falar pelo WhatsApp
        </a>
      </div>
    </main>
  )
}
