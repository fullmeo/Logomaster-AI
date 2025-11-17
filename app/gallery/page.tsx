import Card from '@/components/Card';

const EXAMPLE_LOGOS = [
  { id: 1, company: 'TechVision', industry: 'Technology', style: 'Modern', color: 'from-blue-500 to-cyan-500' },
  { id: 2, company: 'GreenLeaf', industry: 'Eco-friendly', style: 'Minimalist', color: 'from-green-500 to-emerald-500' },
  { id: 3, company: 'ArtSpace', industry: 'Creative', style: 'Elegant', color: 'from-purple-500 to-pink-500' },
  { id: 4, company: 'FastFood', industry: 'Restaurant', style: 'Playful', color: 'from-orange-500 to-red-500' },
  { id: 5, company: 'FinanceHub', industry: 'Finance', style: 'Classic', color: 'from-indigo-500 to-blue-500' },
  { id: 6, company: 'FitLife', industry: 'Health & Fitness', style: 'Bold', color: 'from-red-500 to-orange-500' },
  { id: 7, company: 'CloudSync', industry: 'SaaS', style: 'Modern', color: 'from-sky-500 to-blue-500' },
  { id: 8, company: 'PetCare', industry: 'Pet Services', style: 'Playful', color: 'from-amber-500 to-yellow-500' },
  { id: 9, company: 'LuxuryStay', industry: 'Hospitality', style: 'Elegant', color: 'from-violet-500 to-purple-500' },
  { id: 10, company: 'EduTech', industry: 'Education', style: 'Modern', color: 'from-teal-500 to-cyan-500' },
  { id: 11, company: 'GameHub', industry: 'Gaming', style: 'Bold', color: 'from-fuchsia-500 to-pink-500' },
  { id: 12, company: 'MediaPro', industry: 'Media', style: 'Classic', color: 'from-slate-500 to-gray-500' },
];

const FILTERS = ['Tous', 'Modern', 'Minimalist', 'Elegant', 'Playful', 'Classic', 'Bold'];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galerie de{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Logos
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez des exemples de logos créés par notre IA pour vous inspirer
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all
                ${filter === 'Tous'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {EXAMPLE_LOGOS.map((logo, index) => (
            <Card
              key={logo.id}
              hover
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-square bg-gradient-to-br rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-10`}></div>
                <div className={`w-24 h-24 bg-gradient-to-br ${logo.color} rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {logo.company.charAt(0)}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{logo.company}</h3>
              <p className="text-sm text-gray-600 mb-2">{logo.industry}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                  {logo.style}
                </span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 bg-primary-100 text-primary-600 rounded hover:bg-primary-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button className="p-1.5 bg-accent-100 text-accent-600 rounded hover:bg-accent-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à créer votre propre logo ?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Rejoignez des milliers d'utilisateurs satisfaits
          </p>
          <a
            href="/hermetic"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Commencer maintenant
          </a>
        </Card>
      </div>
    </div>
  );
}
