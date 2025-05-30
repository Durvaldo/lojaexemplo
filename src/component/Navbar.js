export default function Navbar({ itens, mostrarCarrinho, filtro }) {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          width={90}
          src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/882.png"
          alt="draco-logo"
        />
        <h1>DRACO</h1>
      </div>
      <div className="nav-controls">
        <input
          onChange={(e) => {
            filtro(e.target.value);
          }}
          type="text"
          placeholder="Pesquisar jogo"
        />
        <button onClick={mostrarCarrinho}>
          Carrinho <span>{itens}</span>
        </button>
      </div>
    </div>
  );
}
