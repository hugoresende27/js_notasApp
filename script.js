const addBtn = document.getElementById('add')

addBtn.addEventListener('click', ()=> addNovaNota())


////////////////////////////////////////////////////////////////////////////

function addNovaNota ( text = '') {
    const note = document.createElement('div')
    note.classList.add('nota')

    note.innerHTML= `
    <div class="ferr">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>        
    <textarea class= "${text ? "hidden" : ""}"></textarea>
    `
    //operador ternário em cima, se na função, a div com classe main receber text como parametro vai ter classe "vazia", se não receber text como parametro classe "hidden"; se a função receber texto a classe vai ser "hidden", se não classe "vazia"

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('.textarea')

    deleteBtn.addEventListener('click', () => {//delete das notas, função arrow com eventlistener em click, note remove()
        note.remove()
    })

    // editBtn.addEventListener('click', () => {//delete das notas, função arrow com eventlistener em click, note remove()
    //     main.classList.toggle('hidden')
    //     textArea.classList.toggle('hidden')
    // })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })


    document.body.appendChild(note)     //document.body para usar o body, adicionar uma nota a cadaa uso da função addNovaNota
}