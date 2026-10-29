
const dadosGustavoLaSalvia = [
    { produto: "Sofá", categoria: "Sala", quantidade: 5, preco: 2200 },
    { produto: "Mesa", categoria: "Escritório", quantidade: 8, preco: 650 },
    { produto: "Cadeira", categoria: "Escritório", quantidade: 15, preco: 320 },
    { produto: "Guarda-roupa", categoria: "Quarto", quantidade: 4, preco: 1800 }
  ];
  
  const tabelaProdutos = document.getElementById("tabelaProdutos");
  
  dadosGustavoLaSalvia.forEach(function(item) {
      const linha = document.createElement("tr");
  
      linha.innerHTML = `
          <td>${item.produto}</td>
          <td>${item.categoria}</td>
          <td>${item.quantidade}</td>
          <td>${item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
          })}</td>
      `;
  
      tabelaProdutos.appendChild(linha);
  });
  