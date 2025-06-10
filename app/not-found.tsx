export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <div style={{ fontSize: '5rem' }}>🤖</div>
      <h1>404 – Page introuvable</h1>
      <p>Notre assistant IA a cherché partout… mais cette page n’existe pas.</p>
      <a href="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>
        Retour à l'accueil
      </a>
    </div>
  );
}
