import React from 'react';

export default function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <div className="produtos">
      {produtos.map(produto => (
        <div key={produto.id} className="produto-card">
          <img src={produto.imgUrl} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>R${produto.preco.toFixed(2)}</p>
          <p>{'⭐'.repeat(produto.avaliacao)}</p>
          <button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
}
