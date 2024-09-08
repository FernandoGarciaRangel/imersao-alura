function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

   if(!campoPesquisa){
    section.innerHTML = "<p>Busca Vazia</p>"
    return
   }
  
   campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo ="";
    let descricao ="";
    let tags = "";
  
    // Itera sobre cada dado na lista de resultados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      // Constrói o HTML para cada resultado, formatando o título, descrição e link
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
}
if(!resultados){
    resultados = "<p>Nenhum resultado encontrado</p>"
}
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }