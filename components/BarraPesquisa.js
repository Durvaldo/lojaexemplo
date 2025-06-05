import React from 'react';

export default function BarraPesquisa({ termoBusca, setTermoBusca }) {
  return (
    <input
      type="text"
      placeholder="Buscar jogos..."
      value={termoBusca}
      onChange={e => setTermoBusca(e.target.value)}
    />
  );
}
