import { useState } from 'react';

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Estudar React Router' },
    { id: 2, nome: 'Praticar useState e map' },
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarItem = (e) => {
    e.preventDefault();
    if (!novaTarefa.trim()) return;

    const novoItem = {
      id: Date.now(),
      nome: novaTarefa,
    };

    setTarefas([...tarefas, novoItem]);
    setNovaTarefa('');
  };

  const removerItem = (id) => {
    setTarefas(tarefas.filter((item) => item.id !== id));
  };

  return (
    <main className="main-content">
      <h1>Lista Interativa de Tarefas</h1>

      <form onSubmit={adicionarItem} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Digite um novo item..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Adicionar</button>
      </form>

      <ul>
        {tarefas.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <span>{item.nome}</span>
            <button 
              onClick={() => removerItem(item.id)} 
              style={{ marginLeft: '15px', color: 'red' }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}