import { useState } from 'react';
import CardProps from '../components/CardProps';

export default function Home() {
  const [contador, setContador] = useState(0);

  return (
    <main className="main-content">
      <h1>Página Inicial</h1>
      
      <section className="section-box">
        <h2>Contador Interativo</h2>
        <p>Valor atual: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Incrementar +1</button>
        <button onClick={() => setContador(0)} style={{ marginLeft: '10px' }}>Zerar</button>
      </section>

      <section className="section-box">
        <h2>Componente com Props</h2>
        <CardProps 
          titulo="Boas-vindas!" 
          descricao="Testando alterar a mensagem com props" 
        />
      </section>
    </main>
  );
}