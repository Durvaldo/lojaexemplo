export default function Carrinho({ itens, fechar, removerItem }) {
  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div className="carrinho-lateral">
      <button className="fechar" onClick={fechar}>
        ×
      </button>
      <h2>
        Meu Carrinho{" "}
        {itens.length > 0 && (
          <span style={{ marginLeft: "10px", fontSize: "16px", color: "#555" }}>
            Total: R$ {total.toFixed(2)}
          </span>
        )}
      </h2>
      <ul>
        {itens.length === 0 ? (
          <p>Nenhum item no carrinho</p>
        ) : (
          itens.map((item, i) => (
            <li key={i}>
              <img src={item.imgUrl} width={50} alt={item.nome} />
              <div>
                <p>{item.nome}</p>
                <p>R$ {item.preco.toFixed(2)}</p>
              </div>
              <button className="remover" onClick={() => removerItem(i)}>
                X
              </button>
            </li>
          ))
        )}
      </ul>

      {itens.length > 0 && (
        <button className="finalizar-compra">Finalizar compra</button>
      )}
    </div>
  );
}
