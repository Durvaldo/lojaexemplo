import React from 'react';

export default function Carrinho({ itens, removerItem, aberto, toggleCarrinho }) {
  const total = itens.reduce((acc, item) => acc + item.preco, 0);

  return (
    <aside className={aberto ? 'carrinho aberto' : 'carrinho'}>
      <button onClick={toggleCarrinho}>Fechar</button>
      <h2>Carrinho</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            {item.nome} - R${item.preco.toFixed(2)}
            <button onClick={() => removerItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R${total.toFixed(2)}</p>
    </aside>
  );
}
