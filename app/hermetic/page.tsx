export default function HermeticPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #581c87, #312e81, #000)',
      color: 'white',
      padding: '3rem 1rem',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #fbbf24, #f97316, #a855f7)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: '1rem'
        }}>
          🜃 LogoMaster AI Hermétique 🜃
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#c4b5fd', marginBottom: '2rem' }}>
          Générateur de Logos par la Trinité Universelle
        </p>
        <p style={{ color: '#a78bfa' }}>
          Alchimie • Kabbale de Pinel • Résonance Morphique
        </p>
        
        <div style={{
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '1rem',
          padding: '2rem',
          marginTop: '3rem',
          textAlign: 'left'
        }}>
          <h2 style={{ color: '#fbbf24', marginBottom: '1rem' }}>🎨 Interface en cours de développement</h2>
          <p>La Trinité Hermétique se prépare...</p>
          <div style={{ marginTop: '2rem' }}>
            <div style={{ color: '#f97316' }}>🔥 Alchimie - Transmutation élémentaire</div>
            <div style={{ color: '#fbbf24' }}>🔯 Kabbale - Géomatrie sacrée</div>
            <div style={{ color: '#06b6d4' }}>🌌 Morphique - Résonance universelle</div>
          </div>
        </div>

        <a href="/" style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(45deg, #fbbf24, #f97316)',
          color: 'black',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          ← Retour à l'accueil
        </a>
      </div>
    </main>
  )
}
