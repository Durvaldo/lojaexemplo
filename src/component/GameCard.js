export default function GameCard({
  imgUrl,
  nome,
  preco,
  avaliacao,
  aoAdicionar,
}) {
  return (
    <div className="game-card">
      <img className="game-img" src={imgUrl} alt="jogo-imagem" />
      <h3 className="game-name">{nome}</h3>
      <button onClick={aoAdicionar}>Adicionar ao carrinho</button>
      <h3 className="game-price"> R$ {preco}</h3>
      <span className="game-rate">⭐ {avaliacao}</span>
    </div>
  );
}
