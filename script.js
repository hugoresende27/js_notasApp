const addBtn = document.getElementById('add')

const notas = JSON.parse(localStorage.getItem('notas')) //para ir buscar o array notas ao localStorage, JSON.parse para vir no formato array e não string
console.log(notas)

if (notas) {//se existirem notas no localStorage, loop forEach com função addNovaNota com o parametro nota
    notas.forEach( nota => addNovaNota(nota))
}
addBtn.addEventListener('click', () => addNovaNota())


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
    const textArea = note.querySelector('textarea') //aqui textarea não leva . porque não é uma classe

    textArea.value = text
    main.innerHTML = marked(text)       //uso da biblioteca marked () para marcar o texto

    deleteBtn.addEventListener('click', () => {//delete das notas, função arrow com eventlistener em click, note remove()
        note.remove()

        updateBN()
    })

    editBtn.addEventListener('click', () => {//delete das notas, função arrow com eventlistener em click, note remove()
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateBN()
    })

    document.body.appendChild(note)     //document.body para usar o body, adicionar uma nota a cadaa uso da função addNovaNota
}

function updateBN () {
    const notasTexto = document.querySelectorAll('textarea')

    const notas = []

    notasTexto.forEach (nota => notas.push(nota.value)) //funçao arrow para fazer push no array notas de cada nota recebida como parametro

   // console.log(notas )

   localStorage.setItem('notas', JSON.stringify(notas))//gravar no localStorage do browser, em formato array
}

