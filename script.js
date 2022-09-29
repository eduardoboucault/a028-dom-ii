const elementoMain = document.querySelector(".container") //* Linkar DOM

//* CÓDIGO M4 COLT
function adicionaItem(){
    const novoItem = document.createElement('article') //* Criar elemento
    const conteudo = document.createTextNode('Novo Item') //* Criar conteúdo
    novoItem.appendChild(conteudo) //* Adicionar novo conteúdo ao elemento criado
    elementoMain.insertAdjacentElement("beforeend" , novoItem) //* Inserir o novo elemento com seu respectivo valor ao elemento com a posição que deseja
    novoItem.setAttribute("class" , "estiloNovo") //* Inserir novo atributo, (primeiro vez o type depois o seu valor)
    novoItem.addEventListener('click', (item) => { removeItem(item)})
}

function removeItem(event){
    event.target.remove()
}

//* CÓDIGO AK-47
// function adicionaItem() {
//     document.querySelector(".container").appendChild(document.createElement("article")).setAttribute("class" , "estiloNovo").addEventListener('click', (item) => { removeItem(item)})
// }