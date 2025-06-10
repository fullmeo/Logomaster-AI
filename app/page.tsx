export default function Page(): JSX.Element {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      padding: '4rem 2rem',
      background: '#f9fafb',
      minHeight: '100vh',
    }}>
      <section style={{ maxWidth: '500px', textAlign: 'left' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#111827',
          marginBottom: '1rem'
        }}>
          Créez des logos uniques grâce à l’intelligence artificielle
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '2rem'
        }}>
          Une solution simple, rapide et puissante pour concevoir des logos professionnels sans designer.
        </p>
        <a href="#create" style={{
          padding: '0.75rem 1.5rem',
          background: '#2563eb',
          color: 'white',
          borderRadius: '0.375rem',
          textDecoration: 'none',
          fontWeight: 500
        }}>
          Commencer maintenant
        </a>
      </section>

      <section>
        <img
          src="/og-image.png"
          alt="Illustration Logomaster AI"
          style={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          }}
        />
      </section>
    </main>
  );
}
