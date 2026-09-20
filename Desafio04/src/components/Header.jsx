import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h2>Meu 1° Projeto React</h2>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/lista">Lista Interativa</Link> | {' '}
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}