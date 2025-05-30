import { useState } from "react";
import Navbar from "./component/Navbar";
import GameCard from "./component/GameCard";
import "./styles.css";
import Carrinho from "./component/Carrinho";

export default function App() {
  const jogos = [
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png",
      nome: "Minecraft",
      preco: 99.92,
      avaliacao: 4.8,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
      nome: "Grand Theft Auto V",
      preco: 89.93,
      avaliacao: 4.9,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png",
      nome: "Red Dead Redemption 2",
      preco: 149.94,
      avaliacao: 4.8,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg",
      nome: "Elden Ring",
      preco: 249.95,
      avaliacao: 4.7,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/5/53/God_of_War_2005_capa.png",
      nome: "God of War (2018)",
      preco: 199.96,
      avaliacao: 4.9,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
      nome: "Marvel's Spider-Man",
      preco: 159.96,
      avaliacao: 4.8,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png",
      nome: "Cyberpunk 2077",
      preco: 189.92,
      avaliacao: 4.0,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png",
      nome: "GTA V",
      preco: 79.99,
      avaliacao: 4.9,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/e/e9/Assassins_Creed_Valhalla_capa.png",
      nome: "Assassin's Creed Valhalla",
      preco: 149.93,
      avaliacao: 4.3,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/pt/2/21/Mortal_Kombat_11_capa.jpg",
      nome: "Mortal Konbat 11",
      preco: 99.94,
      avaliacao: 4.8,
    },
  ];

  let [jogosDisplay, setJogosDisplay] = useState(jogos);
  let [carrinhoItens, setCarrinhoItens] = useState([]);
  let [mostrarCarrinho, setMostrarCarrinho] = useState(false); // novo estado

  // ...funções
  function mostraItensCarrinho() {
    setMostrarCarrinho(true); // abrir modal
  }

  function adicionarAoCarrinho(jogo) {
    const existe = carrinhoItens.some((item) => item.nome === jogo.nome);

    if (!existe) {
      setCarrinhoItens([...carrinhoItens, jogo]);
    }
  }

  function removerItemDoCarrinho(indice) {
    const novoCarrinho = carrinhoItens.filter((_, i) => i !== indice);
    setCarrinhoItens(novoCarrinho);
  }

  function filtrarJogos(filtro) {
    let jogosFiltrados = [];

    for (let index = 0; index < jogos.length; index++) {
      const jogo = jogos[index];
      if (jogo.nome.toLowerCase().includes(filtro.toLowerCase())) {
        jogosFiltrados.push(jogo);
      }
    }
    setJogosDisplay(jogosFiltrados ?? jogos);
  }

  return (
    <>
      <Navbar
        filtro={filtrarJogos}
        itens={carrinhoItens.length}
        mostrarCarrinho={mostraItensCarrinho}
      />

      {mostrarCarrinho && (
        <Carrinho
          itens={carrinhoItens}
          fechar={() => setMostrarCarrinho(false)}
          removerItem={removerItemDoCarrinho}
        />
      )}

      <h1 style={{ textAlign: "center" }}>Jogos em destaque</h1>
      <div className="game-shop">
        {jogosDisplay.map((jogo, index) => (
          <GameCard
            key={index}
            id={index}
            imgUrl={jogo.imgUrl}
            nome={jogo.nome}
            preco={jogo.preco}
            avaliacao={jogo.avaliacao}
            aoAdicionar={() => adicionarAoCarrinho(jogo)}
          />
        ))}
      </div>
    </>
  );
}
