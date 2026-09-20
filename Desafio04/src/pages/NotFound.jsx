import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="main-content">
      <h1>404 - Página Não Encontrada</h1>
      <p>A rota acessada não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  );
}