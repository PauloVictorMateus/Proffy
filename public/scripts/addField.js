//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField() {
    //Duplicar os campos, quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //Limpar cada campo
    fields.forEach(function (field) {
        field.value = ""  
    })
    //Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
