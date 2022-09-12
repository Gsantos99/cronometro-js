// Botões
const btnIniciar = document.querySelector('.btn-iniciar')
const btnPausar = document.querySelector('.btn-pausar')
const btnZerar = document.querySelector('.btn-zerar')
const relogio = document.querySelector('.relogio')

// Manipulação do relógio
let timer
let segundos = 0

// Funções
function criaHoraEmSeg(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

function start() {
  clearInterval(timer)
  timer = setInterval(function () {
    segundos++
    relogio.textContent = criaHoraEmSeg(segundos)
    relogio.style.color = 'black'
  }, 1000)
}

// Eventos
btnIniciar.addEventListener('click', start)

btnPausar.addEventListener('click', function pause() {
  clearInterval(timer)
  relogio.style.color = 'red'
})

btnZerar.addEventListener('click', function reset() {
  clearInterval(timer)
  segundos = 0
  relogio.textContent = '00:00:00'
  relogio.style.color = 'black'
})

