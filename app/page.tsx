'use client'

import { useState } from 'react'
import { Sparkles, Video, Hash, Clock, FileText, Music, TrendingUp } from 'lucide-react'

interface VideoIdea {
  idea: string
  script: {
    visualContent: string
    movements: string
    onScreenText: string
    audioType: string
  }
  post: {
    caption: string
    callToAction: string
    hashtags: string[]
  }
  publication: {
    format: string
    title: string
    timing: string
  }
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [videoIdea, setVideoIdea] = useState<VideoIdea | null>(null)
  const [niche, setNiche] = useState('')

  const generateVideoIdea = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ niche }),
      })

      const data = await response.json()
      setVideoIdea(data.videoIdea)
    } catch (error) {
      console.error('Error generating video idea:', error)
      alert('Errore durante la generazione. Riprova.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Video className="w-10 h-10 text-pink-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              TikTok Viral Agent
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Crea contenuti virali in pochi secondi con l'intelligenza artificiale
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
          <div className="mb-6">
            <label htmlFor="niche" className="block text-sm font-semibold text-gray-700 mb-2">
              Nicchia o Tema (opzionale)
            </label>
            <input
              type="text"
              id="niche"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="es. fitness, cucina, comedy, beauty, tech..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
            />
          </div>

          <button
            onClick={generateVideoIdea}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-4 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Generazione in corso...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Genera Video Virale
              </>
            )}
          </button>
        </div>

        {videoIdea && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-pink-600" />
                <h2 className="text-2xl font-bold text-gray-800">Idea Virale</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{videoIdea.idea}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">Script del Video</h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Contenuto Visivo</h3>
                  <p className="text-gray-600">{videoIdea.script.visualContent}</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Movimenti/Transizioni</h3>
                  <p className="text-gray-600">{videoIdea.script.movements}</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Testo On-Screen</h3>
                  <p className="text-gray-600">{videoIdea.script.onScreenText}</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    Audio Consigliato
                  </h3>
                  <p className="text-gray-600">{videoIdea.script.audioType}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Hash className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Copy del Post</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Caption</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{videoIdea.post.caption}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Call to Action</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{videoIdea.post.callToAction}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Hashtags</h3>
                  <div className="flex flex-wrap gap-2">
                    {videoIdea.post.hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Guida alla Pubblicazione</h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <Video className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Formato Video</h3>
                    <p className="text-gray-600">{videoIdea.publication.format}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Titolo Suggerito</h3>
                    <p className="text-gray-600">{videoIdea.publication.title}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Timing di Pubblicazione</h3>
                    <p className="text-gray-600">{videoIdea.publication.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-3">📱 Pronto per TikTok!</h3>
              <p className="mb-4 opacity-90">
                Il tuo contenuto è pronto per essere filmato e pubblicato. Usa le indicazioni sopra per creare un video che rispetti le linee guida di TikTok.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm">
                  <strong>Nota:</strong> La pubblicazione automatica richiede l'integrazione con l'API di TikTok.
                  Per ora, usa questo tool come guida creativa per i tuoi contenuti!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="text-center mt-12 text-gray-600 text-sm">
        <p>Tutti i contenuti devono rispettare le linee guida della community di TikTok</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </main>
  )
}
