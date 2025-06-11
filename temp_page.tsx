    })
    await new Promise(resolve => setTimeout(resolve, 700 + Math.random() * 400))
  }
}

// 📄 PAGE HERMÉTIQUE - app/hermetic/page.tsx

export default function HermeticLogoPage() {
  const [formData, setFormData] = useState<BusinessFormData>({
    businessName: '',
    businessDescription: '',
    industry: 'tech',
    style: 'modern',
    complexity: 77, // Nombre sacré
    modernity: 66,  
    professionalism: 88
  })
  
  const { hermeticAnalysis, logoData, generationState, generateHermeticLogo } = useHermeticGeneration()

  const handleFormSubmit = async (data: BusinessFormData) => {
    setFormData(data)
    await generateHermeticLogo(data)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-4">
            🜃 LogoMaster AI Hermétique 🜃
          </h1>
          <p className="text-xl text-purple-200">
            Générateur de Logos par la Trinité Universelle
          </p>
          <p className="text-purple-300 mt-2">
            Alchimie • Kabbale de Pinel • Résonance Morphique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Hermétique */}
          <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-8 border border-purple-500/30">
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(formData) }} className="space-y-6">
              <div>
                <label className="block text-yellow-300 font-semibold mb-2">
                  🏛️ Nom de l'Entité
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  className="w-full bg-black/50 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                  placeholder="Nom de votre projet..."
                  required
                />
              </div>

              <div>
                <label className="block text-yellow-300 font-semibold mb-2">
                  📜 Essence & Vision
                </label>
                <textarea
                  value={formData.businessDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessDescription: e.target.value }))}
                  className="w-full bg-black/50 border border-purple-500/50 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                  rows={4}
                  placeholder="Décrivez l'essence de votre projet, sa mission, sa vision..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={generationState.isGenerating}
                className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-600 text-black font-bold py-4 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                {generationState.isGenerating ? '⚡ Invocation en cours...' : '🜃 Invoquer la Trinité'}
              </button>
            </form>
          </div>

          {/* Résultats Hermétiques */}
          <div className="space-y-6">
            {/* Canvas Principal */}
            <div className="relative bg-black/50 backdrop-blur-lg rounded-xl border border-yellow-500/30 p-8">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-900/20 to-black/50 rounded-xl flex items-center justify-center relative overflow-hidden">
                
                {generationState.isGenerating && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-purple-600/20 flex flex-col items-center justify-center z-10">
                    <div className="text-xl mb-4 animate-pulse text-yellow-300">🜃 Trinité en Œuvre</div>
                    <div className="w-48 h-1 bg-purple-500/30 rounded-full mb-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-purple-400 transition-all duration-500"
                        style={{ width: `${generationState.progress}%` }}
                      />
                    </div>
                    <div className="text-sm text-purple-200 text-center px-4">
                      {generationState.currentStep}
                    </div>
                  </div>
                )}
                
                {logoData ? (
                  <div 
                    className="w-full h-full flex items-center justify-center p-4"
                    dangerouslySetInnerHTML={{ __html: logoData.svg }}
                  />
                ) : (
                  <div className="text-center text-purple-300">
                    <div className="text-4xl mb-2">🜃</div>
                    <p>Le Logos Hermétique se manifestera ici</p>
                  </div>
                )}
              </div>
            </div>

            {/* Analyse Hermétique */}
            {hermeticAnalysis && (
              <div className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-yellow-300 font-bold mb-4">🔬 Analyse de la Trinité</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-orange-400 text-2xl font-bold">
                      {hermeticAnalysis.alchemical.elementalSignature?.FIRE ? '🔥' : 
                       hermeticAnalysis.alchemical.elementalSignature?.AIR ? '💨' :
                       hermeticAnalysis.alchemical.elementalSignature?.WATER ? '🌊' : '🌍'}
                    </div>
                    <div className="text-xs text-purple-200">Alchimie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 text-2xl font-bold">
                      {hermeticAnalysis.kabbalistic.gematrie.reduction_theosophique}
                    </div>
                    <div className="text-xs text-purple-200">Kabbale</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 text-2xl font-bold">∞</div>
                    <div className="text-xs text-purple-200">Morphique</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-lg p-4">
                  <div className="text-yellow-300 font-semibold">Niveau d'Unification :</div>
                  <div className="text-white">{hermeticAnalysis.trinity.unificationLevel}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}