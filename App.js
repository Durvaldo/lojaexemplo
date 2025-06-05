import React, { useState } from 'react';
import BarraPesquisa from './components/BarraPesquisa';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';

const produtosFixos = [
  { id: 1, nome: 'Super Mario Bros', preco: 29.9, imgUrl: 'https://via.placeholder.com/150', avaliacao: 5 },
  { id: 2, nome: 'Sonic the Hedgehog', preco: 24.9, imgUrl: 'https://via.placeholder.com/150', avaliacao: 4 },
  { id: 3, nome: 'Legend of Zelda', preco: 39.9, imgUrl: 'https://via.placeholder.com/150', avaliacao: 5 }
];

export default function App() {
  const [termoBusca, setTermoBusca] = useState('');
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const produtosFiltrados = produtosFixos.filter(p =>
    p.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const adicionarAoCarrinho = produto => {
    setItensCarrinho([...itensCarrinho, produto]);
  };

  const removerItem = id => {
    setItensCarrinho(itensCarrinho.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>PixelStore</h1>
      <BarraPesquisa termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
      <button onClick={() => setCarrinhoAberto(true)}>🛒</button>
      <Produtos produtos={produtosFiltrados} adicionarAoCarrinho={adicionarAoCarrinho} />
      <Carrinho
        itens={itensCarrinho}
        removerItem={removerItem}
        aberto={carrinhoAberto}
        toggleCarrinho={() => setCarrinhoAberto(false)}
      />
    </div>
  );
}
